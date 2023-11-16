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

	function getScrollbarWidth() {

		// Creating invisible container
		const outer = document.createElement('div');
		outer.style.visibility = 'hidden';
		outer.style.overflow = 'scroll'; // forcing scrollbar to appear
		outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
		document.body.appendChild(outer);

		// Creating inner element and placing it in the container
		const inner = document.createElement('div');
		outer.appendChild(inner);

		// Calculating difference between container's full width and the child width
		const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

		// Removing temporary elements from the DOM
		outer.parentNode.removeChild(outer);

		return scrollbarWidth;

	}

	if (menuListMore.length) {
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
	}

	if (headerSelectCity) {
		document.addEventListener('click', (event) => {
			if (headerSelectCity && !headerSelectCity.contains(event.target)) {
				headerSelectCity.classList.remove('active');
				const cityListBlock = headerSelectCity.children[2];
				cityListBlock.classList.remove('show');
			}
		});
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
	}

	if (headerSelectPhone) {
		document.addEventListener('click', (event) => {
			if (headerSelectPhone && !headerSelectPhone.contains(event.target)) {
				headerSelectPhone.classList.remove('active');
				const phoneListBlock = headerSelectPhone.parentNode.children[2];
				phoneListBlock.classList.remove('show');
			}
		});
		headerSelectPhone.addEventListener('click', () => {
			const phoneListBlock = headerSelectPhone.parentNode.children[2];

			headerSelectPhone.classList.toggle('active');

			if (headerSelectPhone.classList.contains('active')) {
				phoneListBlock.classList.add('show')

			} else {
				phoneListBlock.classList.remove('show')
			}
		})
	}

	if (menuButton) {
		menuButton.addEventListener('click', (e) => {
			e.preventDefault();
			getScrollbarWidth();
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
	}

	if (menuMobileCLose) {
		menuMobileCLose.addEventListener('click', () => {
			menuButton.classList.remove('active');
			menuTopMore.classList.remove('active');
			menuBlock.classList.remove('active')
			menuTopMoreButton.classList.remove('active');
			document.documentElement.style.overflow = "auto";
		})
	}

	if (menuTopMoreButton) {
		menuTopMoreButton.addEventListener('click', (e) => {
			e.preventDefault();
			menuTopMoreButton.classList.toggle('active');

			if (menuTopMoreButton.classList.contains('active')) {
				menuTopMore.classList.add('active')

			} else {
				menuTopMore.classList.remove('active')
			}
		})
	}

	if (menuMoreCLose) {
		menuMoreCLose.addEventListener('click', () => {
			menuTopMore.classList.remove('active');
			menuTopMoreButton.classList.remove('active');
		})
	}

	if (headerMore) {
		headerMore.addEventListener('click', () => {
			modalHeaderMore.classList.add('active');
			document.documentElement.style.overflow = "hidden";
		})
	}

	if (modalHeaderMoreButtons.length) {
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
	}
});
