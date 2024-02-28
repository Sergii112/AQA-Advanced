//
// //1. First, install Prettier locally:
//
// <npm install --save-dev --save-exact prettier>
//
// //2. Then, create an empty config file:
//
// <node --eval "fs.writeFileSync('.prettierrc','{}\n')">
//
// // 3. instal rules(locate in options):
// {
//   "singleQuote": true,
//   "trailingComma": "none",
//   "semi": true,
//   "endOfLine": "auto",
//   "bracketSpacing": false,
//   "useTabs": true,
//   "printWidth": 120
// }
//
// //4. Запуск з CLI
// // Щоб код відформатувався можна виконати команду в терміналі
//
// // <npx prettier . --write> // Vagno! ". --write" - krapka vkazye
// // deructoriyu dlya formatyvannya. Mogna vkazatu koncretnuy file  "./functions --write.
// // 4.1. "prettier . --check" - tilku pockage sho treba farmatyvatu
//
// // 5. create  .prettierignore
