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

function get_article_initial_data()
{
  return array(
    "date" => $_POST["date"],
  );
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
    return false;
  }
  catch(PDOException $e)
  {
    return $sql . "<br>" . $e->getMessage();
  }
}

function create_article($article_data)
{
  $dbh = connect();

  $sql = "INSERT INTO article (date)
          VALUES (:date)";

  try {
    $sth = $dbh->prepare($sql);
    $sth->execute(array(
      ":date" => $article_data["date"],
    ));
    return $dbh->lastInsertId();
  }
  catch(PDOException $e)
  {
    return $sql . "<br>" . $e->getMessage();
  }
}

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
    $article_data = get_article_initial_data();
    return create_article($article_data);
  }
}

echo init();
