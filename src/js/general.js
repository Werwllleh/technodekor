import lightGallery from 'lightgallery';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'


document.addEventListener('DOMContentLoaded', () => {
    const showBtns = document.querySelectorAll('.text__block-btn');

    showBtns.forEach((showBtn) => {

        const texts = showBtn.parentNode.querySelectorAll('p');

        let textsLength = 0;

        texts.forEach((text) => {
            textsLength += text.innerHTML.length;
        })


        if (textsLength > 500 && window.outerWidth >= 564) {
            showBtn.classList.remove('hidden');
            texts.forEach((text, index) => {
                if (index > 0) {
                    text.classList.add('active');
                }
            })
        } else if (textsLength < 500 && window.outerWidth >= 564) {
            showBtn.classList.add('hidden');
            texts.forEach((text, index) => {
                text.classList.remove('active');
            })
        } else if (textsLength < 500 && window.outerWidth <= 564) {
            showBtn.classList.remove('hidden');
            texts.forEach((text, index) => {
                if (index > 0) {
                    text.classList.add('active');
                }
            })
        }

        showBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showBtn.classList.toggle('active');

            texts.forEach((text, index) => {

                if (showBtn.classList.contains('active')) {
                    showBtn.children[0].innerHTML = 'Скрыть текст';
                    text.classList.remove('active');
                } else {
                    showBtn.children[0].innerHTML = 'Подробнее';
                    if (index > 0) {
                        text.classList.add('active');
                    }
                }
            })

        })
    })

    const productAboutButtons = document.querySelectorAll('.product__about-button');

    productAboutButtons.forEach((btn, index) => {
        const text = btn.parentNode.parentNode.children[1].children;

        btn.addEventListener('click', () => {
            btn.classList.add('active');
            const otherButton = productAboutButtons[(index + 1) % productAboutButtons.length];
            otherButton.classList.remove('active');

            if (index === 0) {
                text[0].classList.remove('hidden');
                text[1].classList.add('hidden');
            } else {
                text[1].classList.remove('hidden');
                text[0].classList.add('hidden');
            }

            // console.log(btn.parentNode.parentNode.children[1].children)
        })

    })

    const productGallery = document.querySelector('#productGallery');

    const productAboutMobile = document.querySelectorAll('.product__about-mobile-row');

    productAboutMobile.forEach((btn) => {
        const textBlock = btn.children[1];
        const textInner = btn.children[1].children[0];
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');

            if (btn.classList.contains('active')) {
                textBlock.style.maxHeight = `${textInner.clientHeight}px`;
            } else {
                textBlock.style.maxHeight = 0;
            }

        })
    })

    const productDisclaimer = document.querySelector('.product__info-price-discount span');
    const productDisclaimerNote = document.querySelector('.product__info-price-discount-note');
    const productDisclaimerClose = document.querySelector('.product__info-price-discount-note-close');

    productDisclaimer.addEventListener('click', () => {
        productDisclaimer.classList.toggle('active');

        if (productDisclaimer.classList.contains('active')) {
            productDisclaimerNote.classList.add('active');
            if (window.outerWidth <= 564) {
                document.documentElement.style.overflowY = "hidden";
            }
        } else {
            productDisclaimerNote.classList.remove('active');
            document.documentElement.style.overflowY = "auto";
        }
    })

    productDisclaimerClose.addEventListener('click', () => {
        productDisclaimer.classList.remove('active');
        productDisclaimerNote.classList.remove('active');
        document.documentElement.style.overflowY = "auto";
    })

    lightGallery((productGallery), {
        plugins: [lgZoom, lgThumbnail],
        licenseKey: 'your_license_key',
        speed: 300,
    });

})
