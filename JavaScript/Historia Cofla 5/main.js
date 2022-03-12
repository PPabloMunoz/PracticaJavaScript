

console.time()

const materias = {
    fisica : [90, 6, 3],
    mates : [90, 8, 2],
    quimica: [92, 8, 4],
    programacion: [75, 7, 4],
    logica: [92, 8, 4],
    calculo: [91, 6, 3],
    biología: [75, 9, 2],
    algebra: [100, 10, 4],
};

const asistencias = () => {
    for (materia in materias) {
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        console.log(`${materia}: `)
        if (asistencias < 90) {
            console.log("%cSuspenso", "color: red; padding: 10px 50px; border: 2px solid pink")
        } else {
            if (promedio < 7) {
                console.log("%cSuspenso", "color: red; padding: 10px 50px; border: 2px solid pink")
            } else {
                if (trabajos < 3) {
                    console.log("%cSuspenso", "color: red; padding: 10px 50px; border: 2px solid pink")
                } else {
                    console.log("%cAprobado", "color: green; padding: 10px 50px; border: 2px solid pink")

                }
            }
        }
    }
}

asistencias()
console.timeEnd()