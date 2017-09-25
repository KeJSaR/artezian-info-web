<?php

require("conn.php");

function connect()
{
  $db = new Db_Conn;
  return $db->getConnection();
}

function get_post_data()
{
  $post_data = array();
  if (isset($_POST["type"])) {
    $post_data['type'] = $_POST["type"];
  }
  if (isset($_POST["id"])) {
    $post_data['id'] = $_POST["id"];
  }
  if (isset($_POST["section"])) {
    $post_data['section'] = $_POST["section"];
  }
  return $post_data;
}

/*
  * ===========================================================================
  * Articles
  * ===========================================================================
  */
function get_list($section)
{
  $dbh = connect();

  $sql = 'SELECT article_id, section_id, date, title';

  if ($section) {
    $sql .= ' WHERE section = :section';
  }

  $sql .= ' FROM article ORDER BY date';

  $sth = $dbh->prepare($sql);

  if ($section) {
    $sth->execute(array(
      ':section' => $section,
    ));
  } else {
    $sth->execute();
  }

  return $sth->fetchAll();
}

function get_article($id)
{
  $dbh = connect();

  $sql = 'SELECT section_id, date, title, intro, content
              FROM article
              WHERE id = :id';

  $sth = $dbh->prepare($sql);
  $sth->execute(array(
    ':id' => $id,
  ));

  return $sth->fetch();
}

function get_section()
{
  $dbh = connect();

  $sql = 'SELECT section_id, title FROM section';

  $sth = $dbh->prepare($sql);
  $sth->execute();

  return $sth->fetchAll();
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
  } else if ($contentType === 'section') {
    $data = get_section();
  }

  return $data;
}

$post_data = get_post_data();

$data = get_db_data($post_data);

$encoded_data = json_encode($data);

echo $encoded_data;
