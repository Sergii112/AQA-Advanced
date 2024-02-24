// const promise =  new Promise((resolve, reject)=>{
//     resolve("hello from promise")
//     // reject(new Error("Error in promise"))
// })
//
// promise
//     .then((value)=>{
//         return value.toUpperCase()
//     })
//     .then((upperValue)=>{
//         console.log(upperValue)
//     })
//     .catch((e)=>{
//     console.log(e.message)
//     })
//     .finally(()=>{
//     console.log("final")
//     })

// Promise.resolve("Hello").then().catch()
// Promise.reject(new Error("Error")).then().catch((e)=> console.log(e.message))

// All

function promiseA (){
  return Promise.resolve("A")
}

function promiseB (){
  return Promise.resolve("B")
}

function promiseC (){
  // return Promise.resolve("C")
  return Promise.reject(new Error("Error C"))
}


// promiseA().then(promiseB).then(promiseC)

// Promise.all([
//     promiseA(),
//     promiseB(),
//     promiseC()
// ])
//     .then((values)=>{
//     console.log(values)
// })
//     .catch(e=> console.log(e.message))


// allSettled
// Promise.allSettled([
//     promiseA(),
//     promiseB(),
//     promiseC()
// ])
//     .then((values)=>{
//         console.log(values)
//     })


// race
// Promise.race([
//     promiseA(),
//     promiseB(),
//     promiseC()
// ])
//     .then((values)=>{
//         console.log(values)
//     }).catch((e)=> e.message)

// any
// Promise.any([
//     promiseA(),
//     promiseB(),
//     promiseC()
// ])
//     .then((values)=>{
//         console.log(values)
//     }).catch((e)=> e.message)


const pErr = new Promise((resolve, reject) => {
  reject("Always fails");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Done eventually");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Done quick");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
  console.log(value);
});

Promise.race([pErr, pSlow, pFast]).then((value) => {
  console.log(value);
}).catch((e)=>console.log(e))