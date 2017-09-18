<?php

  class Db_Conn
  {
    protected $db;
    protected $db_host = 'localhost';
    protected $db_name = 'artezian';
    protected $db_pass = '09876poiuy)(*&^';
    protected $db_user = 'artezian';
    protected $db_char = 'utf8';

    function __construct()
    {
      $dsn = "mysql:host=$this->db_host;"
           . "dbname=$this->db_name;"
           . "charset=$this->db_char";

      $attr = array(
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false
      );

      $this->db = new PDO($dsn, $this->db_user, $this->db_pass, $attr);
    }

    public function getConnection()
    {
      return $this->db;
    }

  }
