const opts = { edicion: { alias: "e", demand: true, desc: "Aqui va el numero de la edicion pasada" } }
const { argv } = require('yargs')
    .command("df", "Genera una lista con diarios", opts)
    .command("gdl", "Genera una lista con diarios", opts)
    .command("mty", "Genera una lista con diarios", opts)
    .command("co", "Genera una lista con diarios", opts)
    .command("ed", "Genera una lista con diarios", opts)

module.exports = { argv }