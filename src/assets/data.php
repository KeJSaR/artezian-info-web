<?php

require_once "queries.php";

// $arrayName = array('name' => $_POST["username"], 'string' => $_POST["password"] );

if (array_key_exists('get', $_POST) && $_POST['get'] === 'menu') {
    echo json_encode(get_menu());
}

// echo json_encode($arrayName);