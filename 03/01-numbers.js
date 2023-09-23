// const num = 42 // int
// const float = 42.42 // float
// const pow = 10e3 // 
// const big = 1_000_000

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Math.pow(2, 53) - 1)
// console.log(Number.MAX_VALUE)
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.isFinite(Infinity))
// console.log(23/ undefined)

// const weird = 23 / undefined
// console.log(Number.isNaN(weird))

// const strInt = '42'
// const strFloat = '42.42'

// console.log(Number(strInt))
// console.log(Number(strFloat))
// console.log(Number.parseInt(strFloat))
// console.log(Number.parseFloat(strFloat))
// console.log(+strInt, +strFloat)

//console.log(+(0.1 + 0.2).toFixed(10))

/* BigInt
*/

// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 99856565n )
// console.log(typeof -42n)
// //console.log(42.42n) // error

// console.log(parseInt(10n) - 4)
// console.log(5n / 2n) // = 2

// console.log(Math.E)
// console.log(Math.PI)

// const myNum = 4.9

// console.log(Math.sqrt(25))
// console.log(Math.pow(2 , 5))
// console.log(Math.max(2 , 6, 99))
// console.log(Math.floor(myNum))
// console.log(Math.ceil(myNum))
// console.log(Math.round(myNum))
// console.log(Math.trunc(myNum)) // возвращает только целую часть

function getRandomNumber(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const num1 = getRandomNumber(10 , 100)
console.log(num1)
