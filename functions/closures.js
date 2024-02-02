
function makeCounter (startValue) {
    let value = startValue

    return function (){
        console.log(value)
        value ++
    }
}

const count = makeCounter(1)
count()