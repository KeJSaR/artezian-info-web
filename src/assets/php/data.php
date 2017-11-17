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

        if ($data) {
            $this->return_data($data);
        }
    }

    private function get_data($get)
    {
        switch ($get) {
            case "menu-items":
                return $this->get_menu_items();
                break;

            case "section-name":
                return $this->get_section_name();
                break;

            case "subsection-name":
                return $this->get_subsection_name();
                break;

            case "section-info":
                return $this->get_section_info();
                break;

            case "texts":
                return $this->get_texts();
                break;
                
            case "blog-items":
                return $this->get_blog_items();
                break;

            case "article":
                return $this->get_article();
                break;

            case "author-info":
                return $this->get_author_info();
                break;

            case "galleries":
                return $this->get_galleries();
                break;

            case "gallery-images":
                return $this->get_gallery_images();
                break;

            case "gallery-info":
                return $this->get_gallery_info();
                break;

            case "is-image-exist":
                return $this->is_image_exist();
                break;

            default:
                return "";
                break;
        }
    }

    /**
     * Get POST data ###########################################################
     */

    /**
     * Section Alias
     */

    // Check Section Alias

    private function is_alias_valid($alias)
    {
        return strlen($alias) ? $this->queries->is_alias_exist($alias) : false;
    }

    // Get Section Alias

    private function get_alias()
    {
        $k = array_key_exists("alias", $_POST);
        $v = $this->is_alias_valid($_POST["alias"]);
        return $k && $v ? $_POST["alias"] : "";
    }

    /**
     * Subsection Alias
     */

    // Check Subsection Alias

    private function is_subalias_valid($id, $subalias)
    {
        return strlen($subalias) ? $this->queries->is_subalias_exist($id, $subalias) : false;
    }

    private function is_gallery_subalias_valid($subalias)
    {
        return strlen($subalias) ? $this->queries->is_gallery_subalias_exist($subalias) : false;
    }

    // Get Subsection Alias

    private function get_subalias($id, $alias)
    {
        $k = array_key_exists("subalias", $_POST);
        $v = $this->is_subalias_valid($id, $alias, $_POST["subalias"]);
        return $k && $v ? $_POST["subalias"] : "";
    }

    private function get_gallery_subalias()
    {
        $k = array_key_exists("subalias", $_POST);
        $v = $this->is_gallery_subalias_valid($_POST["subalias"]);
        return $k && $v ? $_POST["subalias"] : "";
    }

    /**
     * Gallery Id
     */

    // Check Gallery Id
    
    private function is_gallery_id_valid($gallery_id)
    {
        return strlen($gallery_id) ? $this->queries->is_gallery_exist($gallery_id) : false;
    }

    // Get Gallery Id

    private function get_gallery_id()
    {
        $k = array_key_exists("gallery-id", $_POST);
        $v = $this->is_gallery_id_valid($_POST["gallery-id"]);
        return $k && $v ? $_POST["gallery-id"] : "";
    }

    /**
     * Image Path
     */

    // Get Path

    private function get_path()
    {
        return array_key_exists("path", $_POST) ? $_POST["path"] : "";
    }

    // Get Image

    private function get_image()
    {
        return array_key_exists("image", $_POST) ? $_POST["image"] : "";
    }

    /**
     * Get Database data #######################################################
     */

    /**
     * Get Menu data
     */

    private function get_menu_items()
    {
        return $this->queries->get_menu_items();
    }

    private function get_section_name()
    {
        $alias = $this->get_alias();
        $id = $alias ? $this->queries->get_menu_id($alias) : "";
        return $id ? $this->queries->get_section_name($id) : "";
    }

    private function get_subsection_name()
    {
        $alias = $this->get_alias();

        if ($alias === "gallery") {
            $subalias = $this->get_gallery_subalias();
            return $subalias ? $this->queries->get_gallery_title($subalias) : "";
        }

        $id = $alias ? $this->queries->get_menu_id($alias) : "";
        $subalias = $this->get_subalias($id, $alias);

        return $id && $subalias ? $this->queries->get_article_title($id, $subalias) : "";
    }

    private function get_section_info()
    {
        $alias = $this->get_alias();
        $id = $alias ? $this->queries->get_menu_id($alias) : "";
        return $id ? $this->queries->get_section_info($id) : "";
    }

    /**
     * Get Text data
     */

    private function get_texts()
    {
        $alias = $this->get_alias();
        $id = $alias ? $this->queries->get_menu_id($alias) : "";
        return $id ? $this->queries->get_texts($id) : "";
    }

    /**
     * Get Article data
     */

    private function get_blog_items()
    {
        $alias = $this->get_alias();
        $id = $alias ? $this->queries->get_menu_id($alias) : "";
        return $this->queries->get_blog_items($id);
    }

    private function get_author($author_id)
    {
        return $this->queries->get_author($author_id);
    }

    private function get_article()
    {
        // Get article data
        $alias = $this->get_alias();
        $id = $alias ? $this->queries->get_menu_id($alias) : "";
        $subalias = $this->get_subalias($id, $alias);
        $article = $id && $subalias ? $this->queries->get_article($id, $subalias) : "";

        // Add author data to article
        $article["author"] = $this->get_author($article["author_id"]);
        unset($article["author_id"]);

        return $article;
    }

    private function get_author_info()
    {
        $alias = $this->get_alias();
        $id = $alias ? $this->queries->get_menu_id($alias) : "";
        $subalias = $this->get_subalias($id, $alias);
        $author_id = $id && $subalias ? $this->queries->get_author_id($id, $subalias) : "";

        return $this->get_author($author_id);
    }

    /**
     * Get Gallery data
     */
    
    private function get_galleries()
    {
        return $this->queries->get_galleries();
    }
    
    private function get_gallery_images()
    {
        $gallery_id = $this->get_gallery_id();
        return $gallery_id ? $this->queries->get_gallery_images($gallery_id) : "";
    }

    private function get_gallery_info()
    {
        $gallery_id = $this->get_gallery_id();
        return $gallery_id ? $this->queries->get_gallery_info($gallery_id) : "";
    }

    /**
     * Check Image
     */

    private function is_image_exist()
    {
        $path = $this->get_path();
        $image = $path ? $this->get_image() : "";
        return $path && $image ? $this->queries->is_image_exist($path, $image) : "false";
    }

    /**
     * Return data #############################################################
     */

    private function return_data($data)
    {
        echo json_encode($data);
    }

}

$data = new Data();
