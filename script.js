const body = document.querySelector('body'),
    burger = document.querySelector('#burger'),
    nav = document.querySelector('nav'),
    croixNav = document.querySelector('#croixNav'),
    price = document.querySelector('.price'),
    taille = document.querySelector('#taille_pizza'),
    quanti = document.querySelector('#nb');


taille.addEventListener('click', ()=>{
    calculPrix();
});
quanti.addEventListener('click', ()=>{
    calculPrix();
});

function calculPrix(){
    let size = document.querySelector('#taille_pizza').value,
    quant = document.querySelector('#nb').value,
    prix;
    if (size == 'petite'){
        prix = 10;
    }
    if (size == 'moyenne'){
        prix = 12;
    }
    if (size == 'grande'){
        prix = 14;
    }
    prix = prix*quant;
    price.textContent = ' '+prix+'€';
}

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