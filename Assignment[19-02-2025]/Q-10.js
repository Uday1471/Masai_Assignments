function Person(name, age) {
    this.name= name,
    this.age= age,
    this.displayInfo = function() {
        console.log(`My name is ${this.name} and i'm ${this.age} years old.`)
    }
}

let value = new Person("Uday Mohindra", 21)
let result = value.displayInfo.bind(value)
result()