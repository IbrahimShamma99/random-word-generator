import randWordGen from "./index";



console.log(randWordGen({ min: 2, max: 4, maxLength: 5, join: "-" }))

console.log(randWordGen({ min: 2, max: 4, maxLength: 7, join: "" }))