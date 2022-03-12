// const materias = {
//     fisica: ["Sr. Hernandez", "pedro", "juan", "pepito", "cofla", "maria"],
//     quimica: ["Sr. García", "pablo", "juan", "pepito", "maria"],
//     mates: ["Sr. Dalto", "pedro", "juan", "pepito", "cofla", "maria"],
//     lengua: ["Sr. Pérez", "pedro", "juan", "pepito", "maria"],
// }

// const obtenerInformacion = (materia) => {
// if (materias[materia] !== undefined) {
//     return [materias[materia],materia, materias];
// } else {
//     return materias;
// }
// }

// const infoMateria = (materia) => {
// let informacion = obtenerInformacion(materia);
// if (informacion !== false) {
//     let profesor = informacion[0][0];
//     let alumnos = informacion[0]
//     alumnos.shift();
//     document.write(`
//     El profesor de ${informacion[1]} es: <b>${profesor}</b> <br>
//     Alumnos presentes son: <b>${alumnos}</b> <br><br>
//     `);
// }
// }


// const cantidadDeClases = (alumno) => {
// let informacion = obtenerInformacion()
// let clasesPresentes = [];
// let clasesTotales = 0;
// for (info in informacion) {
//     if (informacion[info].includes(alumno)) {
//         clasesTotales++;
//         clasesPresentes.push(" " + info)
//     }
// }
// return `${alumno} está en ${clasesTotales} clases: <b>${clasesPresentes}</b>`
// }


// infoMateria("fisica")
// infoMateria("quimica")
// infoMateria("mates")
// infoMateria("lengua")


// document.write(cantidadDeClases("cofla"))





