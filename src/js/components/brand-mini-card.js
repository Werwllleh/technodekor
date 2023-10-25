document.addEventListener('DOMContentLoaded', () => {

	const words = ['товар', 'товара', 'товаров'];
	const counts = document.querySelectorAll('.brand-mini-card__count p');

	counts.forEach((count) => {

		const value = Math.abs(Number(count.innerHTML)) % 100;
		const num = value % 10;

		if (value > 10 && value < 20) {
			count.innerHTML = count.innerHTML + " " + words[2];
		} else if (num > 1 && num < 5) {
			count.innerHTML = count.innerHTML + " " + words[1];
		} else if (num === 1) {
			count.innerHTML = count.innerHTML + " " + words[0];
		} else {
			count.innerHTML = count.innerHTML + " " + words[2];
		}


	})

})
