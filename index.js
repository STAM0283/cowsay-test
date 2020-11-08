const infosPerso = require("./information");
const cowsay = require("cowsay");
console.log(cowsay.say({
    text: ` Hello ${infosPerso.firstName} ${infosPerso.lastName} de : ${infosPerso.school}`
}))