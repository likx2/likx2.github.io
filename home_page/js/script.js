document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
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

    // More Info Popup
    const tourCardBtns = $('.tour-card__btn'),
        moreInfoPopups = $('.more-info-popup');

    tourCardBtns.each((index, item) => {
        $(item).on('click', () => {
            $(moreInfoPopups[index]).fadeIn();
            body.style.overflow = 'hidden';
        });
    });
    moreInfoPopups.each((index, item) => {
        closePopup(item);
    });
    // Booking Popup
    const moreInfoViewBtns = $('.more-info-popup__view-btn'),
        bookingPopups = $('.booking-popup'),
        bookingCards = $('.booking-popup .popup-card'),
        bookingCurrentSlides = $('.booking-popup__current-item');

    let bookingSliderCounter = 0;

    bookingCurrentSlides.each((index, item) => {
        $(item).width(`${100*bookingPopups.length/bookingCards.length}%`);
    })

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
    let width = 100;
    bookingPopups.each((index, item) => {
        mySlider(item, bookingSliderCounter, bookingCards.length, bookingPopups.length, bookingCurrentSlides[index]);
        closePopup(item);
    });

    // Mask on the phone
    $(".booking-data__phone").mask('8(00)0-0');
    $(".gift-data__phone").mask('8(00)0-0');

    // Booking Data Popup
    const bookingDataPopupBtns = $('.booking-popup__btn'),
        bookingDataPopups = $('.booking-data'),
        bookingDataForms = $('.booking-data__form');

    bookingDataPopupBtns.each((index, item) => {
        $(item).on('click', () => {
            $(bookingDataPopups[index]).fadeIn();
        });
    });

    bookingDataPopups.each((index, item) => {
        closePopup(item);
    });

    // Date and Time Picker
    $('.booking-data__date-btn').flatpickr({
        enableTime: true,
        dateFormat: "d-m-Y H:i",
    });

    // Gift Popup
    const moreInfoBuyGiftBtns = $('.more-info-popup__buy-gift-btn'),
        giftPopups = $('.gift-popup'),
        giftCards = $('.gift-popup .popup-card'),
        giftCurrentSlides = $('.gift-popup__current-item');

    let giftSliderCounter = 0;

    giftCurrentSlides.each((index, item) => {
        $(item).width(`${100*giftPopups.length/giftCards.length}%`);
    });

    moreInfoBuyGiftBtns.each((index, item) => {
        $(item).on('click', () => {
            $(giftPopups[index]).fadeIn();
            $(giftPopups[index]).find('.slider-track').slick({
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
                            dotsClass: 'gift-popup__page_mobile'
                        }
                    }
                ]
            });
        });
    });
    giftPopups.each((index, item) => {
        mySlider(item, giftSliderCounter, giftCards.length, giftPopups.length, giftCurrentSlides[index]);
        closePopup(item);
    });




    // Amount
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

    const giftData = $('.gift-data'),
        giftPopupBtns = $('.gift-popup__btn');

    giftPopupBtns.each((index, item) => {
        $(item).on('click', () => {
            $(giftData[index]).fadeIn();
        });
    });


    giftData.each((index, item) => {
        closePopup(item);
    });


    $('.gift-data__postcard').magnificPopup({
        type: 'image'
    });


    function closePopup(popup) {
        $(popup).on('click', (event) => {
            if (event.target && $(event.target).hasClass('close-btn')) {
                reset();
            } else if (event.target && $(event.target).hasClass('back-btn')) {
                $(popup).fadeOut();
            }
        })
    }
    // Booking Thanks

    const bookingThanks = $('.booking-thanks'),
        bookingThanksCards = $('.booking-thanks .thanks-card'),
        bookingThanksCurrentSlides = $('.booking-thanks__current-item');

    let bookingThanksSliderCounter = 0;

    bookingThanksCurrentSlides.each((index, item) => {
        $(item).width(`${100*bookingThanks.length/bookingThanksCards.length}%`);
    })
    bookingThanks.each((index, item) => {
        mySlider(item, bookingThanksSliderCounter, bookingThanksCards.length, bookingThanks.length, bookingThanksCurrentSlides[index]);
        closePopup(item);
    });


    // Gift Thanks

    const giftThanks = $('.gift-thanks'),
        giftThanksCards = $('.gift-thanks .thanks-card'),
        giftThanksCurrentSlides = $('.gift-thanks__current-item');

    let giftThanksSliderCounter = 0;

    giftThanksCurrentSlides.each((index, item) => {
        $(item).width(`${100*giftThanks.length/giftThanksCards.length}%`);
    })

    giftThanks.each((index, item) => {
        mySlider(item, giftThanksSliderCounter, giftThanksCards.length, giftThanks.length, giftThanksCurrentSlides[index]);
        closePopup(item);
    });












    function mySlider(popup, counter, cardsLength, popupsLength, currentSlide) {
        let sliderTrack = $(popup).find('.slider-track');
        $(popup).on('click', (event) => {
            if (event.target && $(event.target).hasClass('next-btn')) {
                if (counter >= cardsLength / popupsLength - 1) return;
                counter++;
                moveSlide(sliderTrack[0], counter, currentSlide);

            } else if (event.target && $(event.target).hasClass('prev-btn')) {
                if (counter <= 0) return;
                counter--;
                moveSlide(sliderTrack[0], counter, currentSlide);
            }
        })

    }

    function moveSlide(track, counter, currentSlides) {
        $(track).css('transform', `translateX(${-counter*width}%)`);
        $(currentSlides).css('transform', `translateX(${counter*width}%)`);
    }

    function reset() {
        bookingSliderCounter = 0;
        giftSliderCounter = 0;
        bookingThanksSliderCounter = 0;
        giftThanksSliderCounter = 0;
        moveSlide($('.slider-track'), 0, $('.current-item'));
        amountCounter = amountCounter.map(item => 0);
        amountNums.text('0');
        bookingPopups.fadeOut();
        moreInfoPopups.fadeOut();
        bookingDataPopups.fadeOut();
        giftPopups.fadeOut();
        giftData.fadeOut();
        bookingThanks.fadeOut();
        giftThanks.fadeOut();
        body.style.overflow = '';
    }
});