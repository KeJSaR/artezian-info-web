<?php

require("conn.php");

function connect()
{
  $db = new Db_Conn;
  return $db->getConnection();
}

function get_post_data()
{
  return array(
    "type"    => $_POST["type"], // article or list
    "id"      => $_POST["id"], // article id
    "section" => $_POST["section"], // all, info or articles - 0, 1 or 2
  );
}

/*
  * ===========================================================================
  * Articles
  * ===========================================================================
  */
function get_list($section)
{
  $dbh = connect();

  $sql = 'SELECT article_id, section_id, date, image, title, intro';

  if ($section) {
    $sql .= ' WHERE section = :section';
  }

  $sql .= ' ORDER BY date';

  $sth = $dbh->prepare($sql);
  $sth->execute(array(
    ':section' => $section,
  ));

  return $sth->fetchAll();
}

function get_article($id)
{
  $dbh = connect();

  $sql = 'SELECT section_id, date, image, title, intro, content
              WHERE id = :id';

  $sth = $dbh->prepare($sql);
  $sth->execute(array(
    ':id' => $id,
  ));

  return $sth->fetch();
}

function get_db_data($post_data)
{
  $contentType = $post_data['type'];
  $data = '';

  if ($contentType === 'list') {
    $section = $post_data["section"];
    $data = get_list($section);
  } else if ($contentType === 'article') {
    $id = $post_data["id"];
    $data = get_article($id);
  }

  return $data;
}

$post_data = get_post_data();

$data = get_db_data($post_data);

$encoded_data = json_encode($data);

echo $encoded_data;
