function handleNum(num, evenCallback, oddCallback) {
    if (num % 2 === 0) {
        evenCallback()
    } else {
        oddCallback()
    }
}

const handleEven = () => console.log("Number is even")
const handleOdd = () => console.log("Number is odd")

handleNum(4, handleEven, handleOdd)





