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
    // $(document).ready(function () {

    // });
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

    // Booking Popup
    const moreInfoViewBtns = $('.more-info-popup__view-btn'),
        bookingPopups = $('.booking-popup');

    moreInfoViewBtns.each((index, item) => {
        $(item).on('click', () => {
            $(bookingPopups[index]).fadeIn();
            $(bookingPopups[index]).find('.booking-popup__slider-track').slick({
                responsive: [{
                        breakpoint: 3000,
                        settings: 'unslick'
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            infinite: false,
                            arrows: false,
                            dots: true,
                            dotsClass: 'booking-popup__page_mobile'
                        }
                    }
                ]
            });
        });
    });



    // Amount
    let bookingSliderCounter = 0;
    const amount = $('.amount'),
        amountNums = $('.amount__number');

    let amountCounter = new Array(amount.length);

    amount.each((index, item) => {
        amountCounter[index] = 0;
        amountNums.text(amountCounter[index]);
        $(item).on('click', (event) => {
            if ($(event.target).hasClass('amount-btn_minus')) {
                if (amountCounter[index] <= 0) {
                    amountCounter[index] = 0;
                    return;
                }
                amountCounter[index]--;
                $(amountNums[index]).text(amountCounter[index]);

            } else if ($(event.target).hasClass('amount-btn_plus')) {
                if (amountCounter[index] >= 5) return;
                amountCounter[index]++;
                $(amountNums[index]).text(amountCounter[index]);

            }
        });
    });
    // More Info Popup
    const tourCardBtns = $('.tour-card__btn'),
        moreInfoPopups = $('.more-info-popup');

    tourCardBtns.each((index, item) => {
        $(item).on('click', () => {
            $(moreInfoPopups[index]).fadeIn();
        });
    });
    moreInfoPopups.each((index, item) => {
        $(item).on('click', (event) => {
            if ($(event.target).hasClass("more-info-popup__close-btn") || event.target === event.currentTarget) {
                $(moreInfoPopups[index]).fadeOut();
                reset(index);
            }
        });
    });
    // Closing Popups
    bookingPopups.each((index, item) => {
        $(item).on('click', (event) => {
            if ($(event.target).hasClass('booking-popup__back')) {
                $(bookingPopups[index]).fadeOut();
                reset(index);


            } else if ($(event.target).hasClass("booking-popup__close-btn") || event.target === event.currentTarget) {
                $(bookingPopups[index]).fadeOut();
                $(moreInfoPopups[index]).hide();
                reset(index);


            }
        });
    });

    // // Bokking Popup Slider
    const currentSlides = $('.booking-popup__current-item'),
        bookingSliderTracks = $('.booking-popup__slider-track'),
        bookingCards = $('.booking-popup__card'),
        bookingPrevBtns = $('.booking-popup__prev-btn'),
        bookingNextBtns = $('.booking-popup__next-btn');
    currentSlides.each((index, item) => {
        $(item).width(`${100*bookingPopups.length/bookingCards.length}%`);
    });
    let width = 100;
    bookingNextBtns.each((index, item) => {
        $(item).on('click', () => {
            if (bookingSliderCounter >= bookingCards.length / bookingPopups.length - 1) return;
            bookingSliderCounter++;
            moveSlide(bookingSliderCounter, index);
        })


    });
    bookingPrevBtns.each((index, item) => {
        $(item).on('click', () => {
            if (bookingSliderCounter <= 0) return;
            bookingSliderCounter--;
            moveSlide(bookingSliderCounter, index);
        })


    });

    function moveSlide(counter, i) {
        $(bookingSliderTracks[i]).css('transform', `translateX(${-counter*width}%)`);
        $(currentSlides[i]).css('transform', `translateX(${counter*width}%)`);
    }

    function reset(i) {
        bookingSliderCounter = 0;
        moveSlide(bookingSliderCounter, i);
        amountCounter = amountCounter.map(item => 0);
        amountNums.text('0');
    }





});