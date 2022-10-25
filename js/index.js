"use strict"

// Burger
function showBurger( selectorMain, selectorButton, selectorBurger ) {

    const main = document.querySelectorAll( selectorMain );
    const button = document.querySelector( selectorButton );
    const burger = document.querySelector( selectorBurger );

    button.addEventListener('click', function(event) {
        if( event.target.closest( selectorButton )) {
            burger.classList.toggle( 'active' ); 
        }
    
        if(event.target.closest( selectorButton )) {
            for ( let mainClassName of main ) {
                mainClassName.classList.toggle( 'active' );
            };
        }
    });
};

showBurger( '.main', '.header__contacts-menu', '.header__contacts-menu-burger' );


// Scroll
function scroll( selectorsAnchor ) {

    const anchor = document.querySelector( selectorsAnchor )

    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        
        const blockId = anchor.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });

};

scroll( '.footer__block-turning[href*="#"]' );


// Slider
function slider( selectorSliderImg, selectorSliderLine, selectorScrollPoint ) {

    const sliderImg = document.querySelectorAll( selectorSliderImg );
    const sliderLine = document.querySelector( selectorSliderLine );
    const scrollPoint = document.querySelectorAll( selectorScrollPoint );

    function sliderWork( sliderImg, sliderLine, scrollPoint ) {

        let windowWidth = document.documentElement.clientWidth;

        for( let image of sliderImg ) { 
            image.style.width = (windowWidth * 0.8) + "px";
        
            image.style.marginLeft = (windowWidth * 0.1) + "px";
            image.style.marginRight = (windowWidth * 0.1) + "px";
        }

        let offset = -(windowWidth);

        for( let val of sliderImg ) {
            offset += windowWidth;
        };

        let startSlider = 0 - (offset / 2); 
        let currentSlide = startSlider;
        let finishSlider = offset / 2;

        sliderLine.style.right = startSlider + "px";

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
        } 
    }

    sliderWork( sliderImg, sliderLine, scrollPoint );
};

slider( '.collage__block-slider-img', '.collage__block-slider', '.collage__scroll-point' );


// Regime button
function regimeButton( selectorCoursesBtn, selectorLocationBtn ) {
    const coursesBtn = document.querySelectorAll( selectorCoursesBtn );
    const locationBtn = document.querySelectorAll( selectorLocationBtn );

    for( let button of coursesBtn ) {
        button.addEventListener('click', function(event) {

            for( let button of coursesBtn) {
                if( button.classList.contains('active')) {
                    button.classList.remove('active');
                    button.classList.toggle('passive');
                };
            };

            button.classList.remove('passive');
            button.classList.toggle('active');
        });
    };

    for( let button of locationBtn ) {
        button.addEventListener('click', function(event) {

            for( let button of locationBtn) {
                if( button.classList.contains('active')) {
                    button.classList.remove('active');
                    button.classList.toggle('location__map-info-city-btn-grey');
                };
            };

            button.classList.remove('location__map-info-city-btn-grey');
            button.classList.toggle('active');
        });
    };
}

regimeButton( '.courses__version-regime-btn', '.location__map-info-city-btn' );