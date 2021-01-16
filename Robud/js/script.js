    document.addEventListener('DOMContentLoaded', () => {
        const nav = document.querySelector('.header__nav'),
            burgerBtn = document.querySelector('.header__burger'),
            burgerLines = document.querySelectorAll('.line'),
            navItems = document.querySelectorAll('.header__nav-item'),
            mainBtns = document.querySelectorAll('.main__btn')

        burgerBtn.addEventListener('click', () => {
            nav.classList.toggle('header__nav_active');
            burgerLines.forEach((item, index) => {
                item.classList.toggle(`toggle-line-${index+1}`);
            })
        });

        function scrollToSection(target) {
            let targetElement = document.querySelector(target);
            let targetYOffset = targetElement.offsetTop;
            window.scroll({
                top: targetYOffset,
                left: 0,
                behavior: 'smooth'
            });
        }
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                scrollToSection(item.getAttribute('data-scroll'));
            });
        });
        mainBtns.forEach(item => {
            item.addEventListener('click', () => {
                scrollToSection(item.getAttribute('data-scroll'));
            });
        });
    });