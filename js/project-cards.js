// Load and display project cards
(function() {
    'use strict';
    
    // Load project cards from includes file
    function loadProjectCards() {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'includes/project-cards.html', true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        // Create a temporary container to parse the HTML
                        var tempDiv = document.createElement('div');
                        tempDiv.innerHTML = xhr.responseText;
                        var cards = tempDiv.querySelectorAll('.project-card-item');
                        resolve(Array.from(cards));
                    } else {
                        reject(new Error('HTTP error! status: ' + xhr.status));
                    }
                }
            };
            xhr.onerror = function() {
                reject(new Error('Network error loading project cards'));
            };
            xhr.send();
        });
    }
    
    // Display cards in projects.html (all cards)
    function displayAllCards(cards) {
        var container = document.getElementById('projects-grid-container');
        if (container) {
            cards.forEach(function(card) {
                // Wrap in grid column for projects.html
                var col = document.createElement('div');
                col.className = 'col-lg-4 col-md-6 col-12';
                // Clone the inner content (the <a> tag)
                var cardContent = card.querySelector('.project-card-link');
                if (cardContent) {
                    col.appendChild(cardContent.cloneNode(true));
                }
                container.appendChild(col);
            });
        }
    }
    
    // Display featured cards in index.html (carousel format)
    function displayFeaturedCards(cards) {
        var container = document.getElementById('featured-projects-carousel');
        if (container) {
            var featuredCards = cards.filter(function(card) {
                return card.getAttribute('data-featured') === 'true';
            });
            
            featuredCards.forEach(function(card) {
                // Wrap in carousel item for index.html
                var item = document.createElement('div');
                item.className = 'item';
                // Clone the inner content (the <a> tag)
                var cardContent = card.querySelector('.project-card-link');
                if (cardContent) {
                    item.appendChild(cardContent.cloneNode(true));
                }
                container.appendChild(item);
            });
            
            // Initialize carousel after cards are loaded
            // Wait for jQuery and owlCarousel to be available
            function initCarousel() {
                if (typeof jQuery !== 'undefined' && jQuery.fn.owlCarousel) {
                    var $carousel = jQuery('.project-carousel');
                    if ($carousel.length > 0 && $carousel.children().length > 0) {
                        $carousel.owlCarousel({
                            items: 3,
                            loop: true,
                            margin: 30,
                            nav: true,
                            dots: true,
                            autoplay: false,
                            smartSpeed: 600,
                            navText: ['<i class="uil uil-angle-left"></i>', '<i class="uil uil-angle-right"></i>'],
                            responsive: {
                                0: {
                                    items: 1,
                                    margin: 15,
                                    nav: true,
                                    dots: true
                                },
                                768: {
                                    items: 2,
                                    margin: 20,
                                    nav: true,
                                    dots: true
                                },
                                992: {
                                    items: 3,
                                    margin: 30,
                                    nav: true,
                                    dots: true
                                }
                            }
                        });
                    }
                } else {
                    // Retry if jQuery/owlCarousel not ready yet
                    setTimeout(initCarousel, 100);
                }
            }
            setTimeout(initCarousel, 100);
        }
    }
    
    // Initialize based on which page we're on
    function initProjectCards() {
        loadProjectCards()
            .then(function(cards) {
                // Check if we're on projects.html or index.html
                if (document.getElementById('projects-grid-container')) {
                    // projects.html - show all cards
                    displayAllCards(cards);
                } else if (document.getElementById('featured-projects-carousel')) {
                    // index.html - show only featured cards
                    displayFeaturedCards(cards);
                }
            })
            .catch(function(error) {
                console.error('Error loading project cards:', error);
            });
    }
    
    // Start loading when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initProjectCards);
    } else {
        initProjectCards();
    }
})();

