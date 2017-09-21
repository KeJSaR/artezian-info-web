<?php

require("conn.php");

function connect()
{
  $db = new Db_Conn;
  return $db->getConnection();
}

function get_post_data()
{
  return filter_input(INPUT_POST, 'id', FILTER_SANITIZE_NUMBER_INT);;
}

function delete_article($id)
{
  $dbh = connect();

  $dbh->exec('DELETE FROM article
              WHERE article_id = ' . $id);
}

$id = get_post_data();

delete_article($id);
