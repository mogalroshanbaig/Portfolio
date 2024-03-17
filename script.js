// script.js
document.querySelector('a[href="#resume"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior (scrolling to the section)
    window.open('resume/ROSHANBAIG_RESUME.pdf', '_blank');
});
 document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                const href = link.getAttribute('href');
                const offsetTop = document.querySelector(href).offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            });
        });
    
