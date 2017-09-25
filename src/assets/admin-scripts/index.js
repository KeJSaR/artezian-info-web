
function checkArticle() {
  $('tr').click(function() {

    var isChecked = $(this).hasClass('checked');

    $('tr.checked i').removeClass('fa-check-square-o').addClass('fa-square-o');
    $('tr.checked').removeClass('checked');
    $('.btn-outline-primary').prop('disabled', false);
    $('.btn-outline-warning').prop('disabled', true);
    $('.btn-outline-danger').prop('disabled', true);

    if ( !isChecked ) {
      $(this).addClass('checked');
      $('tr.checked i').removeClass('fa-square-o').addClass('fa-check-square-o');
      $('.btn-outline-primary').prop('disabled', true);
      $('.btn-outline-warning').prop('disabled', false);
      $('.btn-outline-danger').prop('disabled', false);
    }
  });
}

function getCurrUrl() {
  return window.location.href.replace('index.html', '');
}

var currUrl = getCurrUrl();
var getUrl = currUrl + 'get.php';
var deleteUrl = currUrl + 'delete.php';

function deleteArticle(id) {
  $.post(deleteUrl, {
    'id': id
  }).done(function(data) {
    $('#test-data').html(data);
    window.location.assign(currUrl);
  });
}

$('button').click(function() {
  var page = $(this).data('page');
  if (page === 'add') {
    window.location.assign(currUrl + page + '.html');
  }
  if (page === 'edit') {
    var id = $('tr.checked i').data('id');
    window.location.assign(currUrl + page + '.html?id=' + id);
  }
  if (page === 'delete') {
    var id = $('tr.checked i').data('id');

    if (id) {
      var isDelete = confirm('Удалить статью ' + id + '?');
      if (isDelete != null) {
        deleteArticle(id);
      }
    } else {
      alert('Выберите статью, которую желаете удалить');
    }
  }
});

function getSections() {
  $.post(getUrl, {
    'type': 'section'
  }).done(function( data ) {
    var obj = JSON.parse(data);
    var sections = {};
    obj.forEach(function(element) {
      sections[element.section_id] = element.title;
    });
    makeArticlesTable(sections);
  });
}

function makeArticlesTable(sections) {
  $.post(getUrl, {
    'type': 'list',
    'section': 0,
  }).done(function( data ) {
    $('#test-data').html(data);
    var obj = JSON.parse(data);
    obj.forEach(function(element) {
      $('#articles-list tbody').append(`
        <tr>
          <th>${element.article_id}</th>
          <td><i class="fa fa-square-o" aria-hidden="true" data-id="${element.article_id}"></i></td>
          <td>${element.date}</td>
          <td>${sections[element.section_id]}</td>
          <td>${element.title}</td>
          <td><img src="article-main-image-${element.article_id}" alt="${element.title}"></td>
        </tr>
      `);
    });
    checkArticle();
  });
}

getSections();
