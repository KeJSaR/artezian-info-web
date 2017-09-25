<?php

require("conn.php");

function connect()
{
  $db = new Db_Conn;
  return $db->getConnection();
}

function check_post_type()
{
  return filter_input(INPUT_POST, "update", FILTER_SANITIZE_NUMBER_INT);
}

function get_article_update_data()
{
  return array(
    "section" => $_POST["section"],
    "title"   => $_POST["title"],
    "intro"   => $_POST["intro"],
    "content" => $_POST["content"],
    "id"      => $_POST["id"],
  );
}

function get_date()
{
  return $_POST["date"];
}

function update_article($article_data)
{
  $dbh = connect();

  $sql = "UPDATE article
          SET section_id = :section,
              title      = :title,
              intro      = :intro,
              content    = :content
          WHERE article_id = :article_id";

  try {
    $sth = $dbh->prepare($sql);
    $sth->execute(array(
      ":section"    => $article_data["section"],
      ":title"      => $article_data["title"],
      ":intro"      => $article_data["intro"],
      ":content"    => $article_data["content"],
      ":article_id" => $article_data["id"],
    ));
  }
  catch(PDOException $e)
  {
    echo $sql . "<br>" . $e->getMessage();
  }

  return false;
}

function get_last_article_id()
{
  $dbh = connect();

  $sql = 'SELECT article_id
          FROM article
          ORDER BY article_id DESC LIMIT 1';

  try {
    $sth = $dbh->prepare($sql);
    $sth->execute();
    $result = $sth->fetch();
  }
  catch(PDOException $e)
  {
    echo $sql . "<br>" . $e->getMessage();
  }

  return $result["article_id"];
}

function check_if_empty($id)
{
  $dbh = connect();

  $sql = 'SELECT section_id, title, intro, content
              FROM article
              WHERE article_id = :article_id';

  try {
    $sth = $dbh->prepare($sql);
    $sth->execute(array(
      ':article_id' => $id,
    ));
    $article_data = $sth->fetch();
  }
  catch(PDOException $e)
  {
    echo $sql . "<br>" . $e->getMessage();
  }

  if ( $article_data["section_id"] == ""
    && $article_data["title"]      == ""
    && $article_data["intro"]      == ""
    && $article_data["content"]    == ""
  ) {
    return TRUE;
  }

  return FALSE;
}

function update_empty_article($last_article_id, $date)
{
  $dbh = connect();

  $sql = "UPDATE article
          SET date = :date
          WHERE article_id = :article_id";

  try {
    $sth = $dbh->prepare($sql);
    $sth->execute(array(
      ":date"       => $date,
      ":article_id" => $last_article_id,
    ));
  }
  catch(PDOException $e)
  {
    echo $sql . "<br>" . $e->getMessage();
  }

  return false;
}

function create_empty_article($date)
{
  $dbh = connect();

  $sql = "INSERT INTO article (date)
          VALUES (:date)";

  try {
    $sth = $dbh->prepare($sql);
    $sth->execute(array(
      ":date" => $date,
    ));
  }
  catch(PDOException $e)
  {
    echo $sql . "<br>" . $e->getMessage();
  }

  return $dbh->lastInsertId();
}

/**
 * Start function that checks if we should update existed but empty
 * article or create new empty article
 * @return string id of the empty article
 * @return boolean false if article updated with data successfully
 */
function init() {
  // Check POST type
  $is_update = check_post_type();

  if ($is_update) {
    // Get article data from POST
    $article_data = get_article_update_data();
    // Update exist article with data
    return update_article($article_data);
  } else {
    // Create empty article to get its ID
    $date = get_date();
    $last_article_id = get_last_article_id();
    $if_empty = check_if_empty($last_article_id);
    if ($if_empty) {
      $err = update_empty_article($last_article_id, $date);
      if ($err) {
        return $err;
      } else {
        return $last_article_id;
      }
    } else {
      return create_empty_article($date);
    }
  }
}

echo init();
