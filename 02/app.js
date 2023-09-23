/* // THeory

//  const array = [1, 2, 3, 5, 20, 42, 111]
// //const array = new Array[4, 6, 7, 8, 11, 42]

// console.log(array.length)
// console.log(array[1])
// // console.log(array[array.length]) 
// console.log(array[array.length - 1])
// array[0] = 'hi'
// console.log(array)
// array[array.length] = 123
// console.log(array)
*/

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// console.log(inputElement.vlaue)

//const notes = [' NOTE 1', 'NOTE 2']

// function render()  {
//     // for (let i = 0; i < notes.lenth; i++){
//     //     listElement.insertAdjacentHTML('beforeend',  getNoteTemplate(notes[i]))
//     // }
//     for (let note of notes){
//         listElement.insertAdjacentHTML('beforeend',  getNoteTemplate(note))
//     }
// }

// render()

// createBtn.onclick = function (){
//     if (inputElement.value.length === 0 ){
//         return
//     }
//    // listElement.innerHTML = 

//     listElement.insertAdjacentHTML(
//         'beforeend',  getNoteTemplate(inputElement.value)
//     )
//     inputElement.value = ''
// }

// function getNoteTemplate(title){
//     return  `
//             <li
//             class="list-group-item d-flex justify-content-between align-items-center"
//             >
//             <span>${title}</span>
//             <span>
//             <span class="btn btn-small btn-success">&check;</span>
//             <span class="btn btn-small btn-danger">&times;</span>
//             </span>
//             </li>
//         `
// }

/**   Object theory
 * 
 * 
 * 
 *  


const person = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    year: 1993,
    hasGF: false,
    languages: ['ru' , 'en'],
    getFullName: function() {
        console.log(person.firstName)
    },
}

console.log(person.year)
console.log(person['lastName'])
const key = 'hasGF'
console.log(person[key])
person.hasGF = true
console.log(person[key])
 */

const notes = [
    {
        title: 'NOTE1',
        completed: false,
    },
    {
        title: 'NOTE2',
        completed: true,
    }
]

//console.log(notes)
function render()  {
    listElement.innerHTML = ''
    if (notes.length === 0){
        listElement.innerHTML = "<p>Empty</p>"
    }
     for (let i = 0; i < notes.length; i++){
        listElement.insertAdjacentHTML('beforeend',  getNoteTemplate(notes[i], i))
    }

}

render()

createBtn.onclick = function (){
    if (inputElement.value.length === 0 ){
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false,
    }
    notes.push(newNote)
    inputElement.value = ''
    render()
}

listElement.onclick = function (event){
    console.log(event.target.dataset)
    if (event.target.dataset.index){
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type
        if (type === 'toggle'){
            notes[index].completed = !notes[index].completed
        } else if(type === 'remove'){
            notes.splice(index,1)
            console.log('rem')
        }
    }
    render()
}

function getNoteTemplate(note, index){
    return  `
            <li
            class="list-group-item d-flex justify-content-between align-items-center"
            >
            <span 
                class="${note.completed ? 'text-decoration-line-through' : ''}">
                    ${note.title}
            </span>
            <span>
                <span 
                    class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" 
                    data-index="${index}"
                    data-type="toggle">
                        &check;
                </span>
                <span 
                    class="btn btn-small btn-danger"
                    data-index="${index}"
                    data-type="remove">
                        &times;
                </span>
            </span>
            </li>
        `
}