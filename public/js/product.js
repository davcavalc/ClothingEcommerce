const productImages = document.querySelectorAll('.product-images img');
const productImageSlide = document.querySelector('.image-slider');
let activeImageSlide = 0;
productImages.forEach((item, i) => {
	item.addEventListener('click', () => {
		productImages[activeImageSlide].classList.remove('active');
		item.classList.add('active');
		productImageSlide.style.backgroundImage = `url('${item.src}')`;
		activeImageSlide = i;
	});
});

//  toggle size buttons

const SIZE_BTN = document.querySelectorAll('.size-radio-btn');
let CHECKED_BTN = 0;

SIZE_BTN.forEach((item, i) => {
    item.addEventListener('click', () => {
        SIZE_BTN[CHECKED_BTN].classList.remove('check');
        item.classList.add('check');
        CHECKED_BTN = i;
    })
})