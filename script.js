// Sidebar Toggle
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Carousel Functionality
class AchievementsCarousel {
    constructor() {
        this.track = document.getElementById('carouselTrack');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.cards = document.querySelectorAll('.achievement-card');
        this.currentIndex = 0;
        this.cardWidth = 250; // width + gap
        this.visibleCards = this.getVisibleCards();
        this.autoplayInterval = null;
        this.isAutoplayPaused = false;
        
        this.init();
    }
    
    getVisibleCards() {
        const containerWidth = document.querySelector('.carousel-container').offsetWidth;
        return Math.floor(containerWidth / this.cardWidth);
    }
    
    init() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Auto-resize handling
        window.addEventListener('resize', () => {
            this.visibleCards = this.getVisibleCards();
            this.updatePosition();
        });
        
        // Mouse hover pause/resume
        const carousel = document.getElementById('achievementsCarousel');
        carousel.addEventListener('mouseenter', () => this.pauseAutoplay());
        carousel.addEventListener('mouseleave', () => this.resumeAutoplay());
        
        this.startAutoplay();
    }
    
    updatePosition() {
        const maxIndex = Math.max(0, this.cards.length - this.visibleCards);
        this.currentIndex = Math.min(this.currentIndex, maxIndex);
        
        const translateX = -this.currentIndex * (this.cardWidth + 16); // 16px gap
        this.track.style.transform = `translateX(${translateX}px)`;
    }
    
    next() {
        const maxIndex = Math.max(0, this.cards.length - this.visibleCards);
        this.currentIndex = this.currentIndex >= maxIndex ? 0 : this.currentIndex + 1;
        this.updatePosition();
    }
    
    prev() {
        const maxIndex = Math.max(0, this.cards.length - this.visibleCards);
        this.currentIndex = this.currentIndex <= 0 ? maxIndex : this.currentIndex - 1;
        this.updatePosition();
    }
    
    startAutoplay() {
        this.autoplayInterval = setInterval(() => {
            if (!this.isAutoplayPaused) {
                this.next();
            }
        }, 3000);
    }
    
    pauseAutoplay() {
        this.isAutoplayPaused = true;
    }
    
    resumeAutoplay() {
        this.isAutoplayPaused = false;
    }
    
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AchievementsCarousel();
    
    // Animate stat bars on load
    setTimeout(() => {
        const statFills = document.querySelectorAll('.stat-fill');
        statFills.forEach(fill => {
            const width = fill.style.width;
            fill.style.width = '0%';
            setTimeout(() => {
                fill.style.width = width;
            }, 100);
        });
    }, 500);
});

// Add floating animation delays to achievement cards
document.addEventListener('DOMContentLoaded', () => {
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.5}s`;
    });
});

// Smooth scrolling for navigation (if you add navigation links)
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add some interactive effects to buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    
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
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});