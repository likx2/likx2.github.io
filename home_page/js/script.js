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
    // Option Card
    const chooseTourSliderTrack = document.querySelector('.choose-tour__inner');
    const tourCards = document.querySelectorAll('.tour-card');
    // let chooseTourSliderCounter = 0,
    //     chooseTourStartX, chooseTourEndX;

    // chooseTourSliderTrack.addEventListener('touchstart', (event) => {
    //     chooseTourStartX = event.touches[0].clientX;
    // });
    // chooseTourSliderTrack.addEventListener('touchmove', (event) => {
    //     chooseTourEndX = event.touches[0].clientX;
    // })
    // chooseTourSliderTrack.addEventListener('touchend', (event) => {
    //     let chooseTourDiffer = chooseTourEndX - chooseTourStartX;
    //     if (chooseTourDiffer > 50) chooseTourSliderCounter--;
    //     else if (chooseTourDiffer < -50) chooseTourSliderCounter++;
    //     if (chooseTourSliderCounter > tourCards.length - 1 || chooseTourSliderCounter < 0) return;
    //     chooseTourSliderTrack.style.transform = `translateX(${-chooseTourSliderCounter*100}%)`;
    // });
    swiper(chooseTourSliderTrack, tourCards.length);
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
    // Booking Popup Slider
    // let bookingSliderStartX,
    //     bookingSliderEndX;
    // bookingSliderTracks.forEach((item, index) => {
    //     item.addEventListener('touchstart', (event) => {
    //         bookingSliderStartX = event.touches[0].clientX;
    //     });
    //     item.addEventListener('touchmove', (event) => {
    //         bookingSliderEndX = event.touches[0].clientX;

    //     });
    //     item.addEventListener('touchend', (event) => {
    //         let bokkingSliderDiffer = bookingSliderEndX - bookingSliderStartX;
    //         if (bokkingSliderDiffer > 50) bookingSliderCounter--;
    //         else if (bokkingSliderDiffer < -50) bookingSliderCounter++;
    //         if (bookingSliderCounter > bookingCards.length - 1 || bookingSliderCounter < 0) return;
    //         bookingSliderTracks[index].style.transform = `translateX(${-bookingSliderCounter*100}%)`;
    //     });
    // });
    bookingSliderTracks.forEach((item, index) => {
        swiper(item, bookingCards.length / bookingPopups.length);
    })

    function swiper(track, itemsLength) {
        let counter = 0,
            startX, endX;

        track.addEventListener('touchstart', (event) => {
            startX = event.tragetTouches[0].clientX;
        });
        track.addEventListener('touchmove', (event) => {
            endX = event.tragetTouches[0].clientX;
        })
        track.addEventListener('touchend', (event) => {
            let differ = endX - startX;
            console.log(differ);
            if (differ > 50) counter--;
            else if (differ < -50) counter++;
            if (counter > itemsLength - 1 || counter < 0) return;
            track.style.transform = `translateX(${-counter*100}%)`;
        });
    }
});