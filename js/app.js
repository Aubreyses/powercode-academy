// Burger
const main = document.querySelectorAll('.main');
const mainNav = document.querySelector('.main__nav');

const button = document.querySelector('.header__contacts-menu');
const burger = button.lastElementChild;

button.addEventListener('click', function(event) {
    if(event.target.closest('.header__contacts-menu')) {
        burger.classList.toggle('active'); 
    }

    if(event.target.closest('.header__contacts-menu')) {
        for (let mainClassName of main) {
            mainClassName.classList.toggle('active');
        };
    }
})

