document.addEventListener('DOMContentLoaded', () => {
    // Gallery Slider
    $('.gallery__inner').slick({
        infinite: true,
        arrows: false,
        rows: 2,
        slidesPerRow: 4,
        slidesToShow: 1,
        slidesToScroll: 1,


        responsive: [{
                breakpoint: 1200,
                settings: {
                    rows: 4,
                    slidesPerRow: 2,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    rows: 4,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Service Card Slider
    $('.choose-option__inner').slick({
        responsive: [{
                breakpoint: 3000,
                settings: "unslick"

            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }

            }
        ]
    });
    // Option Card Swiper
    const chooseTourSliderTrack = document.querySelector('.choose-tour__inner');
    const tourCards = document.querySelectorAll('.tour-card');

    $('.choose-tour__inner').slick({
        responsive: [{
                breakpoint: 3000,
                settings: 'unslick'
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: false,
                    arrows: false,
                }
            }


        ]
    });
    // swiper(chooseTourSliderTrack, tourCards.length);
    // More Info Popup
    const tourCardBtns = document.querySelectorAll('.tour-card__btn');
    const moreInfoPopups = document.querySelectorAll('.more-info-popup');

    tourCardBtns.forEach((item, i) => {
        item.addEventListener('click', (event) => {
            $(moreInfoPopups[i]).fadeIn();
        });
    });

    moreInfoPopups.forEach(item => {
        item.style.display = 'none';
        item.addEventListener('click', (event) => {
            if (event.target.classList.contains('more-info-popup__close-btn') || event.target === event.currentTarget) {
                $(moreInfoPopups).fadeOut();
            }
        });
    });

    // Booking Popup
    const moreInfoViewBtns = document.querySelectorAll('.more-info-popup__view-btn');
    const bookingPopups = document.querySelectorAll('.booking-popup');


    moreInfoViewBtns.forEach((item, index) => {
        item.addEventListener('click', (event) => {
            moreInfoPopups[index].style.display = 'none';
            $(bookingPopups[index]).fadeIn();
        });
    });
    let bookingSliderCounter = 0;
    bookingPopups.forEach(item => {
        item.style.display = 'none';
        item.addEventListener('click', (event) => {
            if (event.target.classList.contains('booking-popup__close-btn') || event.target === event.currentTarget) {
                bookingSliderCounter = 0;
                $(item).fadeOut();
            }
        });
    });
    // Bokking Popup Slider
    const bookingSliderTracks = document.querySelectorAll('.booking-popup__slider-track'),
        bookingPrevBtns = document.querySelectorAll('.booking-popup__prev-btn'),
        bookingNextBtns = document.querySelectorAll('.booking-popup__next-btn'),
        bookingCards = document.querySelectorAll('.booking-popup__card'),
        currentSlides = document.querySelectorAll('.booking-popup__current-item');
    currentSlides.forEach(item => {
        item.style.width = `${100*bookingPopups.length/bookingCards.length}%`;
    })
    let width = 100;

    bookingNextBtns.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (bookingSliderCounter >= bookingCards.length / bookingPopups.length - 1) return;
            bookingSliderCounter++;
            bookingSliderTracks[index].style.transform = `translateX(${-bookingSliderCounter*width}%)`;
            currentSlides[index].style.transform = `translateX(${bookingSliderCounter*width}%)`;
        });
    });
    bookingPrevBtns.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (bookingSliderCounter <= 0) return;
            bookingSliderCounter--;
            bookingSliderTracks[index].style.transform = `translateX(${-bookingSliderCounter*width}%)`;
            currentSlides[index].style.transform = `translateX(${bookingSliderCounter*width}%)`;
        });
    });
    // Booking Popup Swiper
    $('.booking-popup__slider-track').slick({
        responsive: [{
                breakpoint: 3000,
                settings: 'unslick'
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: false,
                    arrows: false,
                }
            }


        ]
    });
    // bookingSliderTracks.forEach((item, index) => {
    //     swiper(item, bookingCards.length / bookingPopups.length);
    // })

    // function swiper(track, itemsLength) {
    //     let counter = 0,
    //         startX, endX;

    //     track.addEventListener('touchstart', (event) => {
    //         console.log(event);
    //         startX = event.targetTouches[0].clientX;
    //     });
    //     track.addEventListener('touchmove', (event) => {
    //         endX = event.targetTouches[0].clientX;
    //     })
    //     track.addEventListener('touchend', (event) => {
    //         let differ = endX - startX;
    //         console.log(differ);
    //         if (differ > 50) counter--;
    //         else if (differ < -50) counter++;
    //         if (counter > itemsLength - 1 || counter < 0) return;
    //         track.style.transform = `translateX(${-counter*100}%)`;
    //     });
    // }
});