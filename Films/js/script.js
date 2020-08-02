// /* Задания на урок:

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

// 5) Добавить нумерацию выведенных фильмов */

// 'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// 1
const promo__adv = document.getElementsByClassName("promo__adv")[0];
promo__adv.remove();
let promo__content = document.getElementsByClassName("promo__content")[0];
promo__content.style.width = "100%";
let header__search = document.getElementsByClassName("header__search")[0];
let promo__genre = document.getElementsByClassName("promo__genre")[0];
header__search.style.width = "251px";
// // 2
let genre = document.getElementsByClassName("promo__genre")[0];
genre.textContent = "ДРАМА";
// // 3
const promo__bg = document.getElementsByClassName("promo__bg")[0];
promo__bg.style.backgroundImage = "url('../img/bg.jpg')";
// // 4
const films = document.querySelectorAll(".promo__interactive-item");
for (let i = 0; i < films.length; i++) {
    films[i].innerHTML = (i + 1).toString() + ". " + movieDB.movies.sort()[i];
    films[i].insertAdjacentHTML("afterbegin", '<div class="delete"></div>');
}