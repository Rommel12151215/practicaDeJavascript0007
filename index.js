function calculadora() {
    var num1 = prompt("Introduce el primer número");
    var num2 = prompt("Introduce el segundo número");
    var operacion = prompt("Introduce la operación a realizar (+, -, *, /)");
 
    var resultado;
 
    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 != 0) {
                resultado = num1 / num2;
            } else {
                alert("Error: División por cero");
                return;
            }
            break;
        default:
            alert("Error: Operación no válida");
            return;
    }
 
    alert("El resultado es " + resultado);
 }
 