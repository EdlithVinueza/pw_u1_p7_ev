var num1 =0;
var num2 =0;

/*Para obtener el valor ingresado  */
function setearValor(valor){
  
    let valorActual = document.getElementById('id-display').innerText 
    console.log(valorActual);
    document.getElementById('id-display').innerText = valor;
};

function setearValorConcatenado(valor){
    let valorActual = document.getElementById('id-display').innerText;
    console.log(valorActual);
    document.getElementById('id-display').innerText = valorActual + valor;
};

function recibirValor(valor){
    setearValor(valor);
    console.log(valor);
    if (num1 === null){
        num1 = valor
        setearValor(valor)
    }
    else{
        num2 = valor;
        setearValorConcatenado(valor);
    }
}

function evaluarOperacion(op){
    opeperacion = op;
};

function igual(){
    let valorFinal;
    if (operacion === '+'){
        valorFinal = num1 + num2;
    }
    else if (operacion === '-'){
        valorFinal = num1 - num2;
    }
    else if (operacion === '*'){
        valorFinal = num1 * num2;
    }
    else if (operacion === '/'){
        valorFinal = num1 / num2;
    }
};
