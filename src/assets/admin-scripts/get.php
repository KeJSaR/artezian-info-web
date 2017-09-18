<?php

  require("validator.php");
  require("db-conn.php");

  $v = new Validator();
  $type = $v->getType();

  switch ($type) {
    case 'menu':
      getMenu();
      break;

    case 'article':
      getArticle($v);
      break;
  }

  function connect()
  {
    $db = new Db_Conn;
    return $db->getConnection();
  }

  /*
   * ===========================================================================
   * Menu
   * ===========================================================================
   */
  function getMenuData()
  {
    $dbh = connect();

    $sql = 'SELECT link, name
              FROM menu
              ORDER BY id';

    $sth = $dbh->prepare($sql);
    $sth->execute();

    return $sth->fetchAll();
  }

  function getMenu()
  {
    $menuData = getMenuData();
    $js = json_encode($menuData);
    echo $js;
  }

  /*
   * ===========================================================================
   * Articles
   * ===========================================================================
   */
  function getArticleList($page, $hasSubtitle, $hasImg, $hasIntro)
  {
    $dbh = connect();

    $sql = 'SELECT link, title';

    if ($hasSubtitle) $sql .= ', subtitle';
    if ($hasImg)      $sql .= ', img';
    if ($hasIntro)    $sql .= ', intro';

    switch ($page) {
      case 'articles':
        $sql .= ' FROM articles ';
        break;

      case 'info':
        $sql .= ' FROM info ';
        break;

      case 'rules':
        $sql .= ' FROM rules ';
        break;

      case 'special':
        $sql .= ' FROM special ';
        break;
    }

    $sql .= 'ORDER BY id';

    $sth = $dbh->prepare($sql);
    $sth->execute();

    return $sth->fetchAll();
  }

  function getArticleText($page, $link)
  {
    $dbh = connect();

    $sql = 'SELECT title, subtitle, img, intro, content ';

    switch ($page) {
      case 'articles':
        $sql .= ' FROM articles ';
        break;

      case 'info':
        $sql .= ' FROM info ';
        break;

      case 'rules':
        $sql .= ' FROM rules ';
        break;

      case 'special':
        $sql .= ' FROM special ';
        break;
    }

    $sql .= 'WHERE link = :link';

    $sth = $dbh->prepare($sql);
    $sth->bindValue(':link', $link, PDO::PARAM_STR);
    $sth->execute();

    return $sth->fetch();
  }

  function getArticle($v)
  {
    $contentType = $v->getContentType();
    $r = '';
    if ($contentType === 'list') {
      $articlePage = $v->getArticlePage();
      $hasSubtitle = $v->getHasSubtitle();
      $hasImg      = $v->getHasImg();
      $hasIntro    = $v->getHasIntro();
      $r = getArticleList($articlePage, $hasSubtitle, $hasImg, $hasIntro);
    } else if ($contentType === 'text') {
      $articlePage = $v->getArticlePage();
      $articleLink = $v->getArticleLink();
      $r = getArticleText($articlePage, $articleLink);
    }
    $js = json_encode($r);
    echo $js;
  }



