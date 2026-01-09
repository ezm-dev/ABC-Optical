//close burger menu when click on the link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
   document.getElementById('menu-toggle').checked = false;
    //document.querySelectorAll('input[type="checkbox"]')[0].checked = false;
     //document.querySelector('input[type="checkbox"]').checked = false;
    //document.querySelector('input[name="menu-toggle"]').checked = false;
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        const offsetPosition = target.offsetTop - document.querySelector('header').offsetHeight;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});




