// // const names = ['inav', 'anna','stas','ira',1,2,3,4,5]

// // console.log(names)

// // // names.push("kate")  //  add to the end
// // // names.unshift('kate') // add at the start, but very slow

// // //const firstName = names.shift() // take first
// // //const firstName = names.pop() // take last

// // // const firstName = names.reverse() // reverse mut
// // //const firstName = names.toReversed() // reverse into new

// // //const firstName = names.sort() // sort by first symbol hash?
// // //const firstName = names.toSorted() // sort by first symbol hash? into new

// // //const firstName = names.splice(2,1) // take elements for any point 
// // //const firstName = names.toSpliced(2,2)
// // //const firstName2 = names.splice(2,2)

// // const greatWoman = 'ira'
// // const index = names.indexOf(greatWoman)
// //names[index] = 'eee'
// //const firstName = names.with(index, 'eee') // замена жлемента по индексу без мут

// // firstName = names.map(function(name, index){
// //     if (index === 1){
// //         return 'arar'
// //     }
// //     return name
    
// // })

// ///firstName = names.includes('ira') // is element in massive?
// //firstName = names.indexOf('ira') !== -1

// const people = [
//     {name: 'ivan', budget: 4200 },
//     {name: 'ira', budget: 2200 },
//     {name: 'kate', budget: 6200 },
//     {name: 'igor', budget: 200 },
// ]

// // const findedPerson = people.find(function (person) {
   
// //         return person.budget === 62200
    
// // })

// // const findedPerson = people.find((p) => p.budget === 4200)

// // const findedPerson = people.findIndex(function (person){
// //     return person.budget === 6200
// // })

// // const filtered = people.filter(function(p){
// //     return p.budget > 3000
// // })

// // let sumBudget = 0
// // filtered.forEach(function(p){
// //     sumBudget += p.budget
// // })

// // const byBudget = (p) => p.budget > 3000
// // const pickBudget = (p) => p.budget

// // const sumBudget = people
// // .filter(byBudget)
// // .map(pickBudget)
// // .reduce((acc, p) => acc + p, 0)

// const string = "qweqwe, ffff eee"
// const reversed = string
//     .split('')
//     .toReversed()
//     .join('!')
//     .split('')
//     .filter((c) => c !== '!')
//     .join('')


// console.log(reversed)


// array = [1, 10, 15, -100, -23, 19, 15032]
// console.log(array , array.map((i) => i * 1.25))

// Создайте функцию, объявленную с помощью ключевого слова function, с именем sayHello(). Она принимает в параметры name и возвращает строку вида: "Hello, {name}!".

// Если функция была вызвана без указания name, то выведите строку "Hello, someone!".

// Закомментируйте функцию и напишите аналогичную, но в виде стрелочной функции.


// function sayHello(name){
//     return 'Hello, ' + (name === void 0 ? 'someone' : name) + '!'
// }
// const sayHello = (name) => name === undefined ? 'Hello, someone!' : 'Hello, ' + name + '!'
// console.log(sayHello())

// // const sayHello = (name) => {
// //     if (name === undefined) {
// //       return "Hello, someone!";
// //     } else {
// //       return `Hello, ${name}!`;
// //     }
// //   };


// // Напишите функцию calc(), которая принимает в параметры a и b, а также operation. В зависимости от переданной операции (+, -, /, *) возвращаем необходимый результат выражения с числами. 

// // function calc(a, b, operation) {
// //   // Ваш код здесь...
// // }

// // console.log(calc(1, 2, '+')); // 3
// // console.log(calc(1, 2, '-')); // -1
// // console.log(calc(2, 2, '*')); // 4
// // console.log(calc(4, 2, '/')); // 2

// function calc(a, b, operation) {
//     if (operation === '+'){
//         return a + b 
//     } else if (operation === '-'){
//         return a - b 
//     } else if (operation === '*'){
//         return a * b 
//     } else if (operation === '/'){
//         return a / b 
//     }  
// }
// console.log(calc(1, 2, '+')); // 3
// console.log(calc(1, 2, '-')); // -1
// console.log(calc(2, 2, '*')); // 4
// console.log(calc(4, 2, '/')); // 2

