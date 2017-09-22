
// Get id of the article from url
function getId() {
  return window.location.search.slice(4);
}

function getEditUrl() {
  return window.location.href.replace('html', 'php');
}

// Send id to server by POST
function getArticle() {
  var id = getId();
  var editUrl = getEditUrl();

  $.post(editUrl, {
    'id': id,
    'update': '0'
  // Get article data from server
  }).done(function(data) {
    // $('#test-data').html(data);
    var article = JSON.parse(data);
    // Fill out form fields on page
    $('#article-title').val(article.title);
    $('#article-section option[value="' + article.section + '"]').prop('selected', true)
    $('#article-intro').html(article.intro);
    $('#article-image').val(article.image);
    $('#article-content').html(article.content);

    $('#submit').click(function(e) {
      e.preventDefault();

      var id = getId();
      var editUrl = getEditUrl();

      tinyMCE.triggerSave();

      $.post(editUrl, {
        // Send updated article data to server
        'id'         : id,
        'update'     : '1',
        'section_id' : $('#article-section').val(),
        'image'      : $('#article-image').val(),
        'title'      : $('#article-title').val(),
        'intro'      : $('#article-intro').val(),
        'content'    : $('#article-content').val(),
      }).done(function(data) {
        // $('#test-data').html(data);
        location.reload();
      });
    });
  });
}

getArticle();

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
