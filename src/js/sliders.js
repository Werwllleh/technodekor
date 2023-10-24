import {Swiper} from 'swiper'
import {Navigation, Pagination} from 'swiper/modules';

new Swiper('.swiper', {
	modules: [Navigation, Pagination],
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: false,

	// Navigation arrows
	navigation: false,

	// And if we need scrollbar
	scrollbar: false,
});
