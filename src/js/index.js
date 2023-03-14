"use sctrict"

window.onload = () => {
	new Swiper('.image-slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
			dynamicBullets: true
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},
		mousewheel: {
			sensitivity: 1
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: true
		},
		grabCursor: true,
		loop: true,
		autoHeight: true,
	});
}