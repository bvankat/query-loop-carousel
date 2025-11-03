
=== Query Loop Carousel Variations ===

Contributors:      WordPress Telex
Tags:              block, query loop, carousel, style variations
Tested up to:      6.8
Stable tag:        0.1.0
License:           GPLv2 or later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Add beautiful horizontal carousel style variations to the WordPress Query Loop block with smooth scrolling and minimal design.

== Description ==

This plugin extends the default WordPress Query Loop block by adding two stunning carousel-style variations. Both variations transform your post listings into horizontal, scrollable carousels with smooth scroll-snap behavior and elegant arrow navigation.

**Features:**

* Two distinct carousel style variations
* Horizontal one-row layout with scroll-snap
* Minimal chrome with simple left/right arrow buttons
* Infinite loop scrolling (returns to first item after last)
* Inherits your site's existing styles
* No external dependencies - pure vanilla JavaScript
* Fully responsive design
* Works with all query loop settings

**Style Variation 1: Featured Image with Headline**
A clean, minimalist layout featuring the post's featured image positioned above a linked headline. Perfect for showcasing blog posts, portfolio items, or any content where imagery and titles are key.

**Style Variation 2: Cover with Overlay**
A dramatic cover-style layout using the featured image as a background, overlaid with a transparent black gradient and white linked headline text. Ideal for hero sections, featured content, or creating visual impact.

Both variations maintain full compatibility with WordPress's native Query Loop controls, allowing you to configure your query parameters, post types, taxonomies, and all other settings exactly as you would with the default block.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/query-loop-carousel` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Insert a Query Loop block in the block editor
4. In the block toolbar or inspector, look for "Styles" and select either "Carousel - Image & Title" or "Carousel - Cover Style"
5. Configure your query settings as normal using the WordPress Query Loop controls

== Frequently Asked Questions ==

= Does this work with custom post types? =

Yes! The style variations work with any post type that the Query Loop block supports. Simply configure your query using the standard WordPress controls.

= Can I customize the arrow button styles? =

Yes, the arrows inherit basic styles from your theme and can be customized with CSS. They use minimal styling by default to blend with any theme.

= Will this work on mobile devices? =

Absolutely. The carousel is fully responsive and uses native scroll behavior, making it touch-friendly on mobile and tablet devices.

= Does it require any external JavaScript libraries? =

No, the plugin uses pure vanilla JavaScript with no external dependencies, keeping your site fast and lightweight.

= Can I adjust the number of posts shown? =

Yes, use the standard Query Loop controls to set the number of posts per page. The carousel will adapt automatically.

== Screenshots ==

1. Carousel variation with featured image above headline
2. Cover style variation with background image and overlay
3. Style selection in the block editor

== Changelog ==

= 0.1.0 =
* Initial release
* Two carousel style variations for Query Loop block
* Horizontal scroll with scroll-snap
* Arrow navigation with infinite looping
* Minimal, theme-friendly styling

== Upgrade Notice ==

= 0.1.0 =
Initial release of Query Loop Carousel Variations.
