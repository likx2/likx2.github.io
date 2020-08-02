// Features Slider
$(document).ready(function () {
    $('.features-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    prevArrow: ' <button class="prev"></button>',
                    nextArrow: ' <button class="next"></button>',

                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    prevArrow: ' <button class="prev"></button>',
                    nextArrow: ' <button class="next"></button>',
                    slidesToScroll: 1
                }
            }
        ]
    });
});
// Popup 
let btn = document.getElementById("popup-btn");
let popup = document.getElementById("popup");
let close = document.getElementById("popup-close");
btn.onclick = function () {
    popup.style.display = "block";
}
close.onclick = function () {
    popup.style.display = "none";
}
// Feedback Slider
$('.feedback-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: ' <button class="feedback-prev"><img src="images/feedback/prevArrow.svg" alt=""></button>',
    nextArrow: ' <button class="feedback-next"><img src="images/feedback/nextArrow.svg" alt=""></button>'
});