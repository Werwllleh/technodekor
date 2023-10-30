document.addEventListener('DOMContentLoaded', () => {

	const menuButton = document.querySelector('.catalog-button');
	const menuBlock = document.querySelector('.header__menu');
	const menuTopMoreButton = document.querySelector('.header__menu-top-more');
	const menuTopMore = document.querySelector('.menu__more');

	menuButton.addEventListener('click', (event) => {
		event.preventDefault();
		menuButton.classList.toggle('active');

		if (menuButton.classList.contains('active')) {
			menuBlock.classList.add('active')
			document.body.classList.add('noscroll')
		} else {
			document.body.classList.remove('noscroll')
			menuBlock.classList.remove('active')
			menuTopMoreButton.classList.remove('active');
			menuTopMore.classList.remove('active')

		}
	})

	menuTopMoreButton.addEventListener('click', (event) => {
		event.preventDefault();
		menuTopMoreButton.classList.toggle('active');

		if (menuTopMoreButton.classList.contains('active')) {
			menuTopMore.classList.add('active')
		} else {
			menuTopMore.classList.remove('active')
		}
	})



});
