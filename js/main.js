document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navigation .nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            navLinks.forEach(function(navLink) {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});
$('.slider-wraper').slick({
     
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});