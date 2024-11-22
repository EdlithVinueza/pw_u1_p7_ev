var num1 = null;
var num2 = null;
var operacion = null;

/*Para obtener el valor ingresado  */
function setearValor(valor) {
    document.getElementById('id-display').innerText = valor;
}

function setearValorConcatenado(valor) {
    let valorActual = document.getElementById('id-display').innerText;
    document.getElementById('id-display').innerText = valorActual + valor;
}

function recibirValor(valor) {
    if (num1 === null) {
        num1 = parseFloat(valor);
        setearValor(valor);
    } else {
        num2 = parseFloat(valor);
        setearValorConcatenado(valor);
    }
}

function evaluarOperacion(op) {
    operacion = op;
    setearValorConcatenado(op);
}

function igual() {
    let valorFinal;
    if (operacion === '+') {
        valorFinal = num1 + num2;
    } else if (operacion === '-') {
        valorFinal = num1 - num2;
    } else if (operacion === '*') {
        valorFinal = num1 * num2;
    } else if (operacion === '/') {
        valorFinal = num1 / num2;
    }
    setearValor(valorFinal);
    num1 = valorFinal;
    num2 = null;
    operacion = null;
}

function limpiar() {
    num1 = null;
    num2 = null;
    operacion = null;
    setearValor('');
}
