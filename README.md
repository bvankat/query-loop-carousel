# Carousel Variations for the Wordpress Query Loop Block

A lightweight WordPress plugin that adds two carousel-style variations to the native Query Loop block. Create horizontally scrolling post carousels without any external dependencies.

## Features

- **Two Pre-Built Carousel Styles** - Choose from image-above or cover-overlay layouts
- **Native WordPress Integration** - Uses the standard Query Loop block controls
- **Pure Vanilla JavaScript** - No external libraries required
- **Scroll-Snap Technology** - Smooth, native scrolling behavior
- **Infinite Looping** - Seamlessly loops back to the beginning
- **Minimal Styling** - Inherits your site's design system
- **Keyboard Accessible** - Navigate with arrow keys
- **Responsive Design** - Adapts to different screen sizes
- **Zero Dependencies** - Lightweight and fast

## Installation

1. Download or clone this repository
2. Upload the `query-loop-carousel` folder to your `/wp-content/plugins/` directory
3. Activate the plugin through the 'Plugins' menu in WordPress
4. Start using the carousel variations in the block editor

## Usage

### Adding a Carousel to Your Page

1. In the WordPress block editor, click the **+** button to add a new block
2. Search for "Carousel" in the block inserter
3. Choose one of the two available variations:
   - **Carousel: Image Above**
   - **Carousel: Cover with Overlay**
4. Configure your query using WordPress's standard Query Loop controls (post type, categories, number of posts, etc.)
5. Publish or preview your page

### Carousel Variation 1: Featured Image Above Headline

This variation displays posts in a clean, minimalist layout:

- Featured image displayed at the top
- Linked headline below the image
- Perfect for blog posts, portfolios, or product showcases
- Images maintain 16:9 aspect ratio by default

**Best for:** Traditional blog layouts, news sites, portfolio galleries

### Carousel Variation 2: Cover Image with Headline Overlay

This variation creates a more dramatic, visual-first presentation:

- Featured image used as a full-cover background
- Semi-transparent black overlay (50% opacity)
- White linked headline overlaid on the image
- Minimum height of 300px for consistent card sizes

**Best for:** Featured content, hero sections, magazine-style layouts, visual storytelling

## Customization

### Query Settings

Use WordPress's built-in Query Loop controls to customize:

- **Post Type** - Posts, pages, or custom post types
- **Number of Items** - Default is 6 posts
- **Order & Sorting** - By date, title, or custom fields
- **Filters** - Categories, tags, authors, etc.
- **Exclude Posts** - Manually exclude specific posts

### Styling

The plugin uses minimal CSS that inherits from your theme. You can add custom CSS to further customize:

```css
/* Adjust card width */
.is-style-carousel-image-above .carousel-container > li {
	flex: 0 0 400px;
}

/* Customize navigation buttons */
.carousel-nav-button {
	background: your-color;
	border-color: your-color;
}

/* Adjust overlay opacity on cover style */
.is-style-carousel-cover-overlay .wp-block-cover::before {
	opacity: 0.7;
}
```

### Card Dimensions

By default, carousel cards are responsive:
- Mobile: 280px wide
- Tablet (768px+): 320px wide
- Desktop (1024px+): 360px wide

## Functionality

### Navigation

- **Arrow Buttons** - Click left/right arrows to navigate
- **Keyboard Navigation** - Use left/right arrow keys
- **Touch/Swipe** - Native touch scrolling on mobile devices
- **Mouse Wheel** - Scroll horizontally with mouse wheel (browser-dependent)

### Looping Behavior

The carousel automatically loops:
- Clicking "next" on the last item returns to the first item
- Clicking "previous" on the first item jumps to the last item
- Seamless infinite scrolling experience

### Scroll Snap

Uses CSS scroll-snap for smooth, predictable scrolling:
- Cards snap into place automatically
- Prevents awkward half-card positions
- Works with both navigation buttons and direct scrolling

## Browser Support

This plugin uses modern web standards and supports:

- Chrome/Edge 69+
- Firefox 68+
- Safari 11+
- Opera 56+

Scroll-snap is widely supported in all modern browsers.

## Technical Details

### File Structure

```
query-loop-carousel/
├── query-loop-carousel.php    # Main plugin file
├── variations.js               # Block variation registration
├── carousel-style.css          # Carousel styling
├── carousel-script.js          # Navigation functionality
└── README.md                   # Documentation
```

### Performance

- **Lightweight** - Total plugin size under 15KB
- **No External Dependencies** - No jQuery, no third-party libraries
- **Vanilla JavaScript** - Fast, modern ES6+ code
- **CSS-Only Scrolling** - Uses native browser scroll-snap
- **Lazy Loading Compatible** - Works with WordPress's native lazy loading

### Accessibility

- Semantic HTML structure
- ARIA labels on navigation buttons
- Keyboard navigation support
- Focus indicators on interactive elements
- Screen reader friendly

## Frequently Asked Questions

### Can I use custom post types?

Yes! The plugin works with any post type. Simply select your desired post type in the Query Loop settings.

### Can I change the number of posts displayed?

Absolutely. Use the "Items per page" setting in the Query Loop block controls to set how many posts appear in the carousel.

### Will this work with my theme?

Yes. The plugin uses minimal styling that inherits from your theme's design system. Colors, fonts, and spacing will match your site's existing styles.

### Does it work with the block editor preview?

Yes. The carousel functionality works in both the editor preview and on the frontend.

### Can I have multiple carousels on one page?

Yes. You can add as many carousel blocks as you need, and each will function independently.

### Does it work with featured images?

Yes. Both variations require featured images to display properly. Make sure your posts have featured images set.

## Changelog

### Version 1.0.0
- Initial release
- Two carousel variations (Image Above, Cover with Overlay)
- Scroll-snap navigation
- Infinite looping
- Keyboard accessibility
- Responsive design

## Credits

Developed for the Flatwater Free Press by Hanscom Park Studio.