
// Send new article data on server #####################################

function getCurrUrl() {
  return window.location.href.replace('add.html', '');
}

function getCurrDate() {
  return new Date().toISOString().slice(0, 19).replace('T', ' ');
}

function modalBox(headerText, bodyText, footerText) {
  $('#modal').css('display', 'block');

  $('#modal .close').click(function() {
    $('#modal').css('display', 'none');
  });

  $('#modal .modal-header').prepend($('<h2></h2>').html(headerText));
  $('#modal .modal-body').append($('<div></div>').html(bodyText));
  $('#modal .modal-footer').append($('<h3></h3>').html(footerText));
}

$('#submit').click(function() {

  tinyMCE.triggerSave();

  var currUrl = getCurrUrl();
  var url = currUrl + 'add.php';

  var currDate = getCurrDate();

  $.post(url, {
    'title':   $('#article-title').val(),
    'intro':   $('#article-intro').val(),
    'section': $('#article-section').val(),
    'image':   $('#article-image').val(),
    'content': $('#article-content').val(),
    'date':    currDate
  }).done(function( data ) {
    let h = 'Статья отправлена на сервер';
    let b = data;
    let f = 'Just footer text';
    modalBox(h, b, f);
  }).fail(function(e) {
    let h = 'Произошла ошибка. Статья не добавлена';
    let b = e.responseText;
    let f = 'Just footer text';
    modalBox(h, b, f);
  });
});

// TinyMCE #############################################################

// Prevent Bootstrap dialog from blocking focusin
$(document).on('focusin', function(e) {
  if ($(e.target).closest('.mce-window').length) {
    e.stopImmediatePropagation();
  }
});

tinymce.init({
  selector: '#article-intro',
  height: 294,
  menubar: false,
  statusbar: false,
  paste_as_text: true,
  plugins: 'paste autolink advcode link lists textcolor colorpicker',
  toolbar: 'bold italic underline | subscript superscript | strikethrough forecolor backcolor | removeformat | bullist numlist | link unlink | code'
});

tinymce.init({
  selector: '#article-content',
  menubar: false,
  statusbar: false,
  paste_as_text: true,
  image_advtab: true,
  plugins: 'autolink autoresize hr lists link image charmap paste searchreplace visualblocks visualchars advcode insertdatetime media table imagetools directionality textcolor',
  toolbar1: 'alignleft aligncenter alignright alignjustify alignnone | outdent indent | ltr rtl | styleselect formatselect fontsizeselect',
  toolbar2: 'bullist numlist | bold italic underline subscript superscript | strikethrough forecolor backcolor | removeformat | blockquote hr | link unlink | searchreplace | code',
  toolbar3: 'image rotateleft rotateright flipv fliph editimage imageoptions | media charmap insertdatetime | cut copy paste | table | visualblocks visualchars | undo redo',
  table_toolbar: 'tabledelete tablecellprops tablemergecells tablesplitcells tableinsertrowbefore tableinsertrowafter tabledeleterow tablerowprops tablecutrow tablecopyrow tablepasterowbefore tablepasterowafter tableinsertcolbefore tableinsertcolafter tabledeletecol'
});

// Preview an image before it is uploaded ##############################

function readURL(input) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#sample-image').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}

$('#article-image').change(function(){
  readURL(this);
});
