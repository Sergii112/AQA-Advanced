const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const copiedList = structuredClone(numbersList);
copiedList.sort((a, b) => a - b);

console.log('NumbersList: ', numbersList);
console.log('CopiedList: ', copiedList);
