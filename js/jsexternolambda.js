const cambiarTexto = (idelemento, valor) => {
    document.getElementById(idelemento).innerText = valor
}
const cambiarColor = (idelemento, color) => {
    document.getElementById(idelemento).style.color = color;
}
const cambiarTamanio = (idelemento, tamanio) => {
    document.getElementById(idelemento).style.fontSize = tamanio;
}
const agregarElementos = (idelemento, elementohtml) => {
    document.getElementById(idelemento).innerHTML = document.getElementById(idelemento).innerHTML + elementohtml
}
/* */
const conceptosJS = () => {
    /*Tipos de Variables en JS
    var:globales, ya no usa comunmente el tipo de datos
    let: local, dentro del bloque {}, no permite volver a declarar la variable en 
    const : Varaibles cuyo valor no cambia
    */
    let nombre = "Edlith";
    let numero1 = 10;
    let numero2 = 10.1;
    const PI = 3.14;

    console.log(nombre);
    console.log(numero1);
    console.log(PI);
    console.log("Entro al método de calculo");

    /*Declaración de arreglos*/
    const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[1]);
    console.log(diasSemana[4]);

    console.log(diasSemana[5]);

    //dentro de JS el concepto de nulo o no existe es: undefined

    //null !==undefined

    let valor = null;
    console.log(valor);

    /*Para comparaciones tenemos:
    ==
    !==
    */

    //console.log(valor1);

    //Guardar en arreglos

    //Guardar al final
    diasSemana.push('Sabado');
    console.log(diasSemana);

    //Guardar al comienzo
    diasSemana.unshift('Días');
    console.log(diasSemana);

    const numerosImpares = [1, 3, 5, 7, 8, 9, 11];
    console.log(numerosImpares);

    const numerosPares = [2, 4, 6, 8, 10];
    console.log(numerosPares);

    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros);

    for (const dia of diasSemana) {
        console.log(dia);
        if (dia === 'Viernes') {
            console.log('Por fin es viernes');
        }
        else {
            console.log('Aun no llega viernes');
        }
    };

    //Manejo de objetos
    const miEstudiante = {
        nombre: "Edlith",
        apellido: "Vinueza",
        edad: 24,
        genero: "Femenino",
        ciudadNacimiento: "Quito"
    };

    console.log(miEstudiante);
    console.log(miEstudiante.nombre);
    console.log(miEstudiante.edad);

    if (miEstudiante.edad === 22) {
        console.log('Tiene 22');
    } else {
        console.log('Ya no tiene 22');
    };

    miEstudiante.apellido = 'Zambrano';
    console.log(miEstudiante);

    //Declaracion de atributos pero como objetos
    const miProfesor = {
        nombre:"Daniel",
        apellido:"Torres",
        edad:null,
        direccion:{
            calle: "Av. La Prensa",
            casa : "1028",
            barrio: "La Grandeza"
        }
    };

    console.log(miProfesor);
    console.log(miProfesor.nombre);
    console.log(miProfesor.direccion);
    console.log(miProfesor.direccion.calle);

    miProfesor.direccion.calle = "Av. America";

    console.log(miProfesor);
    console.log(miProfesor.edad);
    console.log(miProfesor.estatura);

    if (miProfesor.edad === miProfesor.estatura){
        console.log('Son iguales');
    } else{
        console.log('Estos no son lo mismo');
    };





} 