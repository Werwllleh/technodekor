document.addEventListener('DOMContentLoaded', () => {
	const switchButtons = document.querySelectorAll('.switch-buttons__button');
	const catalogs = document.querySelectorAll('.catalog--grid');

	switchButtons.forEach((switchButton, index) => {

		window.addEventListener('resize', function(e){
			let windowWidth = e.currentTarget.innerWidth;

			if (windowWidth <= 1200) {
				switchButtons[0].classList.add('active')
				switchButtons[1].classList.remove('active')
				catalogs.forEach((catalog) => {
					if (catalog.classList.contains('row--view')) {
						catalog.classList.remove('row--view');
						catalog.classList.add('default--view');
					}
				})
			}

		});

		switchButton.addEventListener('click', (e) => {
			if (e.target.getAttribute('data-view') === 'default--view') {
				e.target.classList.add('active');
				const otherButton = switchButtons[(index + 1) % switchButtons.length];
				otherButton.classList.remove('active');
				catalogs.forEach((catalog) => {
					if (catalog.classList.contains('row--view')) {
						catalog.classList.remove('row--view');
						catalog.classList.add('default--view');
					}
				})
			}
			if (e.target.getAttribute('data-view') === 'row--view') {
				e.target.classList.add('active');
				const otherButton = switchButtons[(index + 1) % switchButtons.length];
				otherButton.classList.remove('active');
				catalogs.forEach((catalog) => {
					if (catalog.classList.contains('default--view')) {
						catalog.classList.remove('default--view');
						catalog.classList.add('row--view');
					}
				})
			}
		})
	})
})
