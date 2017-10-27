<?php

$arrayName = array('name' => $_POST["username"], 'string' => $_POST["password"] );

echo json_encode($arrayName);