// Создайте переменную age, присвоив ей числовое значение.
// Создайте переменную category, присвоив ей с помощью тернарного оператора значение:
// "Взрослый" — если age больше или равно 18
// "Детский" — если age меньше 18
// Выведите переменные в консоль.


// const age = 12
// const category = age >=18 ? 'Взрослый' : 'Детский'
// console.log(category)

// Создайте переменные a и b с числовыми значениями.
// Создайте переменную c, в которую с помощью тернарного оператора присвоите наибольшее значение (или a, или b).
// Выведите значение c в консоль.

// const a = 5
// const b = 12
// const c = a > b ? a : b
// console.log(c)

// Задание #1

// Создайте 2 объекта john и ann с полями name, age, pet и заполните их именем, возрастом и именем питомца соответственно.

// Создайте функцию, которая в параметры принимает объект человека (john или ann), и в качестве результата выводит информацию о нем в консоль:

// “Меня зовут {name}, мне {age}, у меня есть питомец {pet}”

// Создайте функцию incrementAge(), которая в параметры принимает объект человека и увеличивает ему возраст на 1.

// Выведите циклом все названия свойств и их значения, которые есть у объекта john.

// john = {
//     name: 'John',
//     age: 30,
//     pet: 'Pet1'
// }
// ann = {
//     name: 'Anna',
//     age: 23,
//     pet: 'Pet2'
// }

// const infoConsole = (p) => console.log('Меня зовут ' + p.name + ', мне ' + p.age +', у меня есть питомец ' + p.pet)
// const incrementAge = (p) => p.age++

// for (const key in john) {
//     console.log(key + ': ' + john[key])
//   }

//   Создайте функцию, которая на вход принимает массив, а на выходе возвращает сумму его элементов:

// function sum(array) {
//   // Ваш код здесь...
// }



// const arraySum = a.reduce((acc, el) => acc + el, 0)
// function sum(array) {
//     return array.reduce((acc, el) => acc + el, 0)
// }

// const arr = [1, 50, 20, 75, 90];

// console.log(sum(arr)); // 236


// Создайте пустой массив names.
// Добавьте в него 5 любых имен.
// Выведите массив в консоль.
// Уберите из начала и конца массива по 1 элементу.
// Снова выведите массив в консоль.

// const names = []
// names.push('Sasha' , 'Anna' , 'Masha' , 'Ira' , 'Pasha')
// console.log(names)
// names.shift(2)
// names.pop()
// console.log(names)

// Дан массив names. Необходимо сделать функцию, которая на основе этого массива генерирует строку c HTML. Она представляет из себя список элементов (<ul>), где каждый элемент списка (<li>) содержит элемент массива.

// const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];

// function textToHtml (names){
//     let htmlCode =''
//     for (const name of names){
//         htmlCode += '\t' + `<li>${name}</li>`+ '\n'
//     }
//     return `<ul>`+ '\n' + htmlCode + `</ul>`
// }

// Дан объект:

// const obj = {
// 	age: 22,
// 	favColor: 'red',
// 	height: 188,
// 	pet: 'dog',
// 	money: 12300
// };

// // Необходимо выполнить деструктуризацию объекта (для всех полей). Выведите полученные переменные в консоль. 

// const {age , favColor, height, pet, money} = obj;
// console.log(age, favColor, height, pet, money)


// Даны объекты:

const obj = {
	age: 22,
	favColor: 'red',
	height: 188,
	pet: 'dog',
	money: 12300
};

const updateObj = {
	age: 23,
	favColor: 'blue',
	money: 11450
};

const obj2 = {
    ...obj,
    ...updateObj
}
console.log(obj2);
/**
 * {
 *	age: 23,
 *	favColor: 'blue',
 *	height: 188,
 *	pet: 'dog',
 *	money: 11450
 * }
 */
// Необходимо создать новый объект obj2, в котором будут все поля объекта obj, но с обновленными значениями полей как у объекта updateObj. 