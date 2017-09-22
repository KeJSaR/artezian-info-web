<?php

require("conn.php");

function connect()
{
  $db = new Db_Conn;
  return $db->getConnection();
}

function get_action()
{
  return filter_input(INPUT_POST, "update", FILTER_SANITIZE_NUMBER_INT);
}

function get_id()
{
  return filter_input(INPUT_POST, "id", FILTER_SANITIZE_NUMBER_INT);
}

function get_post_data()
{
  return array(
    "section_id" => $_POST["section_id"],
    "image"      => $_POST["image"],
    "title"      => $_POST["title"],
    "intro"      => $_POST["intro"],
    "content"    => $_POST["content"],
  );
}

function update_article_data($id, $post_data)
{
  $dbh = connect();

  $sql = "UPDATE article
          SET section_id = :section_id,
              image      = :image,
              title      = :title,
              intro      = :intro,
              content    = :content
          WHERE article_id = :article_id";

  try {
    $sth = $dbh->prepare($sql);
    $sth->execute(array(
      ":section_id" => $post_data["section_id"],
      ":image"      => $post_data["image"],
      ":title"      => $post_data["title"],
      ":intro"      => $post_data["intro"],
      ":content"    => $post_data["content"],
      ":article_id" => $id,
    ));
  }
  catch(PDOException $e)
  {
    return $sql . "<br>" . $e->getMessage();
  }

  return false;
}

function get_article_data($id)
{
  $dbh = connect();

  $sql = "SELECT section_id, image, title, intro, content
          FROM article
          WHERE article_id = " . $id;

  try {
    $sth = $dbh->prepare($sql);
    $sth->execute();
  }
  catch(PDOException $e)
  {
    return $sql . "<br>" . $e->getMessage();
  }

  return $sth->fetch();
}

function init()
{
  $update = get_action();
  $id     = get_id();

  if ($update) {
    $post_data = get_post_data();
    // return $post_data;
    return update_article_data($id, $post_data);
  } else {
    return get_article_data($id);
  }
}

$result = init();

echo json_encode($result);
