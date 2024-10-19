document.addEventListener('DOMContentLoaded', () => {
    // Typewriter effect for the intro text
    const typewriterText = document.querySelector('.typewriter');
    let textIndex = 0;
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < textArray[textIndex].length) {
            typewriterText.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // Slide-in effect for section headings
    const slideInElements = document.querySelectorAll('.slide-in');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const slideInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    slideInElements.forEach(element => {
        slideInObserver.observe(element);
    });

    // Fade-in effect for section paragraphs
    const fadeInElements = document.querySelectorAll('.fade-in');

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        fadeInObserver.observe(element);
    });

    // Subtle fade effect on project images
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.opacity = '0.9';
        });
        card.addEventListener('mouseout', () => {
            card.style.opacity = '1';
        });
    });

    // Pulsing contact button effect
    const pulseButton = document.querySelector('.pulse');

    pulseButton.addEventListener('mouseover', () => {
        pulseButton.style.animation = 'none';
        pulseButton.style.transform = 'scale(1.3)';
    });

    pulseButton.addEventListener('mouseout', () => {
        pulseButton.style.animation = 'pulse 2s infinite';
        pulseButton.style.transform = 'scale(1)';
    });

    // Bouncing contact paragraph effect
    const bounceText = document.querySelector('.bounce');

    bounceText.addEventListener('mouseover', () => {
        bounceText.style.animation = 'none';
        bounceText.style.transform = 'translateY(-10px)';
    });

    bounceText.addEventListener('mouseout', () => {
        bounceText.style.animation = 'bounce 2s infinite';
        bounceText.style.transform = 'translateY(0)';
    });
});