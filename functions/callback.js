
function hof (callback) {
    console.log("High Order Function")
    callback()
}

const sayHello = () => console.log("Hello from Callback")

hof(sayHello)
