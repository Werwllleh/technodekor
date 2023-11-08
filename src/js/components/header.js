document.addEventListener('DOMContentLoaded', () => {

	const menuButton = document.querySelector('.catalog-button');
	const menuBlock = document.querySelector('.header__menu');
	const menuTopMoreButton = document.querySelector('.header__menu-top-more');
	const menuTopMore = document.querySelector('.menu__more');
	const menuMobileCLose = document.querySelector('.header__menu-header-close');
	const menuMoreCLose = document.querySelector('.menu__more-close');
	const headerMore = document.querySelector('.header-button-more');
	const modalHeaderMore = document.querySelector('.modal-header-more');

	const menuListMore = document.querySelectorAll('.header__menu-category-item-more');


	const headerSelectCity = document.querySelector('.header__city');
	const headerSelectPhone = document.querySelector('.header__phone-arrow');

	const modalHeaderMoreButtons = document.querySelectorAll('.modal-header-more__footer-about-header');
	const modalHeaderMoreCitySelect = document.querySelector('.city--select');

	menuListMore.forEach((btn) => {
		btn.addEventListener('click', () => {

			btn.classList.toggle('active')

			btn.parentNode.children.forEach((li, index) => {

				if (btn.classList.contains('active') && li.classList.contains('hidden')) {
					li.classList.remove('hidden')
					li.classList.add('show')
				} else {
					if (li.classList.contains('show')) {
						li.classList.remove('show')
						li.classList.add('hidden')
					}
				}
			})
		})
	})

	headerSelectCity.addEventListener('click', () => {
		const cityTitle = headerSelectCity.children[0];
		const cityListBlock = headerSelectCity.children[2];
		const cityList = cityListBlock.children[0].children;

		headerSelectCity.classList.toggle('active');

		if (headerSelectCity.classList.contains('active')) {
			cityListBlock.classList.add('show')

			cityList.forEach((item) => {
				item.addEventListener('click', (e) => {
					e.stopPropagation();

					cityList.forEach((li) => {
						li.classList.remove('active');
					});

					item.classList.add('active');
					cityTitle.innerHTML = item.innerHTML

					headerSelectCity.classList.remove('active')
					cityListBlock.classList.remove('show')
				});
			});
		} else {
			cityListBlock.classList.remove('show')
		}
	})

	headerSelectPhone.addEventListener('click', () => {
		const phoneListBlock = headerSelectPhone.parentNode.children[2];

		headerSelectPhone.classList.toggle('active');

		if (headerSelectPhone.classList.contains('active')) {
			phoneListBlock.classList.add('show')

		} else {
			phoneListBlock.classList.remove('show')
		}
	})

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

	headerMore.addEventListener('click', () => {
		modalHeaderMore.classList.add('active');
		document.documentElement.style.overflow = "hidden";
	})

	modalHeaderMoreButtons.forEach((btn) => {
		let bottomBlock = btn.parentNode.children[1];
		let list = btn.parentNode.children[1].children[0];
		btn.addEventListener('click', (e) => {
			btn.classList.toggle('active')

			if (btn.classList.contains('active')) {
				bottomBlock.style.maxHeight = `${list.clientHeight}px`;
			} else {
				bottomBlock.style.maxHeight = 0;
			}

			if (btn.classList.contains('active') && btn.classList.contains('city--select')) {
				const cityList = btn.parentNode.children[1].children[0];

				for (let i = 0; i < cityList.children.length; i++) {
					let city = cityList.children[i].children[0];
					let titleBtn = btn.children[0].children[0];

					city.addEventListener('click', (e) => {
						e.preventDefault();

						cityList.children.forEach((li) => {
							li.classList.remove('active');
						});

						city.parentNode.classList.add('active');
						titleBtn.innerHTML = city.innerHTML;

					})

				}

			}
		})
	})
});
