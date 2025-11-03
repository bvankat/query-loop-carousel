
/**
 * Frontend JavaScript for Query Loop Carousel
 * Handles arrow navigation and infinite scrolling
 */

document.addEventListener('DOMContentLoaded', function() {
	const carousels = document.querySelectorAll('.is-style-carousel-image-title, .is-style-carousel-cover');
	
	carousels.forEach(function(carousel) {
		const container = carousel.querySelector('.wp-block-post-template');
		if (!container) return;
		
		const items = container.querySelectorAll('li');
		if (items.length === 0) return;
		
		// Create navigation arrows
		const prevArrow = document.createElement('button');
		prevArrow.className = 'carousel-nav carousel-prev';
		prevArrow.setAttribute('aria-label', 'Previous');
		prevArrow.innerHTML = '<svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>';
		
		const nextArrow = document.createElement('button');
		nextArrow.className = 'carousel-nav carousel-next';
		nextArrow.setAttribute('aria-label', 'Next');
		nextArrow.innerHTML = '<svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>';
		
		carousel.appendChild(prevArrow);
		carousel.appendChild(nextArrow);
		
		// Get item width including gap
		function getItemWidth() {
			const item = items[0];
			const styles = window.getComputedStyle(container);
			const gap = parseFloat(styles.gap) || 0;
			return item.offsetWidth + gap;
		}
		
		// Get current scroll position as item index
		function getCurrentIndex() {
			const scrollLeft = container.scrollLeft;
			const itemWidth = getItemWidth();
			return Math.round(scrollLeft / itemWidth);
		}
		
		// Scroll to specific item index
		function scrollToIndex(index) {
			const itemWidth = getItemWidth();
			container.scrollTo({
				left: index * itemWidth,
				behavior: 'smooth'
			});
		}
		
		// Navigate to previous item
		function navigatePrev() {
			let currentIndex = getCurrentIndex();
			
			if (currentIndex === 0) {
				// Loop to last item
				scrollToIndex(items.length - 1);
			} else {
				scrollToIndex(currentIndex - 1);
			}
		}
		
		// Navigate to next item
		function navigateNext() {
			let currentIndex = getCurrentIndex();
			
			if (currentIndex >= items.length - 1) {
				// Loop to first item
				scrollToIndex(0);
			} else {
				scrollToIndex(currentIndex + 1);
			}
		}
		
		// Event listeners
		prevArrow.addEventListener('click', navigatePrev);
		nextArrow.addEventListener('click', navigateNext);
		
		// Keyboard navigation
		carousel.addEventListener('keydown', function(e) {
			if (e.key === 'ArrowLeft') {
				e.preventDefault();
				navigatePrev();
			} else if (e.key === 'ArrowRight') {
				e.preventDefault();
				navigateNext();
			}
		});
		
		// Update arrow visibility based on scroll position
		function updateArrowVisibility() {
			const scrollLeft = container.scrollLeft;
			const maxScroll = container.scrollWidth - container.clientWidth;
			
			// Always show arrows since we have infinite looping
			prevArrow.style.opacity = '1';
			nextArrow.style.opacity = '1';
		}
		
		container.addEventListener('scroll', updateArrowVisibility);
		updateArrowVisibility();
	});
});
