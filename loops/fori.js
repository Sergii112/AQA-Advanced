// Цикли є фундаментальною частиною програмування і є конструкцією що дозволяє
// автоматизувати повторювані дії або обробку даних. Вони дозволяють виконувати
// однаковий блок коду кілька разів з різними вхідними даними.

// for (let i = 1; i < 10; i++){
//     console.log(`Index ${i}`)
// }
// console.log("Finish")

// for (let i = 1; i < 10; i += 2){ //i += 2 - vuvede indexu cherez 1
//     console.log(`Index ${i}`)
// }
// console.log("Finish")

// for (let i = 1; i < 10; i++){
//     console.log(`Index ${i}`)
// }
// console.log("Finish")

// for (let i = 1; i <= 10; i++){
//     //if(i % 2 !== 0){   // vuraz vuvede parni znachennya
//     if(i % 2 === 0){     // vuvede neparni znachennya
//             continue     // vucklukae iteraciyu zgidno ymov i pruruvae yaksho ymovu ne vukonano
//     }
//     console.log(`Index ${i}`)
// }
//
// console.log("Finish")

// for (let i = 1; i <= 10; i++){
//     if(i % 2 === 0){
//         continue
//     }
//     console.log(`Index ${i}`)
//
//     if(i === 5) {
//         break // pruruvae tcukl
//     }
// }

// Vkladeni tsuklu
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`${i}.${j}`);
  }
}
