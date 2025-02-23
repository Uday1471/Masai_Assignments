let cnt = 0

const loadingTime = setInterval(() => {
    console.log("Loading...")
    cnt++
    if(cnt === 5) {
        clearInterval(loadingTime)
        console.log("Loaded successfully!")
    }
},1000)