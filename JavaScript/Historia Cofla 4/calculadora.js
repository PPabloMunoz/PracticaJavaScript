let operacion = prompt("1: Suma, 2: Resta, 3: Multiplicación, 4: División, 5: Potencia, 6: Raiz Cuadrada, 7: Raiz Cubica")

if (operacion < 5) {
    var num1 = parseInt(prompt("Primer Número"));
    var num2 = parseInt(prompt("Segundo Número"));
    calculadora1();
} else if (operacion >= 5 && operacion <= 7) {
    var num = parseInt(prompt("Número para operar"));
    calculadora2();
}

const calculadora1 = (num1, num2)=>{
    if (operacion == 1) {
        alert("El resultado es : " + num1 + num2);
    } else if (operacion == 2) {
        alert("El resultado es : " + num1 - num2);
    } else if (operacion == 3) {
        alert("El resultado es : " + num1 * num2);
    } else if (operacion == 4) {
        alert("El resultado es : " + num1 / num2);
    }
}

const calculadora2 = num => {
    if (operacion == 5) {
        let elevar = parseInt(prompt("elevación"));
        alert("El resultado de la potencia es: " + num ** elevar);
    } else if (operacion == 6) {
        alert("El resultado de la raiz cuadrada es: " + Math.sqrt(num));
    } else if (operacion == 7) {
        alert("El resultado de la raiz cúbica es: " + Math.cbrt(num))
    }
}




























