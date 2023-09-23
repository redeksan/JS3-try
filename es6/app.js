// const a = {
//     a : 12
// }
// /// a[key] = value
// console.log(a)


// function combine(...multipleObjects) {
//     return  multipleObjects.reduce((finalObject, element) => 
//     (Object.keys(element).forEach(key =>finalObject[key] = (finalObject[key] || 0 ) + element[key]), finalObject), {})
// }
   
    // args.reduce((pre, val) => (Object.keys(val).forEach(v => pre[v] = (pre[v] || 0) + val[v]), pre), {});


// function combineObjects(...array) {
//     const newObj = {}
//     for (obj of array){
//         for (key in obj){
           
//              if ((Object.keys(newObj).includes(key))){
//                 newObj[key] += obj[key]
//              }
//              else{
//                 newObj[key] = obj[key]
//              }
//         }        
//    }
//    return newObj
// }
    // // }
    // const newObj = array.forEach((obj) => {
    //         console.log(Object.keys(obj).forEach())
    // })
       
    // console.log(newObj)
    // return // Your code here



//   Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// console.log(combine(objA, objB)) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.

// function hotSingles(array1, array2) {
//     const resultArray =[]
//     new Set([...array1,...array2]).forEach((element) => {array1.includes(element) & array2.includes(element) ? null : resultArray.push(element)})
//     set = new Set([...array1,...array2])
   
//     console.log(set,[...set])
//     return resultArray
//     // const set = new Set(arr1)
//     // const set2 = new Set(arr2)
//     // console.log(set , set2)
//     // const set3 = new Set([...arr1,...arr2])
//     // console.log(set3)
//     // set.forEach( element =>{
//     //     if (arr1.includes(element) & arr2.includes(element)){
//     //         console.log('catch')
//     //         set3.delete(element)
//     //     }

//     // })
//     // return Array.from(set3)
// }


//         console.log(hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]), [4,5])
//         console.log(hotSingles(["tartar", "blanket", "domino"], ["blanket"]),["tartar", "domino"])
//         console.log(hotSingles([77, "basketweave"], [78, 42, "basketweave"]), [77, 78, 42])
//         console.log(hotSingles([100, 45, "ciao"], [100, 2, 3, 45, 5]), ["ciao", 2, 3, 5])
//         console.log(hotSingles([10, 200, 30], [10, 20, 3, 4, 5, 200]), [30, 20, 3, 4, 5])

// function permutationAverage(n){
//     const a = n.toString().split('').map((element) => +element)
//     console.log(a)
//     let x = 1
//     let multy = 0 
//     for (let i = 0; i<a.length; i++){
//         x = x * (i+1)
//         multy +=  10 ** i
//     }
//     console.log(x, multy)
//     let sum = 0
    
//     for (let i = 0; i <a.length; i++){
//         let sum1 = a[i]*x*multy/a.length
//         sum +=sum1

//     }
//     result = sum / x
//     console.log(Math.ceil(result))
// }
// permutationAverage(76853)


// function permutationAverage2(n){

//     let multy = 0
//     let sum = 0
//     n.toString()
//     .split('')
//     .map((el,i) =>{ 
//         multy +=  10 ** i 
//         return +el 
//     })
//     .forEach((el, i,a)=>{
//         sum += el*multy/a.length
//     })
//     return Math.ceil(sum)
// }

// permutationAverage2(76853)

// function duplicateCount(text){
//     // const array = [...text.toLowerCase()]

    
//         [...new Set (
//             [...text.toLowerCase()]
//             // .sort()
//             .filter(( ele, index, array) => 
//             array.lastIndexOf(ele) !== index)
//         )].length

// }


// console.log((duplicateCount(""), 0))
// console.log((duplicateCount("aabcde"), 1))
// console.log((duplicateCount("aAbbcde"), 2))
// // console.log((duplicateCount("aabBcde"), 2,"should ignore case"))
//   console.log((duplicateCount("23Indivisibility12"), 2))
// //  console.log((duplicateCount("23Indivisibilities12"), 3, "characters may not be adjacent"))

// function sortArray(array) {
//         const oddNumb = array.filter(e => e % 2 !== 0).sort((a,b) => a - b)
//         console.log(oddNumb)
//         var indexOdd = 0
//         return  array.map(element => {
//             if (element % 2 === 0) return element
//             return oddNumb[indexOdd++]

//         })
   
// //     const a rray3 =[]
// //     const array2 = array.map(element => {
// //         if (element % 2 !== 0){
// //             array3.push(element)
// //             return 'ph'
// //         }
// //         return element
// //     })
// //     const array4 = array2.map(element=> {
// //         if (element === 'ph') {
// //             return 
// //         }
// //     } )
// //     console.log (array, array2, array3)
//   }

//   console.log((sortArray([5, 3, 2, 8, 11, 4]), [1, 3, 2, 8, 5, 4]))
//   console.log((sortArray([ 1, 3, 2, 8, 5, 4, 11 ]), [ 11, 5, 2, 8, 3, 4, 1 ]))
//   console.log((sortArray([]),[]))


