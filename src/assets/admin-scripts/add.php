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
    "title"   => $_POST["title"],
    "intro"   => $_POST["intro"],
    "section" => $_POST["section"],
    "image"   => $_POST["image"],
    "content" => $_POST["content"],
    "date"    => $_POST["date"],
  );
}

function get_menu_data($section, $date, $image, $title, $intro, $content)
{
  $dbh = connect();

  $sql = "INSERT INTO article (section_id, date, image, title, intro, content)
                 VALUES (:section, :date, :image, :title, :intro, :content)";

  try {
    $sth = $dbh->prepare($sql);
    $sth->execute(array(
      ':section' => $section,
      ':date'    => $date,
      ':image'   => $image,
      ':title'   => $title,
      ':intro'   => $intro,
      ':content' => $content
    ));
    return "Статья успешно добавлена!";
  }
  catch(PDOException $e)
  {
    return $sql . "<br>" . $e->getMessage();
  }
}

$post_data = get_post_data();

$result = get_menu_data(
  $post_data['section'],
  $post_data['date'],
  $post_data['image'],
  $post_data['title'],
  $post_data['intro'],
  $post_data['content']
);

echo $result;
