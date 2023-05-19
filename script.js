/*.**********menu*********. */
const btnMenuMobile = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menuMobile');
const Close = document.querySelector('.none')

btnMenuMobile.addEventListener('click', toggleMobilemenu) ;

function toggleMobilemenu() {
    menuMobile.classList.toggle ('inactive');

}