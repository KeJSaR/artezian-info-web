<?php

require_once 'database.php';

// #############################################################################

// # Table creation

// DB::query("CREATE temporary TABLE pdowrapper (id int auto_increment primary key, name varchar(255))");

// #############################################################################

// # Prepared statement multiple execution

// $stmt = DB::prepare("INSERT INTO pdowrapper VALUES (NULL, ?)");
// foreach (['Sam','Bob','Joe'] as $name)
// {
//     $stmt->execute([$name]);
// }
// var_dump(DB::lastInsertId());

// Result:
// string(1) "3"

// #############################################################################

// # Getting rows in a loop

// $stmt = DB::run("SELECT * FROM pdowrapper");
// while ($row = $stmt->fetch(PDO::FETCH_LAZY))
// {
//     echo $row['name'],",";
//     echo $row->name,",";
//     echo $row[1], PHP_EOL;
// }

// Result:
// Sam,Sam,Sam
// Bob,Bob,Bob
// Joe,Joe,Joe

// #############################################################################

// # Getting one row

// $id  = 1;
// $row = DB::run("SELECT * FROM pdowrapper WHERE id=?", [$id])->fetch();
// var_export($row);

// Result:
// array (
//   'id' => '1',
//   'name' => 'Sam',
// )

// #############################################################################

// # Getting single field value

// $name = DB::run("SELECT name FROM pdowrapper WHERE id=?", [$id])->fetchColumn();
// var_dump($name);

// Result:
// string(3) "Sam"

// #############################################################################

// # Getting array of rows

// $all = DB::run("SELECT name, id FROM pdowrapper")->fetchAll(PDO::FETCH_KEY_PAIR);
// var_export($all);

// Result:
// array (
//   'Sam' => '1',
//   'Bob' => '2',
//   'Joe' => '3',
// )

// #############################################################################

// # Update

// $new = 'Sue';
// $stmt = DB::run("UPDATE pdowrapper SET name=? WHERE id=?", [$new, $id]);
// var_dump($stmt->rowCount());

// Result:
// int(1)

// #############################################################################

class Queries
{
    /**
     * Checkers
     */

    public function is_alias_exist($alias)
    {
        $q = "SELECT id
              FROM menu 
              WHERE alias=?";

        return DB::run($q, [$alias])->fetch() ? true : false;
    }

    public function is_subalias_exist($id, $subalias)
    {
        $q = "SELECT id
              FROM article 
              WHERE menu_id=? AND id=?";

        return DB::run($q, [$id, $subalias])->fetch() ? true : false;
    }

    public function is_gallery_subalias_exist($subalias)
    {
        $q = "SELECT id
              FROM gallery 
              WHERE id=?";

        return DB::run($q, [$subalias])->fetch() ? true : false;
    }
    
    public function is_gallery_exist($gallery_id)
    {
        $q = "SELECT id
              FROM gallery 
              WHERE id=?";

        return DB::run($q, [$gallery_id])->fetch() ? true : false;
    }

    /**
     * Get Menu data
     */

    public function get_menu_items()
    {
        $q = "SELECT alias, name, info
              FROM menu";

        return DB::run($q)->fetchAll();
    }

    public function get_menu_id($alias)
    {
        $q = "SELECT id
              FROM menu
              WHERE alias=?";
        $arr = DB::run($q, [$alias])->fetch();

        return $arr["id"];
    }

    public function get_section_name($id)
    {
        $q = "SELECT name
              FROM menu
              WHERE id=?";
        $arr = DB::run($q, [$id])->fetch();

        return $arr["name"];
    }

    public function get_section_info($id)
    {
        $q = "SELECT info
              FROM menu
              WHERE id=?";
        $arr = DB::run($q, [$id])->fetch();

        return $arr["info"];
    }

    /**
     * Get Text data
     */

    public function get_texts($id)
    {
        $q = "SELECT id, content
              FROM text 
              WHERE menu_id=?";

        return DB::run($q, [$id])->fetchAll();
    }

    /**
     * Get Author data
     */

    public function get_author($author_id)
    {
        $q = "SELECT name, info
              FROM author 
              WHERE id=?";

        return DB::run($q, [$author_id])->fetch();
    }

    /**
     * Get Article data
     */

    public function get_blog_items($id)
    {
        $q = "SELECT id, date, title, author_id, intro
              FROM article 
              WHERE menu_id=?";
        $blog = DB::run($q, [$id])->fetchAll();

        foreach ($blog as $id => $article) {
            $blog[$id]["author"] = $this->get_author($article["author_id"]);
            unset($blog[$id]["author_id"]);
        }

        return $blog;
    }

    public function get_article($menu_id, $id)
    {
        $q = "SELECT id, date, title, author_id, intro, content
              FROM article 
              WHERE menu_id=? AND id=?";

        return DB::run($q, [$menu_id, $id])->fetch();
    }

    public function get_author_id($menu_id, $id)
    {
        $q = "SELECT author_id
              FROM article 
              WHERE menu_id=? AND id=?";
        $arr = DB::run($q, [$menu_id, $id])->fetch();

        return $arr["author_id"];
    }

    public function get_article_title($menu_id, $id)
    {
        $q = "SELECT title
              FROM article 
              WHERE menu_id=? AND id=?";
        $arr = DB::run($q, [$menu_id, $id])->fetch();

        return $arr["title"];
    }

    /**
     * Get Gallery data
     */

    public function get_galleries()
    {
        $q = "SELECT id, image_id, name, info
              FROM gallery";

        return DB::run($q)->fetchAll();
    }

    public function get_gallery_images($gallery_id)
    {
        $q = "SELECT alias, name 
              FROM image 
              WHERE gallery_id=?";

        return DB::run($q, [$gallery_id])->fetchAll();
    }

    public function get_gallery_info($gallery_id)
    {
        $q = "SELECT id, image_id, name, info
              FROM gallery 
              WHERE id=?";

        return DB::run($q, [$gallery_id])->fetch();
    }

    public function get_gallery_title($gallery_id)
    {
        $q = "SELECT name
              FROM gallery 
              WHERE id=?";
        $arr = DB::run($q, [$gallery_id])->fetch();

        return $arr["name"];
    }

    /**
     * Check Image
     */

    public function is_image_exist($image)
    {
        $url = "../../articles-photos/" . $image . ".jpg";
        return file_exists($url) ? "true" : "false";
    }

}
