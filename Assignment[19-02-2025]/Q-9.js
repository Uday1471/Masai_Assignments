function setTimeoutGreeting() {
    setTimeout(() => {
        console.log(`Hello, ${this.name}`)
    }, 1000)
}
let value= {
    name: "Uday Mohindra"
}
setTimeoutGreeting.bind(value)()