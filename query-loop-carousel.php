<?php
/**
 * Plugin Name:       Query Loop Carousel Variations
 * Description:       Adds two beautiful horizontal carousel style variations to the Query Loop block with smooth scrolling and minimal design.
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.4
 * Author:            WordPress Telex
 * License:           GPLv2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       query-loop-carousel
 *
 * @package QueryLoopCarousel
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register block style variations for Query Loop
 */
function query_loop_carousel_register_block_styles() {
	// Register the featured image + title variation
	register_block_style(
		'core/query',
		array(
			'name'  => 'carousel-image-title',
			'label' => __( 'Carousel - Image & Title', 'query-loop-carousel' ),
		)
	);

	// Register the cover style variation
	register_block_style(
		'core/query',
		array(
			'name'  => 'carousel-cover',
			'label' => __( 'Carousel - Cover Style', 'query-loop-carousel' ),
		)
	);
}
add_action( 'init', 'query_loop_carousel_register_block_styles' );

/**
 * Enqueue frontend styles and scripts
 */
function query_loop_carousel_enqueue_assets() {
	// Enqueue frontend styles
	wp_enqueue_style(
		'query-loop-carousel-style',
		plugins_url( 'build/style-index.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/style-index.css' )
	);

	// Enqueue frontend script
	wp_enqueue_script(
		'query-loop-carousel-script',
		plugins_url( 'build/view.js', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/view.js' ),
		true
	);
}
add_action( 'wp_enqueue_scripts', 'query_loop_carousel_enqueue_assets' );

/**
 * Enqueue editor styles
 */
function query_loop_carousel_enqueue_editor_assets() {
	wp_enqueue_style(
		'query-loop-carousel-editor-style',
		plugins_url( 'build/index.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.css' )
	);
}
add_action( 'enqueue_block_editor_assets', 'query_loop_carousel_enqueue_editor_assets' );
