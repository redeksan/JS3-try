// const now = new Date()

// const start = new Date(1000 * 60 * 60 * 24)

// const date = new Date(2011, 0 , 1, 12, 4, 1)

// console.log(now.toLocaleDateString())

//========

// const fullBtn = document.getElementById('full')
// const dateBtn = document.getElementById('date')
// const timeBtn = document.getElementById('time')
// const outputElement = document.getElementById('output')
// const currentTime = new Date()

// outputElement.innerHTML = currentTime.toLocaleDateString() + '  ' + currentTime.toLocaleTimeString()

// function refresh (){
//     interval = setInterval(function(){
//         if (outputElement.value === undefined){
//             outputElement.innerHTML = currentTime.toLocaleDateString() + '  ' + currentTime.toLocaleTimeString()
//             console.log('f')
//         } else {
        
//         outputElement.innerHTML = outputElement.value
//         console.log(outputElement.value)
//         }
//     }, 1000)

// }

// refresh()



// fullBtn.onclick = () => {
//         outputElement.value = currentTime.toLocaleDateString() + '  ' + currentTime.toLocaleTimeString()
//         refresh()
//         }
// dateBtn.onclick = () => { outputElement.value = currentTime.toLocaleDateString()
//         refresh ()
//         console.log(outputElement.value)
// }
// timeBtn.onclick = () => {outputElement.value = currentTime.toLocaleTimeString()
//         refresh()
// }
    
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')
const output = document.getElementById('output')
let mode = 'date'

function bindMode(name) {
    return function() {
        mode = name
        update() 
    }
}

fullBtn.onclick = bindMode('full')

dateBtn.onclick = bindMode('date')

timeBtn.onclick = bindMode('time')

// fullBtn.onclick = function(){
//     mode = 'full'
//     update()
// }

// dateBtn.onclick = function(){
//     mode = 'date'
//     update()
// }

// timeBtn.onclick = function(){
//     mode = 'time'
//     update()
// }

setInterval(update, 1000)
update ()

function format(formatMode) {
    const now = new Date()
    switch (formatMode) {
        case 'time' : 
            return now.toLocaleTimeString() 
        case 'date' :
            return now.toLocaleDateString()
        case 'full' : 
            return now.toLocaleTimeString() + '  ' + now.toLocaleDateString()
        default:
            return now.toLocaleTimeString()
    }
}

function update() {
    output.textContent = format(mode)
}