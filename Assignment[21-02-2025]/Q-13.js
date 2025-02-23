function timer(duration, onComplete){
    setTimeout(() => {
        onComplete(`Timer of ${duration} ms finished`)
    }, duration)
}

timer(4000, (message) => {
    console.log(message)
})