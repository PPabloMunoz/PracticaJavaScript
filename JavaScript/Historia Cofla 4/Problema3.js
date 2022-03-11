
const materias = {
    fisica: ["pedro", "pablo", "maria", "juan", "david"],
    mates: ["pedro", "pablo", "maria", "juan"],
    programacion: ["pedro", "pablo"],
}

let materia = prompt("¿donde te quieres inscribir? 1: fisica, 2: mates, 3: programación")
if (materia == 1) {
    materia = "fisica"
}else if (materia == 2) {
    materia = "mates"
} else if (materia == 3) {
    materia = "programacion"
}else {
    alert("no se ha encontrado la materia")
}

const pregunta = (materia)
    if (materias[materia].length < 5) {
        alert(`Inscrito a ${materia}`)
        materias[materia].push(`<b style="color:blue">Cofla</b>`)
    } else {
        alert("la clase esta llena")
    }



document.write(`Alumnos inscritos en fisica son: <b>${materias["fisica"]}</b> <br>`)

document.write(`Alumnos inscritos en mates son: <b>${materias["mates"]}</b> <br>`)

document.write(`Alumnos inscritos en programación son: <b>${materias["programacion"]}</b> <br>`)









