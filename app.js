document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        lucide.createIcons();
    }

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
            navbar.style.background = 'rgba(9, 13, 22, 0.95)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = 'rgba(9, 13, 22, 0.85)';
        }
    });

    const tabs = document.querySelectorAll('.mockup-sidebar .sidebar-item');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
});
