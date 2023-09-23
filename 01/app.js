// let num = 42
// let firstName = 'Michal'
// const isProgrammer = true

//Can do
/*
let $ = 'test'
let $num = 42
let num$ = 42
let _ = 42
let _num = 12
let num_ = 12
let first_name = 'lena'
let myNum = 42
let num42 = 10
*/

// Restricted
/*
// let 42num = 11
// let my-nam = 12
// let const = 12
*/


//firstName = 'max'
// isProgrammer = false // error

//alert(firstName)
//console.log(firstName)

// console.log(num + 10)

// let num2 = num +10
// console.log(num2)

// const fullName = firstName + ' Bod'
// console.log(fullName)


const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')
let action = "+"

// console.log(typeof sum)

plusBtn.onclick = function(){
    action = '+'
}

minusBtn.onclick = function(){
    action = '-'
}

multiplyBtn.onclick = function(){
    action = '*'
}

divideBtn.onclick = function(){
    action = '/'
}

function printResult(result){
    console.log(result)
    if (result < 0){
        resultElement.style.color = 'red'
    }  else{
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1,inp2, actionSymbol){
    const num1 = inp1.value
    const num2 = inp2.value


    const result = actionSymbol == '+' ? num1 + num2 : actionSymbol == '-' ? num1 - num2 : actionSymbol == '*' ? num1 * num2 : num1 / num2
    return result
    
    // if (actionSymbol == '+'){
    //     return num1+num2
    // } else if (actionSymbol == '-'){
    //     return num1-num2
    // } else if (actionSymbol == '*'){
    //     return num1*num2
    // } else if (actionSymbol == '/'){
    //     return num1/num2
    // } 
    
    
}
submitBtn.onclick = function(){
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)
       
}


// Реализуйте функцию isPrimeNumber(), которая принимает число и возвращает true, если оно простое, иначе — false.

// Примечание. Простые числа — это числа, которые больше 1 и не имеют делителей, кроме 1 и самого себя.


// console.log(isPrimeNumber(-7))

// function isPrimeNumber(number){
//     if (number <= 1){
//         return false
//     }
//     for (let i = 2; i < number; i++){
//         if (number % i === 0 ) {
//            return false
//         } 
//     }
//     return true
// }

// Задание #2

// Напишите функцию func(), которая принимает num, min, max:

// Если число num < min, то функция возвращает min ** 2.
// Если число num > max, функция возвращает max ** 2.
// Если число num < max - (max - min) / 2, то функция возвращает num ** 2
// Иначе возвращает округленное вниз значение num.

// function func (num, min, max){
//     if (num < min){
//         return min ** 2
//     } else if (num > max){
//         return max ** 2
//     } else if (num < max - (max - min) / 2){
//         return num ** 2
//     } else  return Math.floor(num)   
// }

// console.log(func(19.2,3,20))

// Создайте функцию isPerfectNumber(), которая принимает целое положительное число в параметры и возвращает true, если число является совершенным, и false в противном случае.

// Примечание. Совершенное число — это число, равное сумме всех своих положительных делителей (за исключением самого числа). Например, число 6 является совершенным, потому что делители числа 6 (1, 2, 3) в сумме дают 6.

// function isPerfectNumber(number) {
//   // Ваш код здесь...
// }

// console.log(isPerfectNumber(6));   // true
// console.log(isPerfectNumber(28));  // true
// console.log(isPerfectNumber(12));  // false
// console.log(isPerfectNumber(16));  // false

// function isPerfectNumber(number) {
//     let count = 0
//     for (let i = 1; i < number; i++){
//         if (number % i === 0){
//             count+= i
//         }
//     }
//     return number === count ? true : false
//     }


// console.log(isPerfectNumber(6))


// Задание #4

// Напишите функцию getNumberDigit(), которая принимает число (number) и индекс цифры в числе (digitPosition). Возвращает она цифру числа number, находящуюся на позиции digitPosition. 

// Если происходит попытка чтения числа на позиции, которой не существует (например, кол-во цифр в числе меньше, чем передано в digitPosition), то верните undefined.

// Примечание. Нельзя использовать приведение числа к строке.

// function getNumberDigit(number, digitPosition) {
//   // Ваш код здесь...
// }

// getNumberDigit(123, 0) // 1
// getNumberDigit(123, 1) // 2
// getNumberDigit(123, 2) // 3
// getNumberDigit(1, 2) // undefined
// console.log('sd')

// console.log(getNumberDigit(123456 , 6))

