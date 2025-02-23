function multiplyNumbers(a, b) {
    console.log(`${this.a} x ${this.b} = ${this.a * this.b}`)
}

let obj = {
    x: 10,
    y: 20
}

multiplyNumbers.apply(obj, ["The product is : ",])