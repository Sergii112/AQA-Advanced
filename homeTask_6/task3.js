
function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator can't be zero")
    }
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Both arguments must be numbers")
    }
    return numerator / denominator
}

    try {
        console.log(divide(10, 2))
    } catch (e) {
        console.log(e.message)
    } finally {
        console.log("Job complete")
    }

    try {
        console.log(divide(5, 0))
    } catch (e) {
        console.log(e.message)
    } finally {
         console.log("Job complete")
    }

    try {
        console.log(divide("a", 5))
    } catch (e) {
        console.log(e.message)
    } finally {
        console.log("Job complete")
    }

