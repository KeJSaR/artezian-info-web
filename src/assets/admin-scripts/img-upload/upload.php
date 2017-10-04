<?php
if (isset($_POST) == true) {

  if (isset($_POST["delete"]) == true && isset($_POST["name"]) == true) {
    $targetFilePath = "uploads/" . $_POST["name"];
    if (unlink($targetFilePath)) {
      $response["status"] = "deleted";
    } else {
      $response["status"] = "not_exists";
    }
    echo json_encode($response);
  } else {
    $targetFilePath = "uploads/" . basename($_FILES["file"]["name"]);
    $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);

    if ($fileType == "jpeg") {
      //upload file to server
      if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)) {
        //insert file data into the database if needed
        //........
        $response["status"] = "ok";
      } else {
        $response["status"] = "err";
      }
    } else {
      $response["status"] = "type_err";
    }

    echo json_encode($response);
  }

}
