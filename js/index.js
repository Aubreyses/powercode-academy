"use strict"

// Burger
const main = document.querySelectorAll( '.main' );
const mainNav = document.querySelector( '.main__nav' );

const button = document.querySelector( '.header__contacts-menu' );
const burger = button.lastElementChild;

button.addEventListener('click', function(event) {
    if( event.target.closest( '.header__contacts-menu' )) {
        burger.classList.toggle( 'active' ); 
    }

    if(event.target.closest( '.header__contacts-menu' )) {
        for ( let mainClassName of main ) {
            mainClassName.classList.toggle( 'active' );
        };
    }
});

// Slider
let windowWidth = document.documentElement.clientWidth; 


const sliderImg = document.querySelectorAll('.collage__block-slider-img');
for( let val of sliderImg ) { 
    val.style.width = (windowWidth * 0.8) + "px";

    val.style.marginLeft = (windowWidth * 0.1) + "px";
    val.style.marginRight = (windowWidth * 0.1) + "px";
}


let offset = -(windowWidth);

for( let val of sliderImg ) {
    offset += windowWidth;
};

let startSlider = 0 - (offset / 2); // -1539px
let currentSlide = startSlider;
let finishSlider = offset / 2; // 1539px


const sliderLine = document.querySelector('.collage__block-slider');
sliderLine.style.right = startSlider + "px";


const scrollPoint = document.querySelectorAll('.collage__scroll-point');

let scrollPointMap = new Map();
let currentSlideVal = startSlider;

for ( let scrollPointNum of scrollPoint ) {
    scrollPointMap.set(scrollPointNum, currentSlideVal); 

    currentSlideVal += windowWidth;
};


for( let [key, values] of scrollPointMap ) {
    key.addEventListener( 'click', function(event) {
        sliderLine.style.right = values + 'px';

        key.classList.toggle('active');

        currentSlide = values;

        for( let [key, values] of scrollPointMap ) {
            if( currentSlide != values ) key.classList.remove('active');
        };
    } );
};

for (let image of sliderImg) {
    image.addEventListener( 'click', function(event) {
        currentSlide += windowWidth;

        if ( currentSlide > finishSlider ) {
            currentSlide = startSlider;
        };

        sliderLine.style.right = currentSlide + 'px';


        for( let [key, values] of scrollPointMap ) {
            if( currentSlide == values ) {
                key.classList.toggle('active');
            } else {
                key.classList.remove('active');
            };
        };
    } );
};







