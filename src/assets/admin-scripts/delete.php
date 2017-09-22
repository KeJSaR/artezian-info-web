<?php

require("conn.php");

function connect()
{
  $db = new Db_Conn;
  return $db->getConnection();
}

function get_id()
{
  return filter_input(INPUT_POST, "id", FILTER_SANITIZE_NUMBER_INT);
}

function delete_article($id)
{
  $dbh = connect();

  $dbh->exec("DELETE FROM article
              WHERE article_id = " . $id);
}

$id = get_id();

delete_article($id);
