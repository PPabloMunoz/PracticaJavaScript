







let operacion = prompt("1: Suma, 2: Resta, 3: Multiplicación, 4: División, 5: Potencia, 6: Raiz Cuadrada, 7: Raiz Cubica")

if (operacion < 5) {
    let num1 = parseInt(prompt("Primer Número"));
    let num2 = parseInt(prompt("Segundo Número"));
    calculadora1(num1, num2);
} else if (operacion >= 5 && operacion <= 7) {
    let num = parseInt(prompt("Número para operar"));
    calculadora2(num);
}





























