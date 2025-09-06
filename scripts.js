// SEO and Performance Optimized JavaScript
// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animations and interactions
    initLoadingScreen();
    initCounterAnimation();
    initScrollAnimations();
    initNavbarEffects();
    initParallaxEffects();
    initTypingEffect();
    initHoverEffects();
    initSmoothScrolling();
    initSEOOptimizations();
    initPerformanceOptimizations();
});

// SEO Optimizations
function initSEOOptimizations() {
    // Add structured data for dynamic content
    addDynamicStructuredData();
    
    // Optimize images for SEO
    optimizeImages();
    
    // Add breadcrumb navigation
    addBreadcrumbNavigation();
    
    // Track user engagement for SEO
    trackUserEngagement();
}

// Performance Optimizations
function initPerformanceOptimizations() {
    // Lazy load images
    initLazyLoading();
    
    // Optimize scroll performance
    optimizeScrollPerformance();
    
    // Preload critical resources
    preloadCriticalResources();
    
    // Minimize layout shifts
    minimizeLayoutShifts();
}

// Loading Screen
function initLoadingScreen() {
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(loading);

    // Hide loading screen after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loading.classList.add('hidden');
            setTimeout(() => {
                loading.remove();
            }, 500);
        }, 1000);
    });
}

// Counter Animation
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 16);
    };

    // Intersection Observer for counter animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
}

// Scroll Animations
function initScrollAnimations() {
    const elements = document.querySelectorAll('.feature-card, .about-content, .about-image');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.8s ease';
        observer.observe(element);
    });
}

// Navbar Effects
function initNavbarEffects() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for background effect
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(26, 26, 26, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(26, 26, 26, 0.95)';
            navbar.style.boxShadow = 'none';
        }

        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Smooth navbar transitions
    navbar.style.transition = 'all 0.3s ease';
}

// Parallax Effects
function initParallaxEffects() {
    const heroBg = document.querySelector('.hero-bg');
    const discordCard = document.querySelector('.discord-card');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroBg) {
            heroBg.style.transform = `translateY(${rate}px)`;
        }
        
        if (discordCard) {
            const cardRate = scrolled * 0.3;
            discordCard.style.transform = `translateY(${cardRate}px)`;
        }
    });
}

// Typing Effect
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.borderRight = '3px solid var(--secondary-color)';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                heroTitle.style.borderRight = 'none';
            }, 1000);
        }
    };

    // Start typing effect after a delay
    setTimeout(typeWriter, 500);
}

// Hover Effects
function initHoverEffects() {
    // Feature cards hover effect
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Social links hover effect
    const socialLinks = document.querySelectorAll('.social-links a');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for navbar height
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Particle Background Effect
function createParticles() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float-particle ${Math.floor(Math.random() * 10 + 10)}s linear infinite;
            pointer-events: none;
        `;
        
        heroSection.appendChild(particle);
    }
}

// Add particle animation to CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float-particle {
        0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Initialize particles after a delay
setTimeout(createParticles, 2000);

// Mouse Trail Effect
function initMouseTrail() {
    const trail = document.createElement('div');
    trail.className = 'mouse-trail';
    trail.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, var(--secondary-color) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.7;
        transition: all 0.1s ease;
    `;
    document.body.appendChild(trail);

    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateTrail() {
        trailX += (mouseX - trailX) * 0.3;
        trailY += (mouseY - trailY) * 0.3;
        
        trail.style.left = (trailX - 10) + 'px';
        trail.style.top = (trailY - 10) + 'px';
        
        requestAnimationFrame(animateTrail);
    }
    
    animateTrail();
}

// Initialize mouse trail
setTimeout(initMouseTrail, 3000);

// Add some interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple animation to CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(rippleStyle);

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations can go here
}, 16)); // 60fps

// SEO Optimization Functions
function addDynamicStructuredData() {
    // Add FAQ structured data
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "چگونه در سرور دیسکورد x.Mine.x عضو شوم؟",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "برای عضویت در سرور دیسکورد x.Mine.x، روی دکمه عضویت کلیک کنید و از لینک discord.gg/TRvFdVWf استفاده کنید."
                }
            },
            {
                "@type": "Question",
                "name": "آیا عضویت در سرور رایگان است؟",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "بله، عضویت در سرور دیسکورد x.Mine.x کاملاً رایگان است."
                }
            }
        ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqData);
    document.head.appendChild(script);
}

function optimizeImages() {
    // Add alt attributes to images without them
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
        img.setAttribute('alt', 'تصویر مربوط به سرور دیسکورد x.Mine.x');
    });
    
    // Add loading="lazy" to images below the fold
    const imagesBelowFold = document.querySelectorAll('img:not([loading])');
    imagesBelowFold.forEach((img, index) => {
        if (index > 2) { // Skip first few images
            img.setAttribute('loading', 'lazy');
        }
    });
}

function addBreadcrumbNavigation() {
    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "خانه",
                "item": "https://xminex.github.io/#home"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "ویژگی‌ها",
                "item": "https://xminex.github.io/#features"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "درباره ما",
                "item": "https://xminex.github.io/#about"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "عضویت",
                "item": "https://xminex.github.io/#join"
            }
        ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(script);
}

function trackUserEngagement() {
    // Track time on page
    let startTime = Date.now();
    
    // Track scroll depth
    let maxScrollDepth = 0;
    
    window.addEventListener('scroll', throttle(() => {
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        maxScrollDepth = Math.max(maxScrollDepth, scrollDepth);
    }, 1000));
    
    // Track when user leaves page
    window.addEventListener('beforeunload', () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        
        // Send analytics data (if Google Analytics is available)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_engagement', {
                'time_on_page': timeOnPage,
                'scroll_depth': maxScrollDepth
            });
        }
    });
}

// Performance Optimization Functions
function initLazyLoading() {
    // Intersection Observer for lazy loading
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        // Observe all images with data-src attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

function optimizeScrollPerformance() {
    // Use passive event listeners for better performance
    let ticking = false;
    
    function updateScrollEffects() {
        // Scroll-based animations
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

function preloadCriticalResources() {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.href = 'style.css';
    criticalCSS.as = 'style';
    document.head.appendChild(criticalCSS);
    
    // Preload critical fonts
    const criticalFont = document.createElement('link');
    criticalFont.rel = 'preload';
    criticalFont.href = 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700&display=swap';
    criticalFont.as = 'style';
    document.head.appendChild(criticalFont);
}

function minimizeLayoutShifts() {
    // Reserve space for dynamic content
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        stat.style.minHeight = '2rem'; // Reserve space for numbers
    });
    
    // Add aspect ratio to images to prevent layout shifts
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.style.aspectRatio) {
            img.style.aspectRatio = '16/9'; // Default aspect ratio
        }
    });
}

// Enhanced error handling and monitoring
window.addEventListener('error', (event) => {
    console.error('JavaScript Error:', event.error);
    
    // Send error to analytics if available
    if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
            'description': event.error.message,
            'fatal': false
        });
    }
});

// Service Worker registration for PWA features
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
