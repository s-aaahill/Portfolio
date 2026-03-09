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
