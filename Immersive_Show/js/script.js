window.addEventListener('DOMContentLoaded', () => {
    // Menubar
    const nav = document.querySelector('.nav');
    // const burger = document.querySelector('.burger');
    const menubar = document.querySelector('.menubar');
    const lines = document.querySelectorAll('.burger .line');
    menubar.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        lines[0].classList.toggle('active-line-1');
        lines[1].classList.toggle('active-line-2');
        lines[2].classList.toggle('active-line-3');
        addContent();
    })

    // Scroll
    $(".nav-link-1").click(function () {
        $('html,body').animate({
                scrollTop: $(".intro").offset().top
            },
            'slow');
    });
    $(".nav-link-2").click(function () {
        $('html,body').animate({
                scrollTop: $(".challenges").offset().top
            },
            'slow');
    });
    $(".nav-link-3").click(function () {
        $('html,body').animate({
                scrollTop: $(".what").offset().top
            },
            'slow');
    });
    $(".nav-link-4").click(function () {
        $('html,body').animate({
                scrollTop: $(".facts").offset().top
            },
            'slow');
    });
    $(".nav-link-5").click(function () {
        $('html,body').animate({
                scrollTop: $(".benefits").offset().top
            },
            'slow');
    });
    $(".nav-link-6").click(function () {
        $('html,body').animate({
                scrollTop: $(".concept").offset().top
            },
            'slow');
    });
    $(".nav-link-7").click(function () {
        $('html,body').animate({
                scrollTop: $(".stars").offset().top
            },
            'slow');
    });
    $(".nav-link-8").click(function () {
        $('html,body').animate({
                scrollTop: $(".tech").offset().top
            },
            'slow');
    });
    $(".nav-link-9").click(function () {
        $('html,body').animate({
                scrollTop: $("footer").offset().top
            },
            'slow');
    });
    let flag = false;
    // Scroll
    window.addEventListener('scroll', addContent);

    function addContent() {
        $.get('content.html', function (result) {
            $('body').append(result);
            window.removeEventListener('scroll', addContent);
        });
    }
});