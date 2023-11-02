document.addEventListener('DOMContentLoaded', () => {
	const showBtns = document.querySelectorAll('.text__block-btn');

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
})
