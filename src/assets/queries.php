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

    public function page_exist($page)
    {
        $q = "SELECT * FROM menu WHERE alias=?";
        return DB::run($q, [$page])->fetch() ? true : false;
    }

    public function alias_exist($alias)
    {
        $q = "SELECT * FROM article WHERE alias=?";
        return DB::run($q, [$alias])->fetch() ? true : false;
    }

    public function get_menu()
    {
        $q = "SELECT * FROM menu";
        return DB::run($q)->fetchAll();
    }

    public function get_menu_id($page)
    {
        $q = "SELECT id FROM menu WHERE alias=?";
        $arr = DB::run($q, [$page])->fetch();
        return $arr["id"];
    }

    public function get_texts($id)
    {
        $q = "SELECT id, text FROM text WHERE menu_id=?";
        return DB::run($q, [$id])->fetchAll();
    }

    public function get_intros($id)
    {
        $q = "SELECT id, alias, title, intro FROM article WHERE menu_id=?";
        return DB::run($q, [$id])->fetchAll();
    }

    public function get_article($id, $alias)
    {
        $q  = "SELECT id, alias, title, intro, content ";
        $q .= "FROM article WHERE menu_id=? AND alias=?";
        return DB::run($q, [$id, $alias])->fetchAll();
    }

}
