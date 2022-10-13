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
let offset = -1805;
let numScrollPoint = 0;
let sliderRight = offset;

const sliderLine = document.querySelector('.collage__block-slider');
const sliderImg = document.querySelectorAll('.collage__block-slider-img');
const scrollPoint = document.querySelectorAll('.collage__scroll-point');

let scrollPointMap = new Map();

for ( let scrollPointNum of scrollPoint ) {
   scrollPointMap.set(scrollPointNum, sliderRight); 

   sliderRight += 390;
};

for( let [key, values] of scrollPointMap ) {
    key.addEventListener( 'click', function(event) {
        sliderLine.style.right = values + 'px';

        key.classList.toggle('active');

        offset = values;

        for( let [key, values] of scrollPointMap ) {
            if( offset != values ) key.classList.remove('active');
        };
    } );
};

for (let image of sliderImg) {
    image.addEventListener( 'click', function(event) {
        offset += 390;

        if ( offset > 1705 ) {
            offset = -1805;
        };

        sliderLine.style.right = offset + 'px';


        for( let [key, values] of scrollPointMap ) {
            if( offset == values ) {
                key.classList.toggle('active');
            } else {
                key.classList.remove('active');
            };
        };
    } );
};







