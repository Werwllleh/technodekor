document.addEventListener('DOMContentLoaded', () => {
	const attributs = document.querySelectorAll('.product-characteristics__item');

	attributs.forEach((attribut) => {
		attribut.addEventListener('click', () => {
			const attributsList = attribut.parentNode.children;
			attributsList.forEach((item) => {
				item.classList.remove('active')
				item.children[0].checked = false;
			})

			attribut.classList.add('active')
			attribut.children[0].checked = true;
		})
	})
})
