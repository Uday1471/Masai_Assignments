let nameArray = ["Charlie", "Alice", "Bob"]
let sortNames = nameArray.sort((a, b) => {
    return a.localeCompare(b)
})

console.log(sortNames)