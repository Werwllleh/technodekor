import lightGallery from 'lightgallery';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'


document.addEventListener('DOMContentLoaded', () => {
	const showBtns = document.querySelectorAll('.text__block-btn');

	if (showBtns.length) {
		showBtns.forEach((showBtn) => {

			const texts = showBtn.parentNode.querySelectorAll('p');

			let textsLength = 0;

			texts.forEach((text) => {
				textsLength += text.innerHTML.length;
			})


			if (textsLength > 500 && window.outerWidth >= 564) {
				showBtn.classList.remove('hidden');
				texts.forEach((text, index) => {
					if (index > 0) {
						text.classList.add('active');
					}
				})
			} else if (textsLength < 500 && window.outerWidth >= 564) {
				showBtn.classList.add('hidden');
				texts.forEach((text, index) => {
					text.classList.remove('active');
				})
			} else if (textsLength < 500 && window.outerWidth <= 564) {
				showBtn.classList.remove('hidden');
				texts.forEach((text, index) => {
					if (index > 0) {
						text.classList.add('active');
					}
				})
			}

			showBtn.addEventListener('click', (e) => {
				e.preventDefault();
				showBtn.classList.toggle('active');

				texts.forEach((text, index) => {

					if (showBtn.classList.contains('active')) {
						showBtn.children[0].innerHTML = 'Скрыть текст';
						text.classList.remove('active');
					} else {
						showBtn.children[0].innerHTML = 'Подробнее';
						if (index > 0) {
							text.classList.add('active');
						}
					}
				})

			})
		})
	}


	const productAboutButtons = document.querySelectorAll('.product__about-button');

	if (productAboutButtons.length) {
		productAboutButtons.forEach((btn, index) => {
			const text = btn.parentNode.parentNode.children[1].children;

			btn.addEventListener('click', () => {
				btn.classList.add('active');
				const otherButton = productAboutButtons[(index + 1) % productAboutButtons.length];
				otherButton.classList.remove('active');

				if (index === 0) {
					text[0].classList.remove('hidden');
					text[1].classList.add('hidden');
				} else {
					text[1].classList.remove('hidden');
					text[0].classList.add('hidden');
				}
			})

		})
	}

	const productGallery = document.querySelector('#productGallery');

	const productAboutMobile = document.querySelectorAll('.product__about-mobile-row');

	if (productGallery && productAboutMobile.length) {
		productAboutMobile.forEach((btn) => {
			const textBlock = btn.children[1];
			const textInner = btn.children[1].children[0];
			btn.addEventListener('click', () => {
				btn.classList.toggle('active');

				if (btn.classList.contains('active')) {
					textBlock.style.maxHeight = `${textInner.clientHeight}px`;
				} else {
					textBlock.style.maxHeight = 0;
				}

			})
		})
	}

	const productDisclaimer = document.querySelector('.product__info-price-discount span');
	const productDisclaimerNote = document.querySelector('.product__info-price-discount-note');
	const productDisclaimerClose = document.querySelector('.product__info-price-discount-note-close');

	if (productDisclaimer) {
		if (window.innerWidth <= 1200) {
			// Обработчик для клика
			productDisclaimer.addEventListener('click', () => {
				toggleDisclaimer();
			});
		} else {
			// Обработчик для наведения
			productDisclaimer.addEventListener('mouseenter', () => {
				toggleDisclaimer(true);
			});

			// Обработчик для ухода с элемента
			productDisclaimer.addEventListener('mouseleave', () => {
				toggleDisclaimer(false);
			});
		}

		document.addEventListener('click', (event) => {
			const isClickInsideDisclaimer = productDisclaimer.contains(event.target);

			if (!isClickInsideDisclaimer) {
				closeDisclaimer();
			}
		});

		productDisclaimerClose.addEventListener('click', () => {
			closeDisclaimer();
		});
	}

	function toggleDisclaimer(showNote) {
		productDisclaimer.classList.toggle('active');

		if (productDisclaimer.classList.contains('active')) {
			productDisclaimerNote.classList.add('active');
			if (window.innerWidth <= 564) {
				document.documentElement.style.overflowY = "hidden";
			}
		} else {
			if (!showNote) {
				productDisclaimerNote.classList.remove('active');
				document.documentElement.style.overflowY = "auto";
			}
		}
	}

	function closeDisclaimer() {
		productDisclaimer.classList.remove('active');
		productDisclaimerNote.classList.remove('active');
		document.documentElement.style.overflowY = "auto";
	}

	lightGallery((productGallery), {
		plugins: [lgZoom, lgThumbnail],
		licenseKey: 'your_license_key',
		speed: 300,
	});

})
