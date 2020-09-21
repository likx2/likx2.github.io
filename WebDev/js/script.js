document.addEventListener('DOMContentLoaded', () => {
    // Slider
    const sliderTrack = document.querySelector('.community__inner-right-slider-track'),
        sliderPage = document.querySelector('.community__inner-right-slider-page'),
        sliderItem = document.querySelector('.community__inner-right-slider-item'),
        currentItem = document.getElementById('current'),
        totalItems = document.getElementById('total');
    let itemsAmount = 5,
        slidesToShow,
        i = 0;
    // let tmpTotalWidth = sliderItem.offsetWidth + calcTotalAndCurrent();
    calcTotalAndCurrent()
    sliderPage.addEventListener('click', (event) => {
        let totalItemWidth = sliderItem.offsetWidth + calcTotalAndCurrent();
        // tmpTotalWidth = totalItemWidth;
        if (event.target && event.target.classList.contains('community__inner-right-slider-page-next')) {

            nextTransfer(totalItemWidth);
        } else if (event.target && event.target.classList.contains('community__inner-right-slider-page-prev')) {

            prevTransfer(totalItemWidth);
        }
        currentItem.innerText = `${i+1}`;
    });

    function transfer(width) {
        sliderTrack.style.transform = `translateX(${-i*width}px)`;
    }

    function nextTransfer(width) {
        if (i >= itemsAmount - slidesToShow) {
            return;
        } else {
            i++;
            transfer(width);
        }
    }

    function prevTransfer(width) {
        if (i <= 0) {
            return;
        } else {
            i--;
            transfer(width);
        }
    }

    function calcTotalAndCurrent() {
        let margin = +window.getComputedStyle(sliderItem).marginRight.replace(/\D/g, '');
        if (margin === 0) {
            slidesToShow = 1;
            totalItems.innerText = `${itemsAmount}`;
            return 0;
        } else {
            slidesToShow = 2;
            totalItems.innerText = `${itemsAmount-1}`;
            return margin;
        }
    }

    // Swiper
    let swiperStartX,
        swiperDiffer,
        totalMobileWidth;
    sliderTrack.addEventListener('touchstart', (event) => {
        totalMobileWidth = sliderItem.offsetWidth + calcTotalAndCurrent();
        swiperStartX = event.touches[0].pageX;
    });

    sliderTrack.addEventListener('touchmove', (event) => {
        swiperDiffer = event.touches[0].pageX - swiperStartX;
        console.log(swiperDiffer);
    });
    sliderTrack.addEventListener('touchend', () => {
        if (swiperDiffer < -100) {
            nextTransfer(totalMobileWidth);
            currentItem.innerText = `${i+1}`;
            console.log(totalMobileWidth);

        } else if (swiperDiffer > 100) {
            prevTransfer(totalMobileWidth);
            currentItem.innerText = `${i+1}`;

        } else if (swiperDiffer != 0) {
            sliderTrack.style.transform = `translateX(${-i*totalMobileWidth}px)`;
        }
        swiperDiffer = 0;
    });
});