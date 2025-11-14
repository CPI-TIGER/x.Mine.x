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

document.addEventListener('DOMContentLoaded',function(){if(document.getElementById('games-wrapper')){const gameBox=document.createElement('div');gameBox.className='minigame-box';gameBox.innerHTML='<div class="minigame-title">حدس عدد</div><div class="minigame-desc">یک عدد تصادفی بین ۱ تا ۱۰۰ انتخاب شده، آیا می‌توانید آن را پیدا کنید؟</div><input type="number" id="guess-input" class="form-control mb-3" min="1" max="100" placeholder="عدد خود را وارد کنید" style="direction:rtl;"><button id="guess-btn" class="btn btn-primary w-100 mb-2">ثبت حدس</button><div id="guess-result" style="min-height:36px;"></div><button id="guess-restart" class="btn btn-outline-light w-100 mt-2" style="display:none;">شروع مجدد</button>';
document.getElementById('games-wrapper').appendChild(gameBox);
let answer=Math.floor(Math.random()*100)+1,tries=0;
const input=document.getElementById('guess-input'),btn=document.getElementById('guess-btn'),result=document.getElementById('guess-result'),restart=document.getElementById('guess-restart');
btn.onclick=function(){const val=+input.value;if(val<1||val>100||isNaN(val)){result.innerText='عدد وارد شده معتبر نیست.';return}tries++;if(val===answer){result.innerHTML='تبریک! درست حدس زدی. تعداد تلاش: '+tries;btn.style.display='none';restart.style.display='block'}else if(val<answer){result.innerHTML='عدد شما کوچک‌تر است!';}else{result.innerHTML='عدد شما بزرگ‌تر است!';}};
input.onkeydown=function(e){if(e.key==='Enter'){btn.click()}};
restart.onclick=function(){answer=Math.floor(Math.random()*100)+1;tries=0;input.value='';result.innerHTML='';btn.style.display='block';restart.style.display='none';input.focus()};
}});
document.addEventListener('DOMContentLoaded',function(){if(document.getElementById('games-wrapper')){const tttBox=document.createElement('div');tttBox.className='minigame-box';tttBox.innerHTML='<div class="minigame-title">دوز (Tic-Tac-Toe)</div><div class="minigame-desc">با هوش مصنوعی ساده بازی کن! شما X هستید.</div><div id="ttt-board" style="display:grid;grid-template-columns:repeat(3,48px);gap:7px;justify-content:center;margin:0 auto 1.5rem auto;"></div><div id="ttt-result" style="min-height:40px;"></div><button id="ttt-restart" class="btn btn-outline-light w-100 mt-2">شروع مجدد</button>';
document.getElementById('games-wrapper').appendChild(tttBox);
let board=["","","","","","","","",""],isUser=true,finished=false;
function draw(){const b=document.getElementById('ttt-board');b.innerHTML='';board.forEach((cell,i)=>{const el=document.createElement('div');el.className='ttt-cell';el.style.cssText='width:48px;height:48px;font-size:2.1rem;display:flex;align-items:center;justify-content:center;background:rgba(6,182,212,0.08);border-radius:8px;cursor:'+(cell||finished?'default':'pointer')+';color:var(--primary-color);font-weight:800;transition:all 0.2s;box-shadow:0 1.5px 7px 1.5px rgba(0,0,0,0.07)';el.innerText=cell;if(!cell&&!finished)el.onclick=function(){if(isUser){board[i]='X';isUser=false;draw();setTimeout(aiMove,300)}};b.appendChild(el)});checkResult()}function aiMove(){if(finished)return;let idx=aiBestMove();if(idx!==-1){board[idx]='O';isUser=true;draw()}}function aiBestMove(){for(let i=0;i<9;i++)if(!board[i]){board[i]='O';if(checkWin('O')){board[i]='';return i}board[i]=''}for(let i=0;i<9;i++)if(!board[i]){board[i]='X';if(checkWin('X')){board[i]='';return i}board[i]=''}let moves=[];[0,2,6,8].forEach(i=>{if(!board[i])moves.push(i)});if(moves.length)return moves[Math.floor(Math.random()*moves.length)];if(!board[4])return 4;for(let i=0;i<9;i++)if(!board[i])moves.push(i);return moves.length?moves[Math.floor(Math.random()*moves.length)]:-1}function checkWin(p){const w=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];return w.some(comb=>comb.every(idx=>board[idx]===p))}function checkResult(){const res=document.getElementById('ttt-result');if(checkWin('X')){res.innerHTML='شما <b>برنده</b> شدید!';finished=true}else if(checkWin('O')){res.innerHTML='هوش مصنوعی <b>برنده</b> شد.';finished=true}else if(board.every(c=>c)){res.innerHTML='بازی <b>مساوی</b> شد.';finished=true}else{res.innerHTML='';finished=false}}document.getElementById('ttt-restart').onclick=function(){board=["","","","","","","","",""];isUser=true;finished=false;draw()};draw();}});
document.addEventListener('DOMContentLoaded',function(){if(document.getElementById('games-wrapper')){const box=document.createElement('div');box.className='minigame-box';box.innerHTML='<div class="minigame-title">حافظه کارت</div><div class="minigame-desc">کارت‌های مشابه را با هم پیدا کن. همه کارت‌ها را باز کن!</div><div id="mem-board" style="display:grid;grid-template-columns:repeat(4,46px);gap:8px;justify-content:center;margin:0 auto 1.4rem auto;"></div><div id="mem-moves" style="min-height:32px;"></div><button id="mem-restart" class="btn btn-outline-light w-100 mt-2">شروع مجدد</button>';
document.getElementById('games-wrapper').appendChild(box);
let icons=[1,2,3,4,5,6,7,8],deck=shuffle([...icons,...icons]),flipped=[],matched=[],moves=0,lock=false;
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function draw(){const b=document.getElementById('mem-board');b.innerHTML='';deck.forEach((v,i)=>{const d=document.createElement('div');d.className='mem-card';d.style.cssText='width:46px;height:46px;font-size:2rem;display:flex;align-items:center;justify-content:center;background:'+(flipped.includes(i)||matched.includes(i)?'var(--gradient-glow)':'rgba(6,182,212,0.10)')+';border-radius:7px;cursor:'+(matched.includes(i)?'default':'pointer')+';transition:all 0.2s;color:'+(flipped.includes(i)||matched.includes(i)?'var(--dark-color)':'var(--secondary-color)')+';box-shadow:0 2px 8px 1px rgba(0,0,0,0.05);font-weight:800;';if(flipped.includes(i)||matched.includes(i)){d.innerText=v}else{d.innerText='?'}if(!matched.includes(i)&&!flipped.includes(i))d.onclick=function(){if(lock)return;flipped.push(i);draw();if(flipped.length===2){lock=true;moves++;setTimeout(()=>{if(deck[flipped[0]]===deck[flipped[1]]){matched.push(flipped[0],flipped[1])}flipped=[];lock=false;draw()},800)}};b.appendChild(d)});const txt=document.getElementById('mem-moves');if(matched.length===deck.length&&deck.length>0){txt.innerHTML='کارت‌ها تموم شد! تلاش: '+moves}else{txt.innerHTML='تعداد حرکت: '+moves}}
document.getElementById('mem-restart').onclick=function(){deck=shuffle([...icons,...icons]);flipped=[];matched=[];moves=0;lock=false;draw()};draw();}});
document.addEventListener('DOMContentLoaded',function(){if(document.getElementById('games-wrapper')){const box=document.createElement('div');box.className='minigame-box';box.innerHTML='<div class="minigame-title">تست واکنش سریع</div><div class="minigame-desc">سرعت واکنش خودت رو بسنج!</div><div id="rt-box" style="width:150px;height:54px;background:rgba(6,182,212,0.07);border-radius:12px;line-height:54px;margin:0 auto 1.7rem auto;font-size:1.13rem;transition:background .2s;text-align:center;cursor:pointer;color:var(--primary-color);font-weight:700;user-select:none;">برای شروع کلیک کن</div><div id="rt-result" style="min-height:33px;margin-bottom:8px"></div>';
document.getElementById('games-wrapper').appendChild(box);
const boxEl=document.getElementById('rt-box'),result=document.getElementById('rt-result');let started=false,canClick=false,startTime,timeout;function reset(){started=false;canClick=false;result.innerText='';boxEl.style.background='rgba(6,182,212,0.07)';boxEl.innerText='برای شروع کلیک کن'}boxEl.onclick=function(){if(!started){reset();boxEl.innerText='منتظر شو...';started=true;timeout=setTimeout(()=>{canClick=true;startTime=Date.now();boxEl.style.background='var(--secondary-color)';boxEl.innerText='کلیک کن!'},Math.random()*1100+1100)}else if(started&&!canClick){clearTimeout(timeout);reset();result.innerText='خیلی زود کلیک کردی!'}else if(canClick){const time=Date.now()-startTime;boxEl.innerText='برای شروع کلیک کن';result.innerHTML='واکنش تو: <b>'+time+'</b> میلی‌ثانیه';started=false;canClick=false;boxEl.style.background='rgba(6,182,212,0.07)'}};}});
document.addEventListener('DOMContentLoaded',function(){if(document.getElementById('games-wrapper')){const box=document.createElement('div');box.className='minigame-box';box.innerHTML='<div class="minigame-title">انتخاب رنگ سریع</div><div class="minigame-desc">سریع‌ترین رنگ مورد نظر را پیدا کن و کلیک کن!</div><div id="cc-bar" style="min-height:32px;margin-bottom:10px;"></div><div id="cc-colors" style="display:flex;gap:9px;justify-content:center;flex-wrap:wrap;margin-bottom:10px;"></div><button id="cc-restart" class="btn btn-outline-light w-100 mt-2">شروع/دور بعد</button>';
document.getElementById('games-wrapper').appendChild(box);
let colors=["#06b6d4","#f43f5e","#8b5cf6","#efd81d","#4ade80","#eab308","#f59e42","#6366f1"],target,t0,count=0,sum=0,playing=false;function newRound(){const cc=document.getElementById('cc-colors'),bar=document.getElementById('cc-bar');let shuffled=[...colors].sort(()=>.5-Math.random()),pick=Math.floor(Math.random()*shuffled.length);target=shuffled[pick];cc.innerHTML='';shuffled.forEach((c,i)=>{let d=document.createElement('div');d.style.cssText='width:40px;height:40px;background:'+c+';border-radius:10px;cursor:pointer;box-shadow:0 1.5px 6px 1.5px rgba(0,0,0,0.10);border:2.5px solid '+(c==target?'var(--accent-color)':'transparent')+';transition:all .18s;';d.onclick=function(){if(playing){let t=Date.now()-t0;bar.innerHTML='زمان شما: <b>'+t+'</b> میلی‌ثانیه';count++;sum+=t;playing=false}else{bar.innerHTML='برای شروع/دور بعد، دوباره بزن.'}};cc.appendChild(d)});bar.innerHTML='<span style="color:'+target+';font-weight:800;">روی رنگ '+target+' کلیک کن!</span>';t0=Date.now();playing=true}document.getElementById('cc-restart').onclick=function(){if(count){document.getElementById('cc-bar').innerHTML='میانگین: <b>'+(sum/count|0)+'</b> میلی‌ثانیه در '+count+' دور';count=0;sum=0}newRound()};newRound();}});
document.addEventListener('DOMContentLoaded',function(){const btn=document.getElementById('goto-minigames');if(btn){btn.onclick=function(){const s=document.getElementById('minigames');if(s)s.scrollIntoView({behavior:'smooth'})};function toggle(){let y=window.scrollY,h=window.innerHeight,sec=document.getElementById('minigames'),r=sec?sec.getBoundingClientRect().top+y:0;btn.style.display=(Math.abs(y-r)<h/2)?'none':'flex'};window.addEventListener('scroll',toggle);window.addEventListener('resize',toggle);toggle();}});