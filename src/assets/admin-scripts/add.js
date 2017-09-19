
// Send new article data on server #####################################

$('#submit').click(function() {

  tinyMCE.triggerSave();

  $.post( "http://localhost/aae-admin/set.php", {
    'title':   $('#article-title').val(),
    'intro':   $('#article-intro').val(),
    'section': $('#article-section').val(),
    'image':   $('#article-image').val(),
    'content': $('#article-content').val()
  }).done(function( data ) {
    $('#test-data').append( $('<p></p>').html('data: ' + data) );
  }).fail(function(e) {
    alert('Произошла ошибка. Статья не добавлена.');
    $('#test-data').append( $('<p></p>').html(e.responseText) );
  });

  // $('#test-data').append( $('<p></p>').html('title: ' + title) );
});

// TinyMCE #############################################################

// Prevent Bootstrap dialog from blocking focusin
$(document).on('focusin', function(e) {
  if ($(e.target).closest(".mce-window").length) {
    e.stopImmediatePropagation();
  }
});

tinymce.init({
  selector: '#article-intro',
  height: 294,
  menubar: false,
  plugins: 'autolink advcode link lists textcolor colorpicker',
  toolbar: 'bold italic underline | subscript superscript | strikethrough forecolor backcolor | bullist numlist | link unlink | code',
  image_advtab: true,
  statusbar: false,
  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tinymce.com/css/codepen.min.css']
});

tinymce.init({
  selector: "#article-content",
  height: 500,
  menubar: false,
  statusbar: false,
  plugins: `autolink autoresize
    hr lists link image charmap paste searchreplace visualblocks visualchars advcode insertdatetime media table imagetools directionality textcolor`,

  toolbar1: "alignleft aligncenter alignright alignjustify alignnone | outdent indent | ltr rtl | styleselect formatselect fontsizeselect",
  toolbar2: "bullist numlist | bold italic underline subscript superscript | strikethrough forecolor backcolor | removeformat | blockquote hr | link unlink | table | searchreplace | visualblocks visualchars",
  toolbar3: "image rotateleft rotateright flipv fliph editimage imageoptions | media charmap insertdatetime | cut copy paste pastetext | undo redo | code",

  table_toolbar: "tabledelete tablecellprops tablemergecells tablesplitcells tableinsertrowbefore tableinsertrowafter tabledeleterow tablerowprops tablecutrow tablecopyrow tablepasterowbefore tablepasterowafter tableinsertcolbefore tableinsertcolafter tabledeletecol",
  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tinymce.com/css/codepen.min.css'],
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

$("#article-image").change(function(){
  readURL(this);
});
