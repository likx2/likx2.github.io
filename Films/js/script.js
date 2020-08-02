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


// New Task
const films = document.querySelectorAll(".promo__interactive-item");
const btn = document.querySelector("button");
let input = document.querySelector(".adding__input");
const promo__list = document.querySelector(".promo__interactive-list");
films.forEach(value => {
    value.remove();
})


// Flag to delete
let flag = false;

// Add Element
function addElement(array, target, className_1, addingTag) {
    let list = new Array(array.length);

    for (let i = 0; i < array.length; i++) {
        list[i] = document.createElement("li");
        if (array.sort()[i].length > 21) {
            array.sort()[i] = array.sort()[i].slice(0, array.sort()[i].length / 2) + "...";
        }
        list[i].innerHTML = (i + 1).toString() + ". " + array.sort()[i];
        list[i].classList.add(className_1);
        target.append(list[i]);
        list[i].insertAdjacentHTML("afterbegin", addingTag);
    }
}
addElement(movieDB.movies, promo__list, "promo__interactive-item", '<div class="delete"></div>');


btn.addEventListener("click", (event) => {
    event.preventDefault();
    if (input.value !== "") {
        input.style.cssText = '';
        movieDB.movies.push(input.value);
        const newFilms = document.querySelectorAll(".promo__interactive-item");
        newFilms.forEach(value => {
            value.remove();
        })
        addElement(movieDB.movies, promo__list, "promo__interactive-item", '<div class="delete"></div>');
    } else {
        input.style.cssText = 'border-color: #d63031;box-shadow: 0 0 5px #d63031;';
    }

})

const bin = document.querySelectorAll('.delete');


// Deleting alement from the doc
bin.forEach(value => {
    value.addEventListener("click", () => {
        value.parentElement.remove();
        flag = true;
    });
})