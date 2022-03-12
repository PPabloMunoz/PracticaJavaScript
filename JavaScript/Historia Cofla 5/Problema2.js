let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos de tp";
let descanso = "10 minutos de descanso";
let homework = "30 minutos de homework";


console.log("TAREAS");
for (let i = 0; i < 14; i++) {
    console.groupCollapsed(`Dia ${i+1}`);
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
}
console.groupEnd()

