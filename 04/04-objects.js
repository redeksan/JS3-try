const person = {
    name: 'Ivan',
    age: 29,
    isYoutuber: true,
    languages: ['ru', 'en'],
    adress: {
        city: 'NY',
        street: '11th'        
    },
    'complex key' : 'complex calue',
    ['key_' + 21 * 2]: 'computed value',
    greet(){
        console.log('greet from person', this)
    },
    arrow: () =>{
        console.log('arrow reson', this)
    },
    info() {
        console.log(this.name)
    }
}

// destruction

// const name = 'ira'
// const {age, name: firstName = 'test',languages} = person

// for (let key in person){
//     if(person.hasOwnProperty(key)){
//     console.log(person[key])
//     }
// }

// Object.keys(person).forEach((key) => {
//     console.log(person[key])
// })


const logger = {
    keys(withText = true) {
        if (withText){
            console.log('obj keys', Object.keys(this))
        } else{
            console.log(Object.keys(this))
        }
       
    },
    keysAndVAlues(){
        Object.keys(this).forEach((key) => {
                console.log('Key ', key)
                console.log('Value ' , this[key])
            }) 
    }
}

// const bound = logger.keys.bind(person)
// bound(false)

// logger.keys.call(person, false)
// logger.keys.apply(person, [false])


class Human{
    static isHumnan = true

    humanGreet(){
        console.log('hi from HUma')
    }
}
class Person extends Human{
  constructor(name, age){
    super()
        this.name = name ?? 'Undefined name'
        this.age = age ?? 'Undefined age'
    }
    sayHello (){
        console.log('hello from ' , this.name)
    }
}

const person1 = new Person(23)
const person2 = new Person('ira' , 25)

//console.log(newPerson)
person1.sayHello()
person2.sayHello()

console.log(person1)
person1.humanGreet()