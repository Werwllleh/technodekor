document.addEventListener('DOMContentLoaded', () => {
	let view1 = 'default--view';
	let view2 = 'row--view';
	const switchButtons = document.querySelectorAll('.switch-buttons__button');
	const catalogs = document.querySelectorAll('.catalog--grid');

	switchButtons.forEach((switchButton, index) => {
		switchButton.addEventListener('click', () => {
			if (switchButton.classList.contains('active')) {
				switchButton.classList.remove('active');
				// Если кнопка была активной, делаем другую активной
				const otherButton = switchButtons[(index + 1) % switchButtons.length];
				otherButton.classList.add('active');
			} else {
				switchButton.classList.add('active');
				// Если кнопка была неактивной, делаем другую неактивной
				const otherButton = switchButtons[(index + 1) % switchButtons.length];
				otherButton.classList.remove('active');
			}
			catalogs.forEach((catalog) => {
				const catalogCards = catalog.children;

				const switchCatalogCardsView = (view) => {
					for (let i = 0; i < catalogCards.length; i++) {
						if (view === view1) {
							catalogCards[i].classList.add('card-column--view');
							catalogCards[i].classList.remove('card-row--view');
						} else {
							catalogCards[i].classList.remove('card-column--view');
							catalogCards[i].classList.add('card-row--view');
						}
					}
				}


				if (catalog.classList.contains(view1)) {
					catalog.classList.remove(view1)
					catalog.classList.add(view2)
					switchCatalogCardsView(view2)
				} else {
					catalog.classList.add(view1)
					catalog.classList.remove(view2)
					switchCatalogCardsView(view1)
				}

			})

		})
	})
})
