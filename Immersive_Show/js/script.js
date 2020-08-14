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
})