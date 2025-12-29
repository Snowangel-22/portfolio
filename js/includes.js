// Load navbar and footer includes
(function() {
    'use strict';
    
    // Function to load HTML includes using XMLHttpRequest (synchronous for immediate loading)
    function loadInclude(elementId, file) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', file, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        const container = document.getElementById(elementId);
                        if (container) {
                            container.innerHTML = xhr.responseText;
                            
                            // After navbar is loaded, fix paths if in subdirectory and set active state
                            if (elementId === 'navbar-container') {
                                fixNavbarPaths();
                                setActiveNavItem();
                            }
                            resolve();
                        } else {
                            reject(new Error('Container element not found: ' + elementId));
                        }
                    } else {
                        reject(new Error('HTTP error! status: ' + xhr.status));
                    }
                }
            };
            xhr.onerror = function() {
                reject(new Error('Network error loading ' + file));
            };
            xhr.send();
        });
    }
    
    // Set active navigation item based on current page
    function setActiveNavItem() {
        const currentPage = getCurrentPage();
        const navLinks = document.querySelectorAll('.nav-link[data-page]');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === currentPage) {
                link.classList.add('active');
            }
        });
    }
    
    // Fix navbar paths when loaded from subdirectories
    function fixNavbarPaths() {
        const path = window.location.pathname;
        const isInSubdirectory = path.includes('/projects/');
        
        if (isInSubdirectory) {
            const navLinks = document.querySelectorAll('#navbar-container .nav-link, #navbar-container .navbar-brand');
            navLinks.forEach(function(link) {
                const href = link.getAttribute('href');
                if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('/')) {
                    link.setAttribute('href', '../' + href);
                }
            });
        }
    }
    
    // Determine current page from URL
    function getCurrentPage() {
        const path = window.location.pathname;
        const hash = window.location.hash;
        const filename = path.split('/').pop() || 'index.html';
        
        if (filename === 'projects.html') {
            return 'projects';
        } else if (filename === 'about.html') {
            return 'about';
        } else if (filename === 'index.html' || filename === '' || hash === '#about' || hash === '') {
            return 'home';
        }
        return '';
    }
    
    // Get the correct path to includes based on current page location
    function getIncludePath(filename) {
        const path = window.location.pathname;
        const isInSubdirectory = path.includes('/projects/');
        return isInSubdirectory ? '../' + filename : filename;
    }
    
    // Load includes immediately (runs synchronously in script order)
    function initIncludes() {
        // Load navbar first (most important)
        loadInclude('navbar-container', getIncludePath('includes/navbar.html'))
            .then(function() {
                // Then load footer
                return loadInclude('footer-container', getIncludePath('includes/footer.html'));
            })
            .then(function() {
                // Dispatch custom event when includes are loaded
                const event = new CustomEvent('includesLoaded');
                document.dispatchEvent(event);
                
                // Reinitialize navbar functionality after includes are loaded
                if (typeof jQuery !== 'undefined') {
                    // Wait a bit for jQuery to be ready
                    setTimeout(function() {
                        if (jQuery.fn.headroom) {
                            jQuery(".navbar").headroom();
                        }
                    }, 100);
                }
            })
            .catch(function(error) {
                console.error('Error loading includes:', error);
            });
    }
    
    // Start loading immediately
    initIncludes();
})();

