// Portfolio Website JavaScript - Enhanced Professional Effects

document.addEventListener('DOMContentLoaded', function() {
    
    // Enhanced Scroll Reveal Animation System
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.content-section, .card, .skill-card, .project-card, .contact-form, .about-preview .lead, .section-title, .contact-info, .professional-summary');
        
        // Add stagger delays for container elements
        const containers = document.querySelectorAll('.skills-grid');
        containers.forEach(container => {
            const children = container.children;
            Array.from(children).forEach((child, index) => {
                child.style.setProperty('--stagger', index);
                child.classList.add('scroll-reveal');
            });
        });
        
        // Add scroll reveal class to other elements
        revealElements.forEach(element => {
            if (!element.closest('.skills-grid')) {
                element.classList.add('scroll-reveal');
            }
        });
        
        // Enhanced Intersection Observer for scroll reveal
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Trigger skill progress bars when revealed
                    if (entry.target.classList.contains('skill-card')) {
                        setTimeout(() => {
                            entry.target.classList.add('progress-animated');
                        }, 300);
                    }
                    // Unobserve after revealing to improve performance
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe all scroll reveal elements
        document.querySelectorAll('.scroll-reveal').forEach(element => {
            observer.observe(element);
        });
    }

    // Create Floating Shapes Animation
    function createFloatingShapes() {
        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) return;
        
        // Create floating shapes container
        const shapesContainer = document.createElement('div');
        shapesContainer.className = 'floating-shapes';
        heroSection.appendChild(shapesContainer);
        
        // Create floating triangle
        const triangle = document.createElement('div');
        triangle.className = 'floating-triangle';
        heroSection.appendChild(triangle);
        
        // Add more dynamic floating elements
        createAdditionalFloatingElements();
    }
    
    function createAdditionalFloatingElements() {
        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) return;
        
        // Create random floating particles
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 10 + 5}px;
                height: ${Math.random() * 10 + 5}px;
                background: rgba(0, 0, 0, ${Math.random() * 0.1 + 0.05});
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: floatParticle ${Math.random() * 10 + 5}s ease-in-out infinite;
                animation-delay: ${Math.random() * 5}s;
                pointer-events: none;
                z-index: 1;
            `;
            heroSection.appendChild(particle);
        }
        
        // Add keyframes for particle animation
        if (!document.querySelector('#particle-keyframes')) {
            const style = document.createElement('style');
            style.id = 'particle-keyframes';
            style.textContent = `
                @keyframes floatParticle {
                    0%, 100% { 
                        transform: translateY(0px) translateX(0px) scale(1);
                        opacity: 0.3;
                    }
                    25% { 
                        transform: translateY(-20px) translateX(10px) scale(1.1);
                        opacity: 0.7;
                    }
                    50% { 
                        transform: translateY(-10px) translateX(-5px) scale(0.9);
                        opacity: 1;
                    }
                    75% { 
                        transform: translateY(-30px) translateX(-10px) scale(1.05);
                        opacity: 0.8;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Initialize scroll reveal animations
    initScrollReveal();
    
    // Initialize floating shapes
    createFloatingShapes();
    
    // Code Typing Effect
    function initCodeTyping() {
        const codeElements = document.querySelectorAll('.code-typing');
        codeElements.forEach(element => {
            const text = element.getAttribute('data-code') || element.textContent;
            element.textContent = '';
            element.setAttribute('data-code', text);
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            };
            
            // Start typing when element is visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(typeWriter, 500);
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(element);
        });
    }
    
    // API Status Animation
    function createAPIStatus() {
        const apiStatuses = document.querySelectorAll('.api-status');
        apiStatuses.forEach(status => {
            const text = status.textContent;
            status.textContent = '';
            
            let i = 0;
            const typeAPI = () => {
                if (i < text.length) {
                    status.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeAPI, 30);
                }
            };
            
            setTimeout(typeAPI, Math.random() * 2000);
        });
    }
    
    // Enhanced Navbar Effects
    function initNavbarEffects() {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        if (navbar) {
            window.addEventListener('scroll', function() {
                const scrolled = window.scrollY > 50;
                navbar.classList.toggle('scrolled', scrolled);
                
                // Add backdrop blur effect when scrolled
                if (scrolled) {
                    navbar.style.backdropFilter = 'blur(10px)';
                    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                } else {
                    navbar.style.backdropFilter = 'none';
                    navbar.style.backgroundColor = 'var(--primary-white)';
                }
            });
        }
        
        // Enhanced nav link hover effects
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }
    
    // Skill Progress Bar Animation
    function initSkillProgress() {
        const skillCards = document.querySelectorAll('.skill-card');
        
        skillCards.forEach((card, index) => {
            const progressBar = card.querySelector('.skill-progress');
            if (progressBar) {
                // Add progress bar if it doesn't exist
                if (!progressBar) {
                    const progress = document.createElement('div');
                    progress.className = 'skill-progress';
                    card.appendChild(progress);
                }
                
                // Animate progress when card is revealed
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setTimeout(() => {
                                const progressBar = entry.target.querySelector('.skill-progress');
                                if (progressBar) {
                                    progressBar.classList.add('animated');
                                }
                            }, index * 200);
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.5 });
                
                observer.observe(card);
            }
        });
    }
    
    // Contact Form Enhanced Effects
    function initContactFormEffects() {
        const form = document.getElementById('contact-form');
        if (!form) return;
        
        const formFields = form.querySelectorAll('.form-control');
        
        formFields.forEach(field => {
            // Enhanced focus effects
            field.addEventListener('focus', function() {
                this.parentElement.classList.add('field-focused');
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            });
            
            field.addEventListener('blur', function() {
                this.parentElement.classList.remove('field-focused');
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '';
            });
            
            // Real-time validation feedback
            field.addEventListener('input', function() {
                if (this.value.length > 0) {
                    this.classList.add('has-content');
                } else {
                    this.classList.remove('has-content');
                }
            });
        });
        
        // Form submission loading state
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Add loading animation
            submitBtn.innerHTML = '<div class="loading-dots"><span></span><span></span><span></span></div>';
            submitBtn.disabled = true;
            
            // Simulate form processing
            setTimeout(() => {
                submitBtn.innerHTML = 'Sent!';
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }, 1500);
        });
    }
    
    // Mouse Following Effect (subtle)
    function initMouseFollowingEffect() {
        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) return;
        
        let mouseX = 0;
        let mouseY = 0;
        let ballX = 0;
        let ballY = 0;
        const speed = 0.1;
        
        // Create custom cursor ball
        const cursorBall = document.createElement('div');
        cursorBall.className = 'cursor-ball';
        cursorBall.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(cursorBall);
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function animateCursor() {
            ballX += (mouseX - ballX) * speed;
            ballY += (mouseY - ballY) * speed;
            
            cursorBall.style.left = ballX - 10 + 'px';
            cursorBall.style.top = ballY - 10 + 'px';
            
            requestAnimationFrame(animateCursor);
        }
        
        animateCursor();
        
        // Hide cursor ball on mobile
        if (window.innerWidth <= 768) {
            cursorBall.style.display = 'none';
        }
    }
    
    // Parallax Scroll Effect
    function initParallaxEffect() {
        const parallaxElements = document.querySelectorAll('.parallax-bg');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const rate = scrolled * -0.5;
                element.style.transform = `translateY(${rate}px)`;
            });
        });
    }
    
    // Initialize all effects
    function initAllEffects() {
        initCodeTyping();
        createAPIStatus();
        initNavbarEffects();
        initSkillProgress();
        initContactFormEffects();
        
        // Only add mouse following and parallax on desktop
        if (window.innerWidth > 768) {
            initMouseFollowingEffect();
            initParallaxEffect();
        }
        
        // Reinitialize on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                const cursorBall = document.querySelector('.cursor-ball');
                if (cursorBall) {
                    cursorBall.style.display = 'none';
                }
            }
        });
    }
    
    // Initialize all effects
    initAllEffects();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Basic navbar scroll effect (no animations)
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Active navigation highlighting
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (currentPath === '/' && link.getAttribute('href') === '/') {
            link.classList.add('active');
        } else if (currentPath.includes(link.getAttribute('href')) && link.getAttribute('href') !== '/') {
            link.classList.add('active');
        }
    });

    // Contact form handling (animations removed)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        // Basic form validation without animations
        const formFields = contactForm.querySelectorAll('.form-control');
        formFields.forEach(field => {
            field.addEventListener('focus', function() {
                this.parentElement.classList.add('field-focused');
            });
            
            field.addEventListener('blur', function() {
                this.parentElement.classList.remove('field-focused');
            });
        });

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            let isValid = true;
            const errors = [];
            
            if (!name || name.trim().length < 2) {
                errors.push('Name must be at least 2 characters long');
                isValid = false;
            }
            
            if (!email || !isValidEmail(email)) {
                errors.push('Please enter a valid email address');
                isValid = false;
            }
            
            if (!message || message.trim().length < 10) {
                errors.push('Message must be at least 10 characters long');
                isValid = false;
            }
            
            if (!isValid) {
                showNotification(errors.join('<br>'), 'error');
                return;
            }
            
            // Form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                showNotification('Thank you for your message! I will get back to you soon.', 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1000);
        });
    }

    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Notification system (animations removed)
    function showNotification(message, type) {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button type="button" class="notification-close">&times;</button>
        `;
        
        // Add styles (no animations)
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#000' : '#333'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 5px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 1rem;
            max-width: 400px;
        `;
        
        // Add close functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            margin-left: auto;
        `;
        
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });
        
        // Add to page
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    // Mobile menu toggle (if needed for custom implementation)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navbarNav = document.querySelector('.navbar-nav');
    
    if (mobileMenuToggle && navbarNav) {
        mobileMenuToggle.addEventListener('click', function() {
            navbarNav.classList.toggle('show');
        });
    }

    // Images load without animation
    document.querySelectorAll('img').forEach(img => {
        img.style.opacity = '1';
        img.style.transition = 'none';
    });
});

// All animation functions have been removed as per user request
// This includes:
// - Typing effects
// - Scroll animations
// - Intersection observers
// - Parallax scrolling
// - Enhanced navbar effects
// - Form field animations
// - Mouse-following effects
// - Floating elements
// - Particle systems
// - Enhanced hover effects
