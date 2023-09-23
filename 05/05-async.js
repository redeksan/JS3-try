// Event loop

// const timeout = setTimeout(() =>{
//     console.log('after 2 sec')
// }, 2000)
// clearTimeout(timeout)

// setTimeout(() =>{
//     console.log('after 3 sec')
// }, 3000)

// let count = 0
// setInterval(() =>{
//     console.log('tick', ++count)
// },1000)

// function delay(callback, time = 1000){
//     setTimeout(callback,time)
// }

// delay(() => {
//     console.log('timeout')
// })

// promises

const delay = (time = 1000) =>{
    const promise = new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve([1 , 2, 3])
            //reject('Error in delay')
        }, time)
    })
    return promise    
}

// delay(2500)
//     .then((data) => {
//         console.log('timeout', data)
//         return data.map((x) => x ** 2)
//     })
//     .then((data) =>{
//          console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
//     .finally(() => console.log('Finnaly'))

const getData = () => new Promise(resolve => resolve([4 , 2, 3]))

async function asyncExample(){
    try {
        await delay(3000)
        const data = await getData()
        console.log(data)
    } catch (err){
        console.log(err)
    } finally {
        console.log('Finnaly')
    }
}
asyncExample()


