$(function() {

  $('#dropBox').click(function() {
    $('#fileInput').click();
  });

  $(document).on('drop dragover', function (e) {
    e.preventDefault();
  });

  $('#fileInput').on('change', fileUpload);
});

function fileUpload(e) {
  $('#dropBox').html(e.target.value + ' uploading...');

  var file = e.target.files[0];

  if (!file.type.match('image.*')) {
    $('#dropBox').html('Please choose an images file.');
  } else {
    var img = document.createElement('img');
    img.src = window.URL.createObjectURL(file);
    $('#thumbnail').html(img);

    img.onload = function() {
      var canvas = createCanvas(300, 300, img);
      var fd     = makeFormData(canvas);
      makeRequest(fd);
    };
  }
}

function createCanvas(maxW, maxH, img) {
  var canvas = document.createElement('canvas');
  var width  = img.width;
  var height = img.height;

  if (width > height) {
    if (width > maxW) {
      height *= maxW / width;
      width   = maxW;
    }
  } else {
    if (height > maxH) {
      width *= maxH / height;
      height = maxH;
    }
  }

  canvas.width  = width;
  canvas.height = height;

  return drawFromCanvas(canvas, img, width, height);
}

function drawFromCanvas(canvas, img, w, h) {
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, w, h);

  ctx.drawImage(img, 0, 0, w, h);

  return canvas;
}

function dataURItoBlob(dataURI) {
  var splits     = dataURI.split(',')[1];
  var isBase64   = dataURI.split(',')[0].indexOf('base64') >= 0;
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  var byteString = isBase64 ? atob(splits) : unescape(splits);
  var ia         = new Uint8Array(byteString.length);

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], {type:mimeString});
}

function makeFormData(canvas) {
  var dataURL = canvas.toDataURL('image/jpeg', 0.9);
  var blob    = dataURItoBlob(dataURL);
  var fd      = new FormData();

  fd.append('file', blob, 'blob.jpeg');

  return fd;
}

function makeRequest(fd) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'upload.php', true);
  xhr.send(fd);
  xhr.onload = function () {
    var response = JSON.parse(xhr.responseText);
    replyToUser(xhr.status, response.status);
  };
}

function replyToUser(status, response) {
  var message = '';

  if (status === 200 && response == 'ok') {
    message = 'File has been uploaded successfully. Click to upload another.';
  } else if (response == 'type_err') {
    message = 'Please choose an images file. Click to upload another.';
  } else {
    message = 'Some problem occured, please try again.';
  }

  $('#dropBox').html(message);
}
