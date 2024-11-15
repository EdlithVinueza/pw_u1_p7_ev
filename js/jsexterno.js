function cambiarColorLabel1(color) {
    document.getElementById('label1').style.color = color;
}

function cambiarTamanoLabel1(tamano) {
    document.getElementById('label1').style.fontSize = tamano;
}

function cambiarTextoLabel1(texto) {
    document.getElementById('label1').innerText = texto;
}

function agregarElemento(texto) {
    document.getElementById('idmenu').innerHTML += '<li><a href="#" style="color: black;">' + texto + '</a></li>';
}

function cambiarFondoInput1(color) {
    document.getElementById('numero1').style.backgroundColor = color;
}

function cambiarFondoInput2(color) {
    document.getElementById('numero2').style.backgroundColor = color;
}

function cambiarPesoTextoLabel2(peso) {
    document.getElementById('label2').style.fontWeight = peso;
}

function cambiarEstiloTextoLabel2(estilo) {
    document.getElementById('label2').style.fontStyle = estilo;
}

function cambiarColorCalculadora(color) {
    document.getElementById('calculadora').style.color = color;
}

function cambiarTamanoCalculadora(tamano) {
    document.getElementById('calculadora').style.fontSize = tamano;
}

function cambiarColorH2(color) {
    document.getElementById('ingresaNumeros').style.color = color;
}

function cambiarTamanoH2(tamano) {
    document.getElementById('ingresaNumeros').style.fontSize = tamano;
}