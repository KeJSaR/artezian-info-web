$(function() {

  //file input field trigger when the drop box is clicked
  $('#dropBox').click(function() {
    $('#fileInput').click();
  });

  //prevent browsers from opening the file when its dragged and dropped
  $(document).on('drop dragover', function (e) {
    e.preventDefault();
  });

  //call a function to handle file upload on select file
  $('input[type=file]').on('change', fileUpload);

});

function dataURItoBlob(dataURI) {

  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;

  if (dataURI.split(',')[0].indexOf('base64') >= 0) {
    byteString = atob(dataURI.split(',')[1]);
  } else {
    byteString = unescape(dataURI.split(',')[1]);
  }

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], {type:mimeString});
}

function fileUpload(e) {

  $('#dropBox').html(e.target.value + ' uploading...');

  var file = e.target.files[0];

  if (!file.type.match('image.*')) {
    $('#dropBox').html('Please choose an images file.');
  } else {

    var img = document.createElement("img");
    img.src = window.URL.createObjectURL(file);
    $('#thumbnail').html(img);

    img.onload = function() {
      // var canvas = document.getElementById('canvas');
      var canvas = document.createElement("canvas");
      var MAX_WIDTH = 300;
      var MAX_HEIGHT = 300;
      var width = img.width;
      var height = img.height;
      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }
      canvas.width = width;
      canvas.height = height;
      var ctx = canvas.getContext("2d");
      // manually draw a white background on the canvas
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, width, height);
      // draw the image
      ctx.drawImage(img, 0, 0, width, height);

      var dataURL = canvas.toDataURL('image/jpeg', 0.9);
      var blob = dataURItoBlob(dataURL);
      var fd = new FormData();
      fd.append('file', blob, 'blob.jpeg');

      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'upload.php', true);
      xhr.send(fd);
      xhr.onload = function () {
        $('#dropBox').html(xhr.responseText);
        var response = JSON.parse(xhr.responseText);
        if (xhr.status === 200 && response.status == 'ok') {
          $('#dropBox').html('File has been uploaded successfully. Click to upload another.');
        } else if (response.status == 'type_err') {
          $('#dropBox').html('Please choose an images file. Click to upload another.');
        } else {
          $('#dropBox').html('Some problem occured, please try again.');
        }
      };
    };
  }
}
