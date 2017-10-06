
// Create empty article in DB to get article_id ########################

function getCurrUrl() {
  return window.location.href.replace('add.html', '');
}

function getCurrDate() {
  return new Date().toISOString().slice(0, 19).replace('T', ' ');
}

function sendArticleData(url, id) {

  tinyMCE.triggerSave();

  let articleSection = $('#article-section input[name=section]:checked').data('section');
  let articleTitle   = $('#article-title').val();
  let articleIntro   = $('#article-intro').val();
  let articleContent = $('#article-content').val();

  $.post(url, {
    'update'  : 1,
    'id'      : id,
    'section' : articleSection,
    'title'   : articleTitle,
    'intro'   : articleIntro,
    'content' : articleContent
  }).done(function(data) {
    let h = 'Статья отправлена на сервер';
    let b = data;
    $('#test-data').html('<div>' + h + '</div><div>' + b + '</div>');
  }).fail(function(e) {
    let h = 'Произошла ошибка. Статья не добавлена';
    let b = e.responseText;
    $('#test-data').html('<div>' + h + '</div><div>' + b + '</div>');
  });
}

function getArticleId() {

    var currUrl  = getCurrUrl();
    var url      = currUrl + 'add.php';

    var currDate = getCurrDate();

    $.post(url, {
      'update' : 0,
      'date'   : currDate
    }).done(function(id) {
      $('#test-data').html('<div>Article ID: ' + id + '</div>');
      $('body').data('article-id', id);

      // On submit - send article data to the server
      $('#submit').click(function() {
        sendArticleData(url, id);
      });

    }).fail(function(e) {
      let h = 'Произошла ошибка. Article ID не получено.';
      let b = e.responseText;
      $('#test-data').html('<div>' + h + '</div><div>' + b + '</div>');
    });
}

getArticleId();

// TinyMCE #############################################################

// Prevent Bootstrap dialog from blocking focusin
$(document).on('focusin', function(e) {
  if ($(e.target).closest('.mce-window').length) {
    e.stopImmediatePropagation();
  }
});

tinymce.init({
  selector      : '#article-intro',
  menubar       : false,
  statusbar     : false,
  paste_as_text : true,
  autoresize_max_height: 200,
  plugins       : 'paste autolink autoresize advcode link lists textcolor colorpicker',
  toolbar       : 'bold italic underline | subscript superscript | strikethrough forecolor backcolor | removeformat | bullist numlist | link unlink | code'
});

tinymce.init({
  selector      : '#article-content',
  menubar       : false,
  statusbar     : false,
  paste_as_text : true,
  image_advtab  : true,
  autoresize_max_height: 500,
  plugins       : 'autolink autoresize hr lists link image charmap paste searchreplace visualblocks visualchars advcode insertdatetime media table imagetools directionality textcolor',
  toolbar1      : 'alignleft aligncenter alignright alignjustify alignnone | outdent indent | ltr rtl | styleselect formatselect fontsizeselect',
  toolbar2      : 'bullist numlist | bold italic underline subscript superscript | strikethrough forecolor backcolor | removeformat | blockquote hr | link unlink | searchreplace | code',
  toolbar3      : 'image rotateleft rotateright flipv fliph editimage imageoptions | media charmap insertdatetime | cut copy paste | table | visualblocks visualchars | undo redo',
  table_toolbar : 'tabledelete tablecellprops tablemergecells tablesplitcells tableinsertrowbefore tableinsertrowafter tabledeleterow tablerowprops tablecutrow tablecopyrow tablepasterowbefore tablepasterowafter tableinsertcolbefore tableinsertcolafter tabledeletecol'
});
//
// // Preview an image before it is uploaded ##############################
//
// function readURL(input) {
//
//   if (input.files && input.files[0]) {
//
//     var image = input.files[0];
//
//     var name = image.name;
//     var type = image.type;
//     var size = image.size;
//
//     $('#test-data').append('name: <b>' + name + '</b><br>; ' + 'type: <b>' + type + '</b><br>; ' + 'size: <b>' + size + '</b><br>;');
//
//     var reader = new FileReader();
//
//     reader.onload = function (e) {
//       $('#sample-image').attr('src', e.target.result);
//     }
//
//     reader.readAsDataURL(input.files[0]);
//
//     // -------------------------------------------
//
//     var sendData = new FormData();
//     sendData.append('fileToUpload', image, name);
//
//     $('#sample-image').show();
//
//     $.ajax({
//       url: 'upload.php',
//       type: 'POST',
//       data: sendData,
//       cache: false,
//       contentType: false,
//       processData: false,
//
//       xhr: function() {
//         var myXhr = $.ajaxSettings.xhr();
//         if (myXhr.upload) {
//           // For handling the progress of the upload
//           myXhr.upload.addEventListener('progress', function(e) {
//             if (e.lengthComputable) {
//               $('progress').attr({
//                 value: e.loaded,
//                 max: e.total,
//               });
//             }
//           } , false);
//         }
//         return myXhr;
//       },
//     }).done(function(data) {
//       $('#test-data').append(data);
//     });
//
//   }
// }
//
// $('#article-image').change(function(){
//   readURL(this);
// });
