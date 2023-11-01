document.addEventListener('DOMContentLoaded', () => {

	const menuButton = document.querySelector('.catalog-button');
	const menuBlock = document.querySelector('.header__menu');
	const menuTopMoreButton = document.querySelector('.header__menu-top-more');
	const menuTopMore = document.querySelector('.menu__more');
	const menuMobileCLose = document.querySelector('.header__menu-header-close');
	const menuMoreCLose = document.querySelector('.menu__more-close');

	menuButton.addEventListener('click', (e) => {
		e.preventDefault();
		menuButton.classList.toggle('active');

		if (menuButton.classList.contains('active')) {
			menuBlock.classList.add('active')
			document.documentElement.style.overflow = "hidden";
		} else {
			document.documentElement.style.overflow = "auto";
			menuBlock.classList.remove('active')
			menuTopMoreButton.classList.remove('active');
			menuTopMore.classList.remove('active')
		}
	})

	menuMobileCLose.addEventListener('click', () => {
		menuButton.classList.remove('active');
		menuTopMore.classList.remove('active');
		menuBlock.classList.remove('active')
		menuTopMoreButton.classList.remove('active');
		document.documentElement.style.overflow = "auto";
	})

	menuTopMoreButton.addEventListener('click', (e) => {
		e.preventDefault();
		menuTopMoreButton.classList.toggle('active');

		if (menuTopMoreButton.classList.contains('active')) {
			menuTopMore.classList.add('active')

		} else {
			menuTopMore.classList.remove('active')
		}
	})

	menuMoreCLose.addEventListener('click', () => {
		menuTopMore.classList.remove('active');
		menuTopMoreButton.classList.remove('active');
	})


});
