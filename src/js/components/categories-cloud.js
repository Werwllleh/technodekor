document.addEventListener('DOMContentLoaded', () => {

	const showAllCategories = document.querySelectorAll('.categories-cloud__item-all');


	showAllCategories.forEach((btn) => {
		const list = btn.closest('.categories-cloud__items');

		btn.addEventListener('click', () => {
			btn.classList.toggle('active');

			if (btn.classList.contains('active')) {
				btn.children[0].innerHTML = 'Свернуть';
				for (let i = 0; i < list.children.length; i++) {
					if (list.children.item(i).classList.contains('hidden')) {
						list.children.item(i).classList.remove('hidden')
					}
				}
			} else {
				btn.children[0].innerHTML = 'Все категории';
				for (let i = 0; i < list.children.length; i++) {
					if (i >= 14 && i !== list.children.length - 1) {
						list.children.item(i).classList.add('hidden')
					}
				}
			}

		})
	})

})
