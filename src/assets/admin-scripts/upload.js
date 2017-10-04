$(function() {

  var showThumbnail = function(img) {
    $('#article-image').hide();
    $('#main-img-box .close').show(0, function() {
      $(this).click(function() {
        $('#article-image').show();
        $('#main-img-box .close').hide();
        $('#thumbnail').empty();
        var $el = $('#article-image');
        $el.wrap('<form>').closest('form').get(0).reset();
        $el.unwrap();
        
        var id = $('body').data('article-id');
        deleteImage(id + '-pic.jpeg');
        deleteImage(id + '-img.jpeg');
      });
    });
    $('#thumbnail').html(img);
  }

  $('#article-image').on('change', function(e) {

    var file = e.target.files[0];

    if (!file.type.match('image.*')) {
      $('#upload-text').html('Please choose an images file.');
    } else {
      var img = document.createElement('img');
      img.src = window.URL.createObjectURL(file);

      img.onload = function() {
        uploadImage(img, 'large');
        uploadImage(img, 'small');
        showThumbnail(img);
      };
    }

  });

  function uploadImage(img, size) {
    var dim;
    var name;
    var id = $('body').data('article-id');

    if (size === 'small') {
      dim  = 300;
      name = id + '-pic';
    }

    if (size === 'large') {
      dim  = 1200;
      name = id + '-img';
    }

    var canvas = createCanvas(dim, dim, img);
    var fd     = makeFormData(canvas, name);
    makeRequest(fd);
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
        width  *= maxH / height;
        height  = maxH;
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

  function makeFormData(canvas, n) {
    var dataURL = canvas.toDataURL('image/jpeg', 0.9);
    var blob    = dataURItoBlob(dataURL);
    var fd      = new FormData();

    var name = n + '.jpeg';

    fd.append('file', blob, name);

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

  function deleteImage(name) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'upload.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send('delete=1&name=' + name);
    xhr.onload = function () {
      replyToUser(xhr.status, 'deleted');
    };
  }

  function replyToUser(status, response) {
    var message = '';

    if (status === 200 && response == 'ok') {
      message = 'File has been uploaded successfully.';
    } else if (response == 'type_err') {
      message = 'Please choose an images file.';
    } else if (response == 'deleted') {
      message = 'File has been deleted.';
    } else if (response == 'not_exists') {
      message = 'File does not exist on server.';
    } else {
      message = 'Some problem occured, please try again.';
    }

    $('#upload-text').html(message);
  }
});
