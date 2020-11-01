let namberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(namberOfFilms);

let personalMovieDB = {
    count: namberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat:false,
}

let firstScqea = prompt ("Один из последних просмотренных фильмов?");
let secondScqea = prompt ("На сколько оцениваете его?");
let freeScqea = prompt ("Один из последних просмотренных фильмов?");
let lastScqea = prompt ("На сколько оцениваете его?");



