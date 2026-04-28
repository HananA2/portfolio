document.addEventListener('DOMContentLoaded', () => {
    
    const elementsToAnimate = document.querySelectorAll(
        '.expertise-item, .timeline-item, .cert-item, h2, .summary-text'
    );

    elementsToAnimate.forEach(el => {
        el.classList.add('hidden');
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                entry.target.classList.add('fade-in'); 
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});

function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}
