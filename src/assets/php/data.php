<?php

require_once "queries.php";

class Data
{

    private $queries;

    function __construct()
    {
        if (array_key_exists("get", $_POST)) {
            $this->queries = new Queries();
            // sleep(1);
            $this->init();
        }
    }

    private function init()
    {
        $data = "";

        if (strlen($_POST["get"]) > 0) {
            $data = $this->get_data($_POST["get"]);
        }

        if ($data !== "" ) {
            $this->return_data($data);
        }
    }

    private function get_data($get)
    {
        switch ($get) {
            case "menu":
                return $this->get_menu();
                break;

            case "texts":
                return $this->get_texts();
                break;

            case "intros":
                return $this->get_intros();
                break;

            case "article":
                return $this->get_article();
                break;

            case "galleries":
                return $this->get_galleries();
                break;

            case "images":
                return $this->get_images();
                break;

            default:
                return "";
                break;
        }
    }

    /**
     * #########################################################################
     */

    private function is_page_valid($page)
    {
        return strlen($page) ? $this->queries->is_page_exist($page) : false;
    }

    private function get_page()
    {
        $k = array_key_exists("page", $_POST);
        $v = $this->is_page_valid($_POST["page"]);
        return $k && $v ? $_POST["page"] : "";
    }

    private function is_alias_valid($alias)
    {
        return strlen($alias) ? $this->queries->is_alias_exist($alias) : false;
    }

    private function get_alias()
    {
        $k = array_key_exists("alias", $_POST);
        $v = $this->is_alias_valid($_POST["alias"]);
        return $k && $v ? $_POST["alias"] : "";
    }
    
    private function is_gallery_id_valid($gallery_id)
    {
        return strlen($gallery_id) ? $this->queries->is_gallery_exist($gallery_id) : false;
    }

    private function get_gallery_id()
    {
        $k = array_key_exists("gallery_id", $_POST);
        $v = $this->is_gallery_id_valid($_POST["gallery_id"]);
        return $k && $v ? $_POST["gallery_id"] : "";
    }

    /**
     * #########################################################################
     */

    private function get_menu()
    {
        return $this->queries->get_menu();
    }

    private function get_texts()
    {
        $p = $this->get_page();
        $id = $p !== "" ? $this->queries->get_menu_id($p) : "";
        return $id !== "" ? $this->queries->get_texts($id) : "";
    }

    private function get_intros()
    {
        $p = $this->get_page();
        $id = $p !== "" ? $this->queries->get_menu_id($p) : "";
        return $id !== "" ? $this->queries->get_intros($id) : "";
    }

    private function get_author($author_id)
    {
        return $this->queries->get_author($author_id);
    }

    private function get_article()
    {
        // Get article data
        $p = $this->get_page();
        $a = $this->get_alias();
        $id = $p !== "" && $a !== "" ? $this->queries->get_menu_id($p) : "";
        $article = $id !== "" ? $this->queries->get_article($id, $a) : "";
        // Get author data
        $author = $this->get_author($article["author_id"]);
        // Add author data to article
        $article["author_name"]  = $author["name"];
        $article["author_title"] = $author["title"];
        return $article;
    }
    
    private function get_galleries()
    {
        return $this->queries->get_galleries();
    }
    
    private function get_images()
    {
        $g = $this->get_gallery_id();
        return $g !== "" ? $this->queries->get_images($g) : "";
    }

    /**
     * #########################################################################
     */

    private function return_data($data)
    {
        echo json_encode($data);
    }

}

$data = new Data();
