////////////////////
// function hof (callback) {
//     console.log("High Order Function")
//     callback()
// }
//
// const sayHello = () => console.log("Hello from Callback")
//
// hof(sayHello)
////////////////////

//use case: ///////////////////////////////////////////
// function fetchData(url, callback) { // function pruymae url i callback
//     fetch(url)
//         .then(response => response.json()) // takoj callback
//         .then(data => callback(data))  // takoj callback
//         .catch(error => console.log(error))  // takoj callback
//}
/////////////////////////////////////////////////////////////
// function hof (cb){
//     console.log("High Order Function")
//     cb()
// }
//
// const sayHello = () => console.log("Hello from Callback")
// const sayGoodBye = () => console.log("GoodBye from Callback")
//
// hof(sayGoodBye)

////////////////
// function processPayment(onSuccessCb, onFailureCb){
//     try{
//         if(Date.now() % 2 === 0){
//             throw new Error("Error payment")
//         }
//
//         onSuccessCb()
//     }catch (e){
//         onFailureCb(e)
//     }
// }
//
// function onPaymentSuccess(){
//     console.log("Payment has been processed")
// }
//
// function onPaymentError(error){
//     console.log(`Payment Error has happened: ${error.message}`)
// }
//
// processPayment(onPaymentSuccess, onPaymentError)

///////////////////