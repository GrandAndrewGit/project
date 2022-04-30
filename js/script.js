// console.log('Hi there')

// const obj = {
//     name: 'Andrew',
//     age: 37,
//     isHere: true,
// }

// console.log(obj.name + '   ' + obj.age)

// alert('Hello');

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Один из последних промотренных фильмов', '');
const aRang = +prompt('Дайте ему оценку', '');

const b = prompt('Один из последних промотренных фильмов', '');
const bRang = +prompt('Дайте ему оценку', '');

personalMovieDB.movies[a] = aRang;
personalMovieDB.movies[b] = bRang;

console.log(personalMovieDB)