// function moveZeros(array) {
    // array.forEach((e , i) => {
    //     console.log(e ,'  ', i)
    //     if (e === 0) {  
    //         array.push(0)
    //         array.splice(i,1) 
           
    //         console.log(e ,' + ', i)
    //     }
    //  e
    // });

    // const array2 = array.map((e,i) => {
    //     if (e === 0) return () => 'ph'
    //     return e
    // }).filter((e)=> e !== 'ph')

//     const array2 = []
//     array2 = array.forEach((e,i,arr) =>{
//         if (e === 0) {
//            // console.log(e , i)
//             arr[i] = 'ph'
//             arr.push(0)
//         }
//     }).filter((e) => e !== "ph")
//     console.log(array,array2)
//     return array

//     // const array2 = array.filter((e,i,arr) =>{
//     //     if (e === 0){
//     //         arr.push(2)
//     //         return false
//     //     }
//     //     return true
//     // })
//     // console.log(array ,array2)
//   }

// // const nullCOunt = array.reduce((acc,e,i,arr) => e === 0? acc : acc + 1, 0)
    
// // const array2 = array.filter((e) => e !== 0).fill(0,array.length-nullCOunt ,array.length)

// // console.log(array ,array2)
// //       }

// // console.log((moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]))


// function count(string) {
//     const obj = {};
//      [...string].forEach(e => !obj[e] ? obj[e] = 1 : obj[e] += 1)
//      return obj
//     // const array = [...string]
//     // console.log(array)
//     // const obj = {}
//     // for (el of array){
//     //     if (!Object.keys(obj).includes(el)) {
//     //         obj[el] = 1  
//     //         console.log(el)    
//     //     } else {
//     //         obj[el] += 1
//     //         console.log('mtc')
//     //     }
        
//     // }
//     // console.log(obj)
//     // return obj
//   }

// console.log(count('aabc'))
// // test('', {});
// // test('a', {'a': 1});
// // test('ab', {'a': 1, 'b': 1});
// // test('aba', {'a': 2, 'b': 1});
// // test('ABC', {'A': 1, 'B': 1, 'C': 1})


// function tribonacci(signature,n){
//     const a = signature
//     for (let i = 0; i < n; i++){
//         a.push(a[i]+a[i+1]+a[i+2])
//         // console.log(a.slice(0,n))   
//     }
//     return a.slice(0,n)
//   }

//   console.log(tribonacci( [1,1,1], 10), [1,1,1,3,5,9,17,31,57,105]   )
//   console.log(tribonacci( [0,0,1], 10), [0,0,1,1,2,4,7,13,24,44]     )
//   console.log(tribonacci( [0,1,1], 10), [0,1,1,2,4,7,13,24,44,81]    )
//   console.log(tribonacci( [1,0,0], 10), [1,0,0,1,1,2,4,7,13,24]      )
//   console.log(tribonacci( [0,0,0], 10), [0,0,0,0,0,0,0,0,0,0]        )
//   console.log(tribonacci( [1,2,3], 10), [1,2,3,6,11,20,37,68,125,230])
//   console.log(tribonacci( [3,2,1], 10), [3,2,1,6,9,16,31,56,103,190] )
//   console.log(tribonacci( [1,1,1],  1), [1])

// var maxSequence = function(arr){
//     let sum = 0
//     let sumtemp = 0
//     arr.forEach((e,i) => {
//         for (let j = i; j<arr.length; j++){
//                     sumtemp += arr[j]
//                     if (sumtemp > sum) sum =sumtemp
//         }
//         sumtemp = 0    
//     })
//     return sum
//     // const a = arr
//     // let sum = 0
//     // let sumtemp = 0
//     // for (let i = 0; i<a.length; i++){
//     //     for (let j = i; j<a.length; j++){
//     //         sumtemp += a[j]
//     //         console.log(sumtemp)
//     //         if (sumtemp > sum) sum =sumtemp
//     //     }
//     //     console.log(sum, ' x')
//     //     sumtemp = 0

//     // }
//      return sum
//   }

// //   console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6)

// var lastDigit = function(str1, str2){  

// //return ([...str1].pop() ** [...str1].pop()).toString().split('').pop()

// let num1 = +([...str1].pop())
// if (num1 === 0) num1 = 10
// console.log(num1, typeof num1)
// let num2 = +([...str2].pop())
// if (num2 === 0  & str2.length >1) num2 = 10
// console.log(num2, typeof num2)
// const num3 = num1 ** num2
// //console.log(num3, typeof num3)
// const array = [...num3.toString()]
// // console.log(array.pop())
// // for (let i = 1; i<=10;i++){
// //     console.log(18 ** i)
// // }

//     return +(array.pop()); // fix me
//   }

//   console.log(lastDigit("10","10000000000"))
// //   Test.assertEquals(lastDigit("4", "1"), 4);
// //   Test.assertEquals(lastDigit("4", "2"), 6);
// //   Test.assertEquals(lastDigit("9", "7"), 9);
// //   Test.assertEquals(lastDigit("10","10000000000"), 0);
// //   Test.assertEquals(lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"), 6);
// //   Test.assertEquals(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"), 7);
// // });4
// console.log(3 ** 36)

console.log(typeof [3 , 4])
console.log(typeof ([3 , 4] + ''), ([3 , 4] + ''))