// function getNumberDigit(number , digitPosition){
//     if (number / 10 ** (digitPosition - 1) < 1 || digitPosition <= 0){
//         return undefined
//     } else {    
//         while (number > 10 ** digitPosition){
//             number = number / 10
//             console.log(number)
//         }   
//          return Math.trunc(number) % 10
//     }
// }

// Дан объект машины. 

const car = {
  name: 'Hendai Solaris',
	type: 'sedan',
	maxSpeed: '320',
	color: 'red',
 }
// // Необходимо написать написать функцию, которая принимает объект машины и возвращает строку с HTML, заполненную значениями переданного объекта. 

//  <article>
//     <div>
//         <h2>Hendai Solaris</h2>
//         <span>sedan</span>
//     </div>
//     <div>
//         <span>Maximum speed:</span>
//         <span>320</span>
//     </div>
//     <div>
//         <span>Color:</span>
//         <span>red</span>
//     </div>
// </article> 

// function objToHTML(obj){
//     return `
//     <article>
//         <div>
//             <h2>${car.name}</h2>
//             <span>${car.type}</span>
//         </div>
//         <div>
//             <span>Maximum speed:</span>
//             <span>${car.maxSpeed}</span>
//         </div>
//         <div>
//             <span>Color:</span>
//             <span>${car.color}</span>
//         </div>
//     </article>`
// }
// console.log(objToHTML())


// Необходимо написать функцию countWords(), которая принимает предложение и подсчитывает количество слов в нем.

//  const sentence = " Hello,  how      are you?    ";
//  console.log(countWords(sentence)); // 4

// function countWords(sentance){
//     return sentance
//         .split(' ')
//         .filter((words) => words.trim() !== '' )
//         .length
// }
// countWords(sentence)


// Необходимо написать функцию generateGoogleString(), которая принимает число и возвращает сроку ”Google” с указанным количеством букв “o”. При этом минимальное количество букв “о” равно 2.

// console.log(generateGoogleString(4));
// // Goooogle

// console.log(generateGoogleString(0));
// // Google

// console.log(generateGoogleString(-2));
// // Google

// function generateGoogleString(oValue){
//     return 'G' + 'o'.repeat(oValue >= 2 ? oValue : 2) + 'gle'
// }


// Реализуйте функцию countVowels(), которая подсчитывает количество гласных букв (латинских и кириллических) в переданной строке. 

// const str = "Hello, Привет!";
// console.log(countVowels(str)); // 4

// function countVowels(str){
//     const result = str.match(/[eyuioajуеыаоэяию]/gi)
//     return result === null ? 0 : result.length 
// }

//Напишите функцию sumNumbers(), которая принимает произвольное количество чисел через запятую и возвращает их сумму.

// const result1 = sumNumbers(1, 2, 3, 4, 5);
// console.log(result1); // 15

// const result2 = sumNumbers(10, 20, 30);
// console.log(result2); // 60

// function sumNumbers(... numbers){
//     return numbers.reduce((a , c) => a += c)
// }

// Напишите функцию findMaxValue(), которая принимает массив чисел и находит максимальное значение. Если массив пустой, то возвращается значение undefined.

// const numbers1 = [1, 2, 3, 4, 5];
// const max1 = findMaxValue(numbers1);
// console.log(max1); // 5

// const numbers2 = [10, 20, 5, 30, 15];
// const max2 = findMaxValue(numbers2);
// console.log(max2); // 30

// const emptyArray = [];
// const maxEmpty = findMaxValue(emptyArray);
// console.log(maxEmpty); // undefined

// function findMaxValue(array){
//     return array.sort((a, b) => a - b)[0]
// }


// Напишите функцию calculateAverage(), которая принимает массив чисел и вычисляет их среднее арифметическое. Если массив пустой, то возвращается 0.

// const numbers1 = [1, 2, 3, 4, 5];
// console.log(calculateAverage(numbers1)); // 3

// const numbers2 = [10, 20, 30, 40, 50];
// console.log(calculateAverage(numbers2)); // 30

// const emptyArray = [];
// console.log(calculateAverage(emptyArray)); // 0

// function calculateAverage(array){
//     return array.length === 0 ? 0 : array.reduce((a ,c) => a + c) / array.length
// }

// Напишите функцию isPalindrome(), которая принимает строку и возвращает true, если она является палиндромом, иначе — false. 

// Примечание. Палиндром — строка, которая читается одинаково слева направо и справа налево. 

// console.log(isPalindrome('level')); // true
// console.log(isPalindrome('radar')); // true
// console.log(isPalindrome('hello')); // false

// function isPalindrome(word){
//     return word === word.split('').reverse().join('')
// }

// function reverseString(str) {
//     console.log(str)
//     return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
//   }
//   console.log(reverseString("hello"))

// Напишите функцию removeDuplicates(), которая принимает массив и возвращает новый массив без дубликатов. 

// const numbers1 = [1, 2, 3, 3, 4, 5, 5];
// console.log(removeDuplicates(numbers1));  // [1, 2, 3, 4, 5]

// const numbers2 = [10, 20, 30, 30, 40, 40, 50];
// console.log(removeDuplicates(numbers2));  // [10, 20, 30, 40, 50]

// const emptyArray = [];
// console.log(removeDuplicates(emptyArray));  // []

// function removeDuplicates(array) {
//     return array.filter((v, i , a) => {return i === a.indexOf(v)
//     })
// }

// Задание #6

// Создайте функцию createCounter(), которая принимает начальное значение и возвращает три функции:

// inc() — увеличивает значение на 1;
// dec() — уменьшает значение на 1;
// get() — возвращает текущее значение.
// Пример использования функции:

// function createCounter(value) {
// 	const inc = () => value++
// 	const dec = () => value--
// 	const get = () => value
//     return {inc , get, dec}
// }

// const { inc, dec, get } = createCounter(5);

// console.log(get()); // 5
// inc();
// inc();
// inc();
// dec();
// console.log(get()); // 7


//Напишите функцию sumNumbers(), которая принимает произвольное количество чисел через запятую и возвращает их сумму.

// const result1 = sumNumbers(1, 2, 3, 4, 5);
// console.log(result1); // 15

// const result2 = sumNumbers(10, 20, 30);
// console.log(result2); // 60

// Задание #1

// Создайте класс Circle, который имеет поле radius, а также метод getArea(), высчитывающий площадь круга и округляющий её до двух знаков после запятой. 

// Сделайте так, чтобы код ниже работал:

// class Circle {
//     constructor(radius){
//         this.radius = radius
//     }
//     getArea(){
//         return (this.radius ** 2 * Math.PI).toFixed(2) 
//     }
// }
// const circle = new Circle(5);
// console.log(circle.getArea()); // "78.54"

// Реализуйте класс Product, который имеет поля name и price. Также он имеет метод priceWithDiscount(), который возвращает обновленную цену с учетом переданной скидки (в процентах). Метод не изменяет само значение price в объекте, а только выводит обновленное.  

// Сделайте так, чтобы код ниже работал:

// class Product{
//     constructor(name, price){
//         this.name = name
//         this.price = price
//     }
//     priceWithDiscount(discount){
//         return this.price * (100 - discount) / 100
//     }

// }


// const product = new Product("Phone", 1000);
// console.log(product.priceWithDiscount(10)); // 900
// console.log(product.priceWithDiscount(20)); // 800

// console.log('a');
// new Promise((resolve, reject) => {
// 	console.log('b');
// 	setTimeout(() => {
// 		console.log('c');
// 		resolve();
// 	}, 0);
// })
//   .then(() => console.log('d'));

// console.log('e');
// setTimeout(() => console.log('f'), 0);
// console.log('g');

// Реализуйте класс Person, который имеет поле friends (изначально пустой массив). Также он имеет методы:

// addFriend() — принимает имя нового друга и добавляет его в массив friends;
// showFriends() — выводит в консоль строку со всеми друзьями через запятую.
// Сделайте так, чтобы код ниже работал:


// 
// const person = new Person();
// person.addFriend("Иван");
// person.addFriend("Сергей");
// person.addFriend("Игорь");
// person.showFriends(); // Иван, Сергей, Игорь

// class Person {
//     friends = []
//     addFriend(friend){
//         this.friends.push(friend)
//     }
//     showFriends(){
//         console.log(this.friends)
//     }
// }

// 1. Создайте класс Animal с полями name, favoriteFood, а также методами:

// makeSound() — вывести звук животного в консоль;
// sayName() — вывести имя животного в консоль;
// sayInfo() — вывести любимое блюдо животного в консоль.
// 2. Создайте еще 2 класса, которые будут наследоваться от класса Animal — Cat, Dog. Переопределите для них метод makeSound(), чтобы он всегда возвращал соответствующий звук животного. 

// 3. Сделайте так, чтобы код ниже работал:


// class Animal {
//     constructor(name , favoriteFood){
//         this.name = name
//         this.favoriteFood = favoriteFood
//     }
//     makeSound(){
//         console.log('animal')
//     }
//     sayName(){
//         console.log('My name is ' + this.name)
//     }
//     sayInfo(){
//         console.log(this.name +'s favorite food is ' + this.favoriteFood)
//     }
// }

// class Cat extends Animal{
//     makeSound(){
//         console.log('Meow')
//     }
// }

// class Dog extends Animal {
//     makeSound(){
//         console.log('Gav!')
//     }
// }

// const dog = new Dog('Rex', 'Meat');
// const cat = new Cat('Barsik', 'Fish');

// cat.makeSound(); // Meow
// dog.makeSound(); // Gav!

// dog.sayName(); // My name is Rex
// cat.sayName(); // My name is Barsik

// dog.sayInfo(); // Rex's favorite food is Meat
// cat.sayInfo(); // Barsik's favorite food is Fish


// Создайте объект foo со свойством a равным 5. Также добавьте ему два метода:

// bar() — с помощью ключевого слова function;
// baz() — с помощью стрелочной функции.
// Внутри методов выведите в консоль this.a и затем выполните следующий код:

// foo.bar();
// foo.baz();
// Проанализируйте результаты вызовов и определите для себя, почему произошел тот или иной вывод. 

// const foo = {
//     a : 5,
//     bar: function(){console.log(this.a)},
//     baz: () => {console.log(this.a)},
//   }

//   foo.bar()
//   foo.baz()


//   Задание #6

// Дан следующий фрагмент кода:

// const boxFactory = {
// 	type: 'box',
// 	count: 0,
// 	produce: () => {
// 		boxFactory.count++;
// 		return 'Box №' + boxFactory.count;
// 	}
// }

// const produceBox = (produceFn) => {
// 	const boxName = produceFn();
// 	console.log(boxName);
// }

// for(let i = 0; i < 25; i++) {
// 	produceBox(boxFactory.produce);
// }
// Отредактируйте код так, чтобы при его работе выводились корректные номера коробок. Функцию produceBox() править нельзя.

// Задание #2

// Напишите код, который получает список задач по URL https://jsonplaceholder.typicode.com/todos и выводит их в виде списка (<ul>) на страницу. 

// Примечание. Сетевые запросы можно выполнять с помощью функции fetch(), работающей на основе Promise API. 

// const list = document.querySelector('#list')

// async function start(){
//     try {
//         const input = await fetch('https://jsonplaceholder.typicode.com/todos')
//         const data = await input.json()
//         console.log(data)
//         render(data)
//     } catch (err) {
//         console.log('error')
//     }
// }
// start()

// function render(fullList){
//     const html = fullList.map(toHTML).join('')
//     list.innerHTML = html
// }

// function toHTML (listElement){
//     return`
//     <li>${listElement.title}</li>    `

// }


// Задание #3

// Напишите функцию sumWithDelay(), которая принимает delay, a, b и возвращает a + b через delay миллисекунд. Функция должна работать на основе Promise API. 

// function sumWithDelay(delay, a , b) {
//  return new Promise(resolve => {
//     setTimeout(() =>{
//     resolve(a+b)
//     }, delay)
//  })   
// }

// async function start() {
//   const result = await sumWithDelay(1000, 5, 5);
//   console.log(result);
// }

// start();

// sumWithDelay(1500, 1,3 )


// Задание #3

// Напишите функцию sumWithDelay(), которая принимает delay, a, b и возвращает a + b через delay миллисекунд. Функция должна работать на основе Promise API. 

// function sumWithDelay() {
//   // Ваш код здесь...
// }

// async function start() {
//   const result = await sumWithDelay(1000, 5, 5);
//   console.log(result);
// }

// start();


// Напишите функцию, имитирующую запрос к серверу за получением пользователя. Она принимает id и с задержкой 2500 миллисекунд возвращает пользователя из массива USERS с соответствующим id. В случае отсутствия пользователя сгенерировать обработать исключение.

const USERS = [
  { id: '001', name: "Алексей", age: 25 },
  { id: '002', name: "Иван", age: 28 },
  { id: '003', name: "Егор", age: 30 },
];

function fetchUser(id) {
  return new Promise((resolve , reject) => {
        setTimeout(() => {
            const data = USERS.find((v,i,a) => v.id === id)
            resolve(data)
        }, 2500)
  })
}

async function start() {
  // ...
  const result = await fetchUser('001');
  console.log(result); // { id: '001', name: "Алексей", age: 25 }
  // ...
}

start();