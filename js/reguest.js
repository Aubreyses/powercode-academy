// Button sending in page reguest
const buttonSend = document.querySelector( '.reguest__button' );
const mainPage = document.querySelectorAll( '.main__reguest' );
console.log(buttonSend);
console.log(mainPage);

buttonSend.addEventListener('click', function(event) {
    if( event.target.closest( '.reguest__button' )) {
        for ( let mainClassName of mainPage ) {
            mainClassName.classList.toggle( 'active' );
        };;
    };
});