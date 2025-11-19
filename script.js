// Función principal de la calculadora
function calculadora() {
    let numero1 = prompt("Ingrese el primer número:");
    // Validar número 1
    while (isNaN(numero1) || numero1 === "") {
        numero1 = prompt("Valor inválido. Ingrese un número válido para el primer número:");
    }

    let operador = prompt("Ingrese un operador (+, -, *, /):");
    // Validar operador
    const operadoresValidos = ['+', '-', '*', '/'];
    while (!operadoresValidos.includes(operador)) {
        operador = prompt("Operador inválido. Ingrese uno de estos (+, -, *, /):");
    }

    let numero2 = prompt("Ingrese el segundo número:");
    // Validar número 2
    while (isNaN(numero2) || numero2 === "") {
        numero2 = prompt("Valor inválido. Ingrese un número válido para el segundo número:");
    }

    // Convertir a números
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    // Validar división por cero
    if (operador === '/' && numero2 === 0) {
        console.log("Error: No se puede dividir entre cero.");
        return;
    }

    // Calcular resultado
    let resultado;
    if (operador === '+') {
        resultado = numero1 + numero2;
    } else if (operador === '-') {
        resultado = numero1 - numero2;
    } else if (operador === '*') {
        resultado = numero1 * numero2;
    } else if (operador === '/') {
        resultado = numero1 / numero2;
    }

    console.log(`Resultado: ${resultado}`);
}

// Ejecutar la calculadora al cargar el script
calculadora();
