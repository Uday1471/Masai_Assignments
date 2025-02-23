let details = {
    name: "Uday Mohindra",
    age: 21
}

function personInfo() {
    console.log(`My name is ${this.name} and my age is ${this.age}.`)
}

personInfo.call(details)