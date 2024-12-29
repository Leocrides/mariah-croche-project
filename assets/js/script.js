document.addEventListener('DOMContentLoaded', () =>{
    const burger = document.createElement('div');
    burger.classList.add('burger');
    burger.innerHTML = '<div class="line1"></div><div class="line2"></div><div class="line3"></div>';

    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('li')
    const menu = document.querySelector('.menu');

    menu.insertBefore(burger, nav);

    function toggleMenu(){
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    }

    burger.addEventListener('click', toggleMenu);

    navLinks.forEach(link =>{
        link.addEventListener('click', () =>{
            if(nav.classList.contains('nav-active'));
            toggleMenu();
        });
    });
});