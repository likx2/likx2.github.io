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
let films = document.querySelectorAll('.promo__interactive-item');
let movieList = document.querySelector('.promo__interactive-list');
let input = document.querySelector('.adding__input');
let checkbox = document.querySelector('input[type="checkbox"]');
const alarm = document.createElement('div');
const addForm = document.querySelector('form.add');
films.forEach(value => {
    value.remove();
});

function print(array, parent) {
    parent.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${array[i]}
            <div class="delete"></div>
        </li>
    `;
    }

    let bins = document.querySelectorAll('.delete');
    bins.forEach((value, i) => {
        value.addEventListener('click', () => {
            value.parentElement.remove();
            array.splice(i, 1);
            print(array, parent);
        })
    });
}

print(movieDB.movies, movieList);
addForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let newFilm = input.value.toUpperCase();
    if (newFilm !== '') {
        alarm.innerHTML = '';
        input.style.cssText = '';
        movieDB.movies.push(newFilm);
        movieDB.movies.sort();
        print(movieDB.movies, movieList);
        if (checkbox.checked) {
            console.log("Добавляем любимый фильм");
        }
    } else {
        input.style.cssText = 'border-color: #EA2027;box-shadow: 0 0 5px #EA2027;';
        alarm.innerHTML = '* Обязательное поле';
        alarm.style.cssText = 'margin-top: 10px;font-size: 10px;color: #EA2027;'
        input.after(alarm);
    }

})