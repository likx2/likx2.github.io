// Menubar
const slide = () => {
    const btn = document.querySelector(".burger");
    const nav = document.querySelector("nav");
    btn.addEventListener('click', () => {
        nav.classList.toggle("nav__active");
        const burger = document.querySelectorAll(".line");
        burger.forEach((item, i) => {
            item.classList.toggle(`toggle__line-${i+1}`);
        })
    })
};
slide();
// Consult Popup
const header__btn = document.querySelector(".header__btn");
const consult__popup = document.querySelector(".consult__popup");
const popup__content = document.querySelector(".consult__popup__content");
header__btn.addEventListener("click", () => {
    showPopup(consult__popup);
});


const close__btn = document.querySelector(".close__btn");
close__btn.addEventListener("click", () => {
    hidePopup(consult__popup);
})
// Service Slider

$(document).ready(function () {
    $(".service__slider").slick({
        arrows: true,
        prevArrow: '<button class="prevArrow"></button>',
        nextArrow: '<button class="nextArrow"></button>'
    });
});


// Workers Slider
$(document).ready(function () {
    $(".workers__slider").slick({
        arrows: true,
        prevArrow: '<button class="prev-btn"></button>',
        nextArrow: '<button class="next-btn"></button>'
    });
});

// More Popup


const more_btns = document.querySelectorAll('.more');
const more_popups = document.querySelectorAll('.more-popup');
more_popups.forEach(item => {
    hidePopup(item);
});

more_btns.forEach((item, i) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        showPopup(more_popups[i]);
        document.querySelector('body').style.overflow = 'hidden';
        more_popups[i].style.overflow = 'scroll';
    });
});
more_popups.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target === item || event.target.classList.contains('close')) {
            hidePopup(item);
        }
    })
})




function showPopup(object) {
    object.style.display = "flex";

}

function hidePopup(object) {
    object.style.display = "none";

}