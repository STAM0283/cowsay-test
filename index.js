const infosPerso = require("./information");
const cowsay = require("cowsay");
console.log(cowsay.say({
    text: ` Hello I am ${infosPerso.firstName} ${infosPerso.lastName} from : Lyon ${infosPerso.school} campus!`
})) 