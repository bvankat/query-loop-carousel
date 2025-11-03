/**
 * Register Query Loop block variations for carousel layouts
 */
wp.domReady(() => {
    // Variation 1: Image Above Headline
    wp.blocks.registerBlockVariation('core/query', {
        name: 'carousel-image-above',
        title: 'Carousel: Image Above',
        description: 'Horizontal carousel with featured image above headline',
        attributes: {
            className: 'is-style-carousel-image-above',
            query: {
                perPage: 6,
                pages: 0,
                offset: 0,
                postType: 'post',
                order: 'desc',
                orderBy: 'date',
                author: '',
                search: '',
                exclude: [],
                sticky: '',
                inherit: false
            }
        },
        innerBlocks: [
            [
                'core/post-template',
                {
                    className: 'carousel-container'
                },
                [
                    ['core/post-featured-image', {
                        isLink: true,
                        aspectRatio: '16/9'
                    }],
                    ['core/post-title', {
                        isLink: true,
                        level: 3
                    }]
                ]
            ]
        ],
        scope: ['inserter']
    });

    // Variation 2: Cover with Overlay
    wp.blocks.registerBlockVariation('core/query', {
        name: 'carousel-cover-overlay',
        title: 'Carousel: Cover with Overlay',
        description: 'Horizontal carousel with cover image and overlay',
        attributes: {
            className: 'is-style-carousel-cover-overlay',
            query: {
                perPage: 6,
                pages: 0,
                offset: 0,
                postType: 'post',
                order: 'desc',
                orderBy: 'date',
                author: '',
                search: '',
                exclude: [],
                sticky: '',
                inherit: false
            }
        },
        innerBlocks: [
            [
                'core/post-template',
                {
                    className: 'carousel-container'
                },
                [
                    ['core/cover', {
                        useFeaturedImage: true,
                        dimRatio: 50,
                        overlayColor: 'black',
                        minHeight: 300,
                        isDark: true
                    }, [
                        ['core/post-title', {
                            isLink: true,
                            level: 3,
                            textColor: 'white'
                        }]
                    ]]
                ]
            ]
        ],
        scope: ['inserter']
    });
});
