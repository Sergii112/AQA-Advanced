
const arr = [1, 2, 3, 3, 4, 4, 5]
const setFromArray = new Set(arr);
console.log(typeof  setFromArray)
const uniqueArray = [...setFromArray]
console.log(uniqueArray)