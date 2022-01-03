const burger = document.querySelector('.header__burger')
const _film = document.querySelector('._film')
const burger__menu = document.querySelector('.burger__menu')
const burger__film_popup = document.querySelector('.burger__film_popup')
const body = document.querySelector('body')
burger.addEventListener('click',function () {
	burger.classList.toggle('header__burger_active');
	burger__menu.classList.toggle('__active');
    body.classList.toggle('_lock')
	

	
});
_film.addEventListener('click',function () {
	burger__film_popup.classList.toggle('_active')
	
})