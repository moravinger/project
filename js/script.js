"use strict";
// // let number = 5;
// // const leftBorderWidth = 1;

// // number = 10;
// // console.log(number);

// // const obj = {
// //     name: 'Дима',
// //     age: '29',
// //     isMarried: false
// // };

// // console.log(obj.age);
// // // console.log(obj['name']); 

// // // alert('Hello');

// // // const result = confirm('Are you here?');
// // // console.log(result);

// // // const answer = +prompt('Вам есть 18?',''); //+ превращает строку в число 
// // // console.log(answer + 5);

// // const answers = [];

// // // answers[0] = prompt('Как ваше имя?', '');
// // // answers[1] = prompt('Как ваше фамилия?', '');
// // // answers[2] = prompt('Сколько вам лет?', '');

// // console.log(typeof(answers));

// // const category = 'toys';
// // console.log(`https://someurl.com/${category}/5`);

// // const user = 'Дима';
// // alert(`Привет, ${user}`);

// let incr = 10,
//     decr = 10;
// // ++incr; //инкримент добавляет +1
// // --decr; //дикримент отимает 1

// console.log(++incr);
// console.log(--decr);

//Первое домашнее задание (часть 1)

// const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', ''); //1 домашнее задание
// console.log(numberOfFilms);

//Первое домашнее задание (часть 2)
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     prvat: false
// };

// //Первое домашнее задание (часть 3)
// const a = prompt ('Один из последних просмотренных фильмов?', ''),
//     b = prompt ('На сколько оцените его?', ''),
//     c = prompt ('Один из последних просмотренных фильмов?', ''),
//     d = prompt ('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

if (4 == 4) {
    console.log('Ok!');
} else {
    console.log('Error');
}

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// //тернарный оператор ? уместили в одну строчку код из строк 80-86
// (num == 50) ? console.log('Ok!') : console.log('Error'); 

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('В точку!')
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }
// //со строками работает точно так же

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num <= 55);

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break; //прерывает цикл
        continue; // пропускает 6 и начинается с 7
    }
    console.log(i);
}