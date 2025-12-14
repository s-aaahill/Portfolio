document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor Glow
    const cursor = document.querySelector('.cursor-glow');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 200 + 'px';
        cursor.style.top = e.clientY - 200 + 'px';
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-in class to sections and observe
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('fade-in-section');
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Handle Animation Trigger
    const handledIntersections = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    };

    const sectionObserver = new IntersectionObserver(handledIntersections, observerOptions);
    document.querySelectorAll('.section').forEach(s => sectionObserver.observe(s));
});
// About section floating icons follow cursor
const aboutSection = document.querySelector('#about');
const icons = document.querySelectorAll('.about-decor .tech-icon');

aboutSection.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = aboutSection.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - top) / height - 0.5;

    icons.forEach((icon, i) => {
        const factor = (i + 1) * 10; // different movement per icon
        icon.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
});

// Reset icons on mouse leave
aboutSection.addEventListener('mouseleave', () => {
    icons.forEach(icon => icon.style.transform = 'translate(0,0)');
});
const skillCards = document.querySelectorAll('.skill-category');

skillCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width/2;
        const cy = rect.height/2;

        const dx = (x - cx)/cx;
        const dy = (y - cy)/cy;

        card.querySelector('.skill-inner').style.transform = `rotateY(${dx*10}deg) rotateX(${-dy*10}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.querySelector('.skill-inner').style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});
