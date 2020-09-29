document.addEventListener('DOMContentLoaded', () => {
    // Lang Dropdown
    const currentLang = document.querySelector('.header__inner-lang-current'),
        langList = $('.header__inner-lang-dropdown');
    $(currentLang).on('click', () => {
        $(langList).slideToggle(300);
    });

    // Navbar
    const burger = document.querySelector('.burger'),
        navbar = document.querySelector('.header__inner-nav'),
        closeBtn = navbar.querySelector('.close');
    burger.addEventListener('click', () => {
        navbar.classList.toggle('navbar-active');
    });
    closeBtn.addEventListener('click', () => {
        navbar.classList.toggle('navbar-active');
    });

    // ScrollTo
    const navLinks = document.querySelectorAll('.header__inner-nav li');
    navLinks.forEach(item => {
        item.addEventListener('click', () => {
            let section = item.getAttribute('data-scrollto-section');
            $('html,body').animate({
                scrollTop: $(section).offset().top
            }, 'slow');
        });
    });
    // Hero Page Slider
    const slider = document.querySelector('.main__slider'),
        sliderTrack = slider.querySelector('.main__slider-track'),
        slides = slider.querySelectorAll('.main__slider-item');
    let i = 1;
    let flag = false;
    sliderTrack.style.transform = `translateX(${-i*100}%)`;

    slider.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('main__slider-next-btn')) {
            $('.progress-bar').stop();
            $('.progress-bar').css('width', '0%');
            animation(i);
            if (i >= (slides.length - 1)) return;
            i++;
            sliderTrack.style.transform = `translateX(${-i*100}%)`;


        } else if (event.target && event.target.classList.contains('main__slider-prev-btn')) {
            $('.progress-bar').stop();
            $('.progress-bar').css('width', '0%');
            animation(i);
            if (i <= 0) return;
            i--;
            sliderTrack.style.transform = `translateX(${-i*100}%)`;
        }
        sliderTrack.style.transition = 'transform 0.5s';
    });

    sliderTrack.addEventListener('transitionend', (event) => {
        if (i === slides.length - 1) {
            sliderTrack.style.transition = '';
            i = 1;
            sliderTrack.style.transform = `translateX(${-i*100}%)`;

        } else if (i === 0) {
            sliderTrack.style.transition = '';
            i = slides.length - 2;
            sliderTrack.style.transform = `translateX(${-i*100}%)`;
        }
    });


    // Slider Progress bar

    animation();

    function animation() {
        sliderTrack.style.transition = 'transform 0.5s';
        $('.progress-bar').animate({
            width: '100%'
        }, 5000, () => {
            i++;
            sliderTrack.style.transform = `translateX(${-i*100}%)`;
            $('.progress-bar').css('width', '0%');
            animation(i);
        })

    }

    // Tabs
    const tabListItems = document.querySelectorAll('.team-tab-list-item'),
        tabsBtns = document.querySelectorAll('.team-tabs-item'),
        teamTabs = document.querySelector('.team-tabs');
    hideTabs();
    showTabs(0);
    tabsBtns[0].classList.add('team-tabs-active');
    teamTabs.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('team-tabs-item')) {
            hideTabs();
            tabsBtns.forEach((item, i) => {
                if (item === event.target) {
                    showTabs(i);
                    event.target.classList.add('team-tabs-active');
                } else {
                    item.classList.remove('team-tabs-active');
                }
            });
        }
    });


    function hideTabs() {
        tabListItems.forEach(item => {
            item.style.display = 'none';
        });
    }

    function showTabs(index) {
        $(tabListItems[index]).fadeIn();

    }

    // Team Mobile Swiper
    let teamStartX,
        teamDiffer,
        teamCounter,
        j = 0;
    teamTabs.addEventListener('touchstart', (event) => {
        teamStartX = event.touches[0].pageX;
    });

    teamTabs.addEventListener('touchmove', (event) => {
        teamDiffer = event.touches[0].pageX - teamStartX;
        teamCounter = -j * 100 + (teamDiffer / 2);
        if (teamCounter >= 0 || teamCounter <= -200) {
            return;
        } else {
            teamTabs.style.transform = `translateX(${teamCounter}%)`;
        }
    });
    teamTabs.addEventListener('touchend', () => {
        if (teamDiffer < -150) {
            if (j >= 2) return;

            j++;
            teamTabs.style.transform = `translateX(${-j*100}%)`;
            teamDiffer = 0;

        } else if (teamDiffer > 150) {
            if (j <= 0) return;
            j--;
            teamTabs.style.transform = `translateX(${-j*100}%)`;
            teamDiffer = 0;

        } else if (teamDiffer != 0) {
            teamTabs.style.transform = `translateX(${-j*100}%)`;
        }
    });

    // Team View all 

    const viewBtns = document.querySelectorAll('.team-tab-list-item-more');

    viewBtns.forEach((item, i) => {
        item.addEventListener('click', () => {
            tabListItems[i].classList.add('more-active');
            item.style.display = 'none';
        })
    })

    // Map
    let mapStartX, mapDiffer, mapCounter;
    const map = document.querySelector('.map-img');
    map.style.transform = 'translateX(-30%)';
    map.addEventListener('touchstart', (event) => {
        mapStartX = event.touches[0].pageX;
    });
    map.addEventListener('touchmove', (event) => {
        mapDiffer = event.touches[0].pageX - mapStartX;
        mapCounter = -30 + (mapDiffer / 5);
        if (mapCounter <= -70 || mapCounter >= 0) {
            return;
        } else {
            map.style.transform = `translateX(${mapCounter}%)`;

        }
    });






    // Feedback Slider
    $('.feedback__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [{
                breakpoint: 1020,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ],
        prevArrow: '<img src="images/feedback/prevArrow.svg" alt="" class="feedback__slider-prev-btn">',
        nextArrow: '<img src="images/feedback/nextArrow.svg" alt="" class="feedback__slider-next-btn">'
    });



    // FAQ Accordeon

    const accParagraphes = document.querySelectorAll('.faq-acc-item p');
    const accArrows = document.querySelectorAll('.faq-acc-item-arrow');

    accArrows.forEach((item, i) => {
        item.addEventListener('click', () => {
            $(accParagraphes[i]).slideToggle(300);
            item.classList.toggle('arrow-active');
        });
    });

    // Articles Slider
    $('.articles__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [{
                breakpoint: 1020,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ],
        prevArrow: '<img src="images/feedback/prevArrow.svg" alt="" class="articles__slider-prev-btn">',
        nextArrow: '<img src="images/feedback/nextArrow.svg" alt="" class="articles__slider-next-btn">'
    });
});