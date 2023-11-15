document.addEventListener('DOMContentLoaded', () => {
	const filterCategories = document.querySelectorAll('.filter__category-header');

	if (filterCategories.length) {
		filterCategories.forEach((filterCategory) => {
			const filterCategoryList = filterCategory.nextElementSibling;

			filterCategory.addEventListener('click', () => {
				filterCategory.classList.toggle('opened');

				if (filterCategory.classList.contains('opened')) {
					filterCategoryList.classList.add('show');

					let filterCategoryListHeight = 0;

					for (let i = 0; i < filterCategoryList.children.length; i++) {
						filterCategoryListHeight += filterCategoryList.children[i].clientHeight;
					}

					filterCategoryList.style.maxHeight = `${filterCategoryListHeight}px`;
				} else {
					filterCategoryList.classList.remove('show');
					filterCategoryList.style.maxHeight = "0px";
				}
			})
		})
	}

})
