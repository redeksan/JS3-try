// const car = {
//     model: 'Tesla',
//     year: 2023,
// }

// const json = JSON.stringify(car)
// console.log(json)
// const parsed = JSON.parse(json)
// console.log(car)

const list = document.querySelector('#list')
const filter = document.querySelector('#filter')
let USERS = []

filter.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase()
    const filteredUsers = USERS.filter((user) => 
        user.name.toLowerCase().includes(value)
    )

    render(filteredUsers)

})

async function start(){
    list.innerHTML = "Loading..."
    try {
       const resp = await fetch('https://jsonplaceholder.typicode.com/users')
       const data = await resp.json()
       console.log(data)
       setTimeout(() => {
        USERS = data
        render(data)
       }, 1000)
    } catch (err) {
        list.style.color = 'red'
        list.innerHTML = err.message
    }
}

function render(users = []){
    if (users.length === 0){
        list.innerHTML = 'no match'
    } else {
    const html = users.map(toHTML).join('')
    list.innerHTML = html
    }
}

function toHTML(user){
    return `
        <li class="list-group-item">${user.name}</li>
    `
}


start()


