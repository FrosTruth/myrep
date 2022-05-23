let numberOfFilms;

function stsrt() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', '');
        let b = prompt('На сколько оцените его?', '');
    
        if(a.length < 50 && a != '' && b !='' && b.length < 50 && a != null && b != null) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

function detectPersonalLevel(){
    (personalMovieDB.count < 10) ? console.log("мало фильмов") : (personalMovieDB.count > 30) ? console.log("киноман") : console.log("дефолт");
}


function showMyDB() {
    if(personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`, ''));
    }
}
writeYourGenres();
showMyDB();