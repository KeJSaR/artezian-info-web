<?php
//
// var_dump($_FILES);
//
// $file_path     = $_FILES["fileToUpload"]["tmp_name"];
// $file_size     = $_FILES["fileToUpload"]["size"];
//
// $old_file_name = basename($_FILES["fileToUpload"]["name"]);
// $file_type     = pathinfo($old_file_name, PATHINFO_EXTENSION);
//
// $target_dir    = "uploads/";
// $target_path   = $target_dir . basename($_FILES["fileToUpload"]["name"]);
//
// $is_loaded     = 1;
//
// echo '<p>Starting work...</p>';
// echo '<p><strong>$file_path</strong>    : ' . $file_path . '</p>';
// echo '<p><strong>$file_size</strong>    : ' . $file_size . '</p>';
// echo '<p><strong>$old_file_name</strong>: ' . $old_file_name . '</p>';
// echo '<p><strong>$file_type</strong>    : ' . $file_type . '</p>';
// echo '<p><strong>$target_dir</strong>   : ' . $target_dir . '</p>';
// echo '<p><strong>$target_path</strong>  : ' . $target_path . '</p>';
// echo '<p><strong>$is_loaded</strong>    : ' . $is_loaded . '</p>';
// // exit;
//
// // Check if image file is a actual image or fake image
// if (isset($_POST["submit"])) {
//   $check = getimagesize($file_path);
//   if ($check !== false) {
//     echo "File is an image - " . $check["mime"] . ".";
//     $is_loaded = 1;
//   } else {
//     echo "File is not an image.";
//     $is_loaded = 0;
//   }
// }
//
// // Check if file already exists
// if (file_exists($target_path)) {
//   echo "Sorry, file already exists.";
//   $is_loaded = 0;
// }
//
// // Check file size
// if ($file_size > 500000) {
//   echo "Sorry, your file is too large.";
//   $is_loaded = 0;
// }
//
// // Allow certain file formats
// if ($file_type != "jpg" && $file_type != "png" && $file_type != "jpeg" && $file_type != "gif" ) {
//   echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
//   $is_loaded = 0;
// }
//
// // Check if $is_loaded is set to 0 by an error
// if ($is_loaded == 0) {
//   echo "Sorry, your file was not uploaded.";
// } else {
//   // if everything is ok, try to upload file
//   if (move_uploaded_file($file_path, $target_path)) {
//     echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
//   } else {
//     echo "Sorry, there was an error uploading your file.";
//   }
// }

if (isset($_POST) == true) {

  if (isset($_POST["delete"]) == true && isset($_POST["name"]) == true) {

    $targetFilePath = "uploads/" . $_POST["name"];
    unlink($targetFilePath);

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
