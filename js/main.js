document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    if (toggle && navList) {
        toggle.addEventListener('click', function() {
            navList.classList.toggle('open');
        });

        document.querySelectorAll('.nav-list a').forEach(function(link) {
            link.addEventListener('click', function() {
                navList.classList.remove('open');
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
