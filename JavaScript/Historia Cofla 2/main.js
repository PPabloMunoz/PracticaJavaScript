// !Problema A
// let free = false

// const validarCliente = (time) =>{
//     let edad = prompt('¿Cuál es tu edad?');
//     if (edad >=18) {
//         if (time >= 2 && time < 7 && free == false) {
//             alert('pasa gratis por ser el primero desde las 2:00Hs');
//             free = true;
//         }else {
//             alert(`son las ${time}:00Hs, y puedes pasar, pero pagando la entrada`);
//         }
//     } else {
//         alert("sos un pelotudo menor de edad ");
//     }
// }

// validarCliente(23)
// validarCliente(24)
// validarCliente(1)
// validarCliente(2)
// validarCliente(3)
// validarCliente(4)


// !Problema B

// let cantidad = prompt("¿Cuantos alumnos hay?")
// let alumnosTotales = [];

// for (let i = 0; i < cantidad; i++) {
//     alumnosTotales[i] = [prompt("Nombre alumno " + (i + 1)), 0];
// }

// const apuntarAsistencias = (nombre, p) => {
//     let presencia = prompt(nombre);
//     if (presencia == "p" || presencia == "P") {
//         alumnosTotales[p][1]++;
//     }
// }

// for (let i = 0; i < 30; i++) {
//     for (alumno in alumnosTotales) {
//         apuntarAsistencias(alumnosTotales[alumno][0], alumno)
//     }
// }


// for (alumno in alumnosTotales) {
//     let resultado = `${alumnosTotales[alumno][0]}: <br>
//         Presentes: ${alumnosTotales[alumno][1]} <br>
//         Ausencias:  ${30 - alumnosTotales[alumno][1]}`;
//     if (30- alumnosTotales[alumno][1] > 18) {
//          resultado += " Suspenso por rebelde <br> <br>"
//     } else {
//         resultado += "<br><br>"
    // }document.write(resultado);
// }

// !Problema C

// let operacion = prompt("¿que quieres hacer? sumar, restar, multiplicar o dividir")

// let num1 = parseInt(prompt(`Numero 1 para ${operacion}`))
// let num2 = parseInt(prompt(`Numero 2 para ${operacion}`))


// if (operacion == "sumar") {
//     resultado = num1 + num2;
//     alert(`El resultado es ${resultado}`);
// }else if (operacion == "restar") {
//     resultado = num1 - num2;
//     alert(`El resultado es ${resultado}`);
// }else if (operacion == "multiplicar") {
//     resultado = num1 * num2;
//     alert(`El resultado es ${resultado}`);
// }else if (operacion == "dividir") {
//     resultado = num1 / num2;
//     alert(`El resultado es ${resultado}`);
// } else {
//     alert("no se ha encontrado la operación")
// }








