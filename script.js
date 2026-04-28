document.addEventListener('DOMContentLoaded', () => {
    
    // 1. تحديد جميع العناصر المراد تحريكها عند التمرير
    // تم هنا تحديد جميع الفئات التي تحتاج للتحريك
    const elementsToAnimate = document.querySelectorAll(
        '.expertise-item, .timeline-item, .cert-item, h2, .summary-text'
    );

    // 2. تطبيق حالة الإخفاء الأولية على العناصر التي لم يتم وضع الفئة عليها يدوياً في HTML
    elementsToAnimate.forEach(el => {
        el.classList.add('hidden');
    });

    // 3. إعداد Intersection Observer
    const observerOptions = {
        root: null, // إطار العرض (viewport)
        rootMargin: '0px',
        threshold: 0.1 // 10% من العنصر مرئي لتشغيل التحريك
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // عند الدخول إلى مجال الرؤية
                entry.target.classList.remove('hidden');
                entry.target.classList.add('fade-in'); 
                
                // إيقاف المراقبة بعد التحريك لمرة واحدة
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 4. تطبيق المراقبة على جميع العناصر
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});