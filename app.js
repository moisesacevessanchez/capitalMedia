const colors = require("colors");
const { argv } = require("./config/yargs");
const { capitalMedia } = require("./collections/controller");
const controller = require("./collections/controller");

const command = argv._[0]
const numero = argv.e
switch (command) {
    case "df":
        controller.capitalMedia(command, numero)
        break;
    case "gdl":
        controller.capitalMedia(command, numero)
        break;
    case "mty":
        controller.capitalMedia(command, numero)
        break;
    case "co":
        controller.capitalMedia(command, numero)
        break;
    case "ed":
        controller.capitalMedia(command, numero)
        break;

    default:
        console.log("Comando no encontrado".red + " " + "intenta" + " " + "node app.js --help".green);
        break;
}