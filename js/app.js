/**
 * MastoLand Web Portal Core Script
 * Logic for responsive navigation, theme toggle, accent color selector, and scroll interactions.
 */

// Force scroll to top on refresh (prevent browser scroll restoration early)
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

window.addEventListener('pageshow', () => {
    window.scrollTo(0, 0);
});

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);

    // DOM Elements
    const header = document.getElementById('main-header');
    const themeBtn = document.getElementById('theme-btn');
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const navigationMenu = document.getElementById('navigation-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const logoImage = document.getElementById('logo-image');
    
    // Theme Switcher Logic
    const initTheme = () => {
        const savedTheme = localStorage.getItem('mastoland-theme');
        const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        
        if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            updateLogoForTheme('light');
        } else {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
            updateLogoForTheme('dark');
        }
    };

    const updateLogoForTheme = (theme) => {
        if (!logoImage) return;
        if (theme === 'light') {
            logoImage.src = 'img/ic_launcher_light.png';
        } else {
            logoImage.src = 'img/ic_launcher_dark.png';
        }
    };

    themeBtn.addEventListener('click', () => {
        if (document.body.classList.contains('light-theme')) {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            localStorage.setItem('mastoland-theme', 'dark');
            updateLogoForTheme('dark');
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            localStorage.setItem('mastoland-theme', 'light');
            updateLogoForTheme('light');
        }
    });

    // Accent Colors Configuration
    const accentColors = {
        indigo: {
            primary: '#6364ff',
            secondary: '#a259ff',
            gradient: 'linear-gradient(135deg, #6364ff 0%, #a259ff 100%)',
            glow: 'rgba(99, 100, 255, 0.4)'
        },
        blue: {
            primary: '#3088d4',
            secondary: '#00d2ff',
            gradient: 'linear-gradient(135deg, #3088d4 0%, #00d2ff 100%)',
            glow: 'rgba(48, 136, 212, 0.4)'
        },
        green: {
            primary: '#10b981',
            secondary: '#059669',
            gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            glow: 'rgba(16, 185, 129, 0.4)'
        },
        amber: {
            primary: '#f59e0b',
            secondary: '#d97706',
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            glow: 'rgba(245, 158, 11, 0.4)'
        },
        rose: {
            primary: '#f43f5e',
            secondary: '#e11d48',
            gradient: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
            glow: 'rgba(244, 63, 94, 0.4)'
        }
    };

    const setAccentColor = (colorName) => {
        const root = document.documentElement;
        const colorData = accentColors[colorName];
        if (!colorData) return;
        
        root.style.setProperty('--accent-primary', colorData.primary);
        root.style.setProperty('--accent-secondary', colorData.secondary);
        root.style.setProperty('--accent-gradient', colorData.gradient);
        root.style.setProperty('--accent-glow', colorData.glow);
        
        // Update active status in selector
        document.querySelectorAll('.accent-dot').forEach(dot => {
            if (dot.getAttribute('data-color') === colorName) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        
        localStorage.setItem('mastoland-accent', colorName);
    };

    const initAccent = () => {
        const savedAccent = localStorage.getItem('mastoland-accent') || 'indigo';
        setAccentColor(savedAccent);
    };

    // Accent Selector Event Listeners
    document.querySelectorAll('.accent-dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
            const color = e.target.getAttribute('data-color');
            setAccentColor(color);
        });
    });

    // Mobile Navigation Toggle
    menuToggleBtn.addEventListener('click', () => {
        menuToggleBtn.classList.toggle('active');
        navigationMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggleBtn.classList.remove('active');
            navigationMenu.classList.remove('active');
        });
    });

    // Reset active state to Home (Inicio) if at the top of the page
    const checkScrollTop = () => {
        if (window.scrollY <= 10) {
            navLinks.forEach(link => {
                if (link.getAttribute('href') === '#hero') {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    };

    // Scroll Effects (Header Shrink)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        checkScrollTop();
    });

    // Navigation Link Active Highlighting via Intersection Observer
    const sections = document.querySelectorAll('section, header');
    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px', // Trigger near screen center
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        // If at the top of the page, force "Inicio" active and skip observer highlighting
        if (window.scrollY <= 10) {
            checkScrollTop();
            return;
        }

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    // Get link anchor target
                    const href = link.getAttribute('href');
                    if (href === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        if (section.id) {
            sectionObserver.observe(section);
        }
    });

    // Initialize Settings
    checkScrollTop();
    initTheme();
    initAccent();
});
