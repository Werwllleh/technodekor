import {Swiper} from 'swiper'
import {Navigation, Pagination, Scrollbar} from 'swiper/modules';

new Swiper('.popular__slider', {
	modules: [Navigation, Pagination, Scrollbar],
	// slidesPerView: 5,
	// Optional parameters
	direction: 'horizontal',
	loop: false,

	// If we need pagination
	pagination: {
		enabled: false
	},
	// Navigation arrows
	navigation: {
		enabled:false
	},
	// And if we need scrollbar
	scrollbar: {
		enabled:false,
		hide: true
	},
	breakpoints: {
		320: {
			slidesPerView: 1.05,
			spaceBetween: 8,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
		1600: {
			slidesPerView: 5,
			spaceBetween: 24,
		},
	},
});

new Swiper('.stocks__slider', {
	modules: [Navigation, Pagination, Scrollbar],
	slidesPerView: 4,
	// Optional parameters
	direction: 'horizontal',
	loop: false,
	// If we need pagination
	pagination: {
		enabled: false
	},
	// Navigation arrows
	navigation: {
		enabled:false
	},
	// And if we need scrollbar
	scrollbar: {
		enabled:false,
		hide: true
	},
	breakpoints: {
		320: {
			slidesPerView: 1.05,
			spaceBetween: 8,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
		1600: {
			slidesPerView: 4,
			spaceBetween: 24,
		},
	},
});

new Swiper('.main-page__banner-slider', {
	modules: [Navigation, Pagination, Scrollbar],
	slidesPerView: 1,
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// And if we need scrollbar
	scrollbar: {
		enabled:false,
		hide: true
	},
});

new Swiper('.products__slider', {
	modules: [Navigation, Pagination, Scrollbar],
	// slidesPerView: 4,
	// spaceBetween: 40,
	// Optional parameters
	direction: 'horizontal',
	loop: false,
	// If we need pagination
	pagination: {
		enabled:false,
	},
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// And if we need scrollbar
	scrollbar: {
		enabled:false,
		hide: true
	},
	breakpoints: {
		320: {
			slidesPerView: 1.2,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1025: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1600: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
	},
});

// document.addEventListener('DOMContentLoaded', () => {
// 	const mainBanner = document.querySelector('.swiper-container');
//
// 	swiperContainer.addEventListener('mouseenter', function () {
// 		swiperContainer.classList.add('darken'); // Добавляем класс при наведении
// 	});
//
// 	swiperContainer.addEventListener('mouseleave', function () {
// 		swiperContainer.classList.remove('darken'); // Удаляем класс при снятии наведения
// 	});
// })
