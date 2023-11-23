const body = document.querySelector('body'),
    burger = document.querySelector('#burger'),
    nav = document.querySelector('nav'),
    croixNav = document.querySelector('#croixNav');

// OUVERTURE NAV
burger.addEventListener('click', () => {
        nav.style.transform = 'translateX(0)';
        body.style.overflow = 'hidden';
});

// FERMETURE NAV
croixNav.addEventListener('click', () => {
    nav.style.transform = 'translateX(-60vw)';
    body.style.overflow = 'scroll';
});