const nav = document.querySelector('.header__nav'),
    burgerBtn = document.querySelector('.header__burger'),
    burgerLines = document.querySelectorAll('.line');


burgerBtn.addEventListener('click', () => {
    nav.classList.toggle('header__nav_active');
    burgerLines.forEach((item, index) => {
        item.classList.toggle(`toggle-line-${index+1}`);
    })
});