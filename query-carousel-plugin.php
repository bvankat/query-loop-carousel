<?php
/**
 * Plugin Name: Carousel Variations for Query Loop Block
 * Description: Adds two carousel style variations to the Query Loop block
 * Version: 1.0.0
 * Author: Ben Vankat, Hanscom Park Studio
 * Text Domain: hps-query-loop-carousel
 */

if (!defined('ABSPATH')) {
    exit;
}

class Query_Loop_Carousel_Variations {
    
    public function __construct() {
        add_action('init', array($this, 'register_block_variations'));
        add_action('enqueue_block_assets', array($this, 'enqueue_carousel_assets'));
    }
    
    public function register_block_variations() {
        wp_enqueue_script(
            'query-loop-carousel-variations',
            plugin_dir_url(__FILE__) . 'variations.js',
            array('wp-blocks', 'wp-dom-ready'),
            '1.0.0',
            true
        );
    }
    
    public function enqueue_carousel_assets() {
        if (is_admin()) {
            return;
        }
        
        wp_enqueue_style(
            'query-loop-carousel-style',
            plugin_dir_url(__FILE__) . 'carousel-style.css',
            array(),
            '1.0.0'
        );
        
        wp_enqueue_script(
            'query-loop-carousel-script',
            plugin_dir_url(__FILE__) . 'carousel-script.js',
            array(),
            '1.0.0',
            true
        );
    }
}

new Query_Loop_Carousel_Variations();
