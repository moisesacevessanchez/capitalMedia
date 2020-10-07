// 1183-CapitalCoahuila
// 1196-CapitalEdomesss
// 1157-ReporteIndigoGDL
// 1156-ReporteIndigoMTY
// 1158-ReporteIndigoDF
const capitalMedia = (command, number) => {

    const inicio = number + 1
    const fin = number + 50
    const result = new Array()
    let edicion = ""

    switch (command) {
        case "df":
            edicion = "1158-ReporteIndigoDF"
            break;
        case "gdl":
            edicion = "1157-ReporteIndigoGDL"
            break;
        case "mty":
            edicion = "1156-ReporteIndigoMTY"
            break;
        case "co":
            edicion = "1183-CapitalCoahuila"
            break;
        case "ed":
            edicion = "1196-Capital"
            break;

        default:
            console.log("Comando no encontrado".red + " " + "intenta" + " " + "node app.js --help".green);
            break;
    }

    for (let i = inicio; i <= fin; i++) {
        result.push(`https://p88.capitalmedia.mx/ediciones/${edicion}/${i}/html5/${i}.pdf`)
    }
    console.log(result);
}




module.exports = { capitalMedia }