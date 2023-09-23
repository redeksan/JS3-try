// Function Declaration
function greet(firstName){
    console.log('hello ' + firstName)
}
// Function Expression

const  greet2 = function (firstName) {
    console.log('hello ' + firstName)
}

// greet('123')
// greet('1234')

// console.log(typeof greet)

// setTimeout(function(){
//     greet('123')
// }, 1500)

// let counter = 0
// const interval = setInterval(function(){
//     if (counter === 5){
//         clearInterval(interval)
//     } else{
//         console.log(++counter)
//     }
// }, 1000)

// Arrow Function

function greet(firstName){
    console.log('hello ' + firstName)
}

const arrow = () => {console.log('hello ' + firstName)}

const arrow2 = (firstName) => console.log('hello ' + firstName)

function pow(num, exp){
    return Math.pow(num, exp)
}

const pow2 = (num, exp) => Math.pow(num, exp)

// ======== Default Parameters
const sum = (a = 3, b = a * 3) => a + b

// console.log(sum())

function sumAll(... numbers){
    // let res = 0
    // for (let num of numbers){
    //     res+= num
    // }
    // return res
    return numbers.reduce((acc, cur) =>(acc += cur), 0)
}
console.log(sumAll(1 ,2 ,3, 4, 5))

// Closures

function creatPerson(name){
    return function(lastname){
        console.log(name + ' ' + lastname)
    }
}

const addLastName = creatPerson('Ivan')
addLastName('IR')
addLastName('IRasd')