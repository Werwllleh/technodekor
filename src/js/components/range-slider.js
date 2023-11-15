document.addEventListener('DOMContentLoaded', () => {
	const rangeInput = document.querySelectorAll(".range-slider__rangeInput input");
	const priceInput = document.querySelectorAll(".range-slider__field input");
	const ranges = document.querySelectorAll(".range-slider__slider-progress");
	let priceGap = 1000;


	if (priceInput.length) {
		priceInput.forEach(input => {
			input.addEventListener("input", e => {
				ranges.forEach((range) => {

					let minPrice = parseInt(priceInput[0].value);
					let maxPrice = parseInt(priceInput[1].value);

					if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
						if (e.target.className === "range-slider__field-minInput") {
							rangeInput[0].value = minPrice;
							range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
						} else {
							rangeInput[1].value = maxPrice;
							range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
						}
					}
				});
			})
		});
	}

	if (rangeInput.length) {
		rangeInput.forEach(input => {
			input.addEventListener("input", e => {

				ranges.forEach((range) => {

					let minVal = parseInt(rangeInput[0].value);
					let maxVal = parseInt(rangeInput[1].value);

					if ((maxVal - minVal) < priceGap) {
						if (e.target.className === "range-slider__rangeInput-minRange") {
							rangeInput[0].value = maxVal - priceGap
						} else {
							rangeInput[1].value = minVal + priceGap;
						}
					} else {
						priceInput[0].value = minVal;
						priceInput[1].value = maxVal;
						range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
						range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
					}
				});
			})
		});
	}

})
