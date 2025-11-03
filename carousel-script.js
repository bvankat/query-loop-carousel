/**
 * Query Loop Carousel Navigation Script
 */
(function() {
    'use strict';
    
    function initCarousel(wrapper) {
        const container = wrapper.querySelector('.carousel-container');
        if (!container || wrapper.dataset.carouselInit) return;
        
        wrapper.dataset.carouselInit = 'true';
        
        const items = container.querySelectorAll('li');
        if (items.length === 0) return;
        
        // Create navigation buttons
        const prevButton = createNavButton('prev');
        const nextButton = createNavButton('next');
        
        wrapper.style.position = 'relative';
        wrapper.insertBefore(prevButton, container);
        wrapper.appendChild(nextButton);
        
        // Get item width including gap
        function getScrollAmount() {
            const item = items[0];
            const style = window.getComputedStyle(container);
            const gap = parseFloat(style.gap) || 0;
            return item.offsetWidth + gap;
        }
        
        // Scroll to specific index
        function scrollToIndex(index) {
            const scrollAmount = getScrollAmount();
            container.scrollLeft = index * scrollAmount;
        }
        
        // Get current index
        function getCurrentIndex() {
            const scrollAmount = getScrollAmount();
            return Math.round(container.scrollLeft / scrollAmount);
        }
        
        // Navigate previous
        function navigatePrev() {
            const currentIndex = getCurrentIndex();
            const newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
            scrollToIndex(newIndex);
        }
        
        // Navigate next
        function navigateNext() {
            const currentIndex = getCurrentIndex();
            const newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
            scrollToIndex(newIndex);
        }
        
        // Update button states
        function updateButtons() {
            const currentIndex = getCurrentIndex();
            
            // Always show both buttons for looping behavior
            prevButton.style.opacity = '1';
            nextButton.style.opacity = '1';
            prevButton.disabled = false;
            nextButton.disabled = false;
        }
        
        // Event listeners
        prevButton.addEventListener('click', navigatePrev);
        nextButton.addEventListener('click', navigateNext);
        container.addEventListener('scroll', updateButtons);
        
        // Handle keyboard navigation
        wrapper.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                navigatePrev();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                navigateNext();
            }
        });
        
        // Initial button state
        updateButtons();
        
        // Update on resize
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(updateButtons, 250);
        });
    }
    
    function createNavButton(direction) {
        const button = document.createElement('button');
        button.className = `carousel-nav-button ${direction}`;
        button.setAttribute('aria-label', direction === 'prev' ? 'Previous' : 'Next');
        button.type = 'button';
        
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('aria-hidden', 'true');
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        
        if (direction === 'prev') {
            path.setAttribute('d', 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z');
        } else {
            path.setAttribute('d', 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z');
        }
        
        svg.appendChild(path);
        button.appendChild(svg);
        
        return button;
    }
    
    function initAllCarousels() {
        const carousels = document.querySelectorAll(
            '.is-style-carousel-image-above, .is-style-carousel-cover-overlay'
        );
        carousels.forEach(initCarousel);
    }
    
    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAllCarousels);
    } else {
        initAllCarousels();
    }
    
    // Reinitialize on dynamic content changes (for block editor preview)
    if (window.MutationObserver) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length) {
                    initAllCarousels();
                }
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
})();
