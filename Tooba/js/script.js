document.addEventListener('DOMContentLoaded', () => {
    // Lang Dropdown
    const currentLang = $('.header__inner-lang-current'),
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
    })
    // Slider
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
    // var feedbackSlider = tns({
    //     container: '.feedback__slider__track',
    //     items: 3,
    //     gutter: 20,
    //     slideBy: 3,
    //     nextButton: '.feedback__slider-next-btn',
    //     prevButton: '.feedback__slider-prev-btn',
    //     autoplay: false
    // });
});