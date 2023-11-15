document.addEventListener('DOMContentLoaded', () => {

	const catsBtns = document.querySelectorAll('.categories__title');

	if (catsBtns.length) {
		catsBtns.forEach((catsBtn) => {
			catsBtn.addEventListener('click', () => {
				let catsList = catsBtn.parentNode.children[1];

				catsBtn.classList.toggle('opened')

				if (catsBtn.classList.contains("opened")) {
					catsList.style.maxHeight = `${catsList.children[0].clientHeight}px`;
				} else {
					catsList.style.maxHeight = "0px";
				}

			})
		})
	}

})
