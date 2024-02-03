    // const temperature = 100
    //
    // console.log("Start")
    //
    // if (temperature >= 100) {
    //     console.log("Water is boiling")
    //     throw "My custom error string"
    // }
    // console.log("Finish")

    const temperature = 10

    console.log("Start")

    try {
        if (temperature >= 100) {
            //     console.log("Water is boiling")
            //     throw "My custom error string"

            throw new Error("My custom error")
        }
        console.log("End of try block")
    } catch (e) {
        console.log("Some error has happened: ", e.message)
    } finally {
        console.log("Finally block")
    }
    console.log("Finish")