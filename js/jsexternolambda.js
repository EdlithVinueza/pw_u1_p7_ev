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
        nombre: "Daniel",
        apellido: "Torres",
        edad: null,
        direccion: {
            calle: "Av. La Prensa",
            casa: "1028",
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

    if (miProfesor.edad === miProfesor.estatura) {
        console.log('Son iguales');
    } else {
        console.log('Estos no son lo mismo');
    };

    //Arreglo de objetos
    const est1 = {
        nombre: "Edlith",
        apellido: "Vinueza",
        edad: 24
    };

    const est2 = {
        nombre: "Daniel",
        apellido: "Torres",
        edad: 25
    };

    const est3 = {
        nombre: "Luis",
        apellido: "Carrillo",
        edad: 26
    };

    const arregloestudiantes = [est1, est2, est3];

    console.log(arregloestudiantes);
    console.log(arregloestudiantes[1]);
    console.log(arregloestudiantes[1].nombre);

    const arregloestudiantes2 = [{ nombre: "Carlos", apellido: "Tobar", edad: 35 },
    { nombre: "Ana", apellido: "Castillo", edad: 39 },
    { nombre: "Andrea", apellido: "Andrade", edad: 31 },
    { nombre: "Alejandra", apellido: "Zambrano", edad: 29 }];

    console.log(arregloestudiantes2);

    console.table(arregloestudiantes2);

    //Uso de pop para obtener y eliminar el ultimo elemento del array
    const estudiante = arregloestudiantes2.pop();

    console.log(estudiante);

    console.table(arregloestudiantes2);

    //Destructuracion de arreglos
    const colores = ['Amarillo', 'Azul', 'Verde', 'Rojo', 'Rosado'];

    const [c1, c2, c3, c4, c5] = colores;

    const [m1, m2, m3, m4, m5, m6, m7, m8] = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

    console.log(m1);
    console.log(m2);
    console.log(m5);
    console.log(m8);

    //Para no aceder a todo, usando comas

    const [, mes2, , , mes5] = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

    console.log(mes2);
    console.log(mes5);

    //Destructuracion de Objetos

    console.log('Desestructuracion de Objetos');

    const automovil = {
        marca: 'Toyota',
        modelo: 'Pruis',
        anio: 2024,
        color: 'Plateado'
    };

    /*
    const {marca,modelo,anio, color} = automovil;
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);
    */

    //const desestructuracion = (automovil) => {};

    const desestructuracion = ({ modelo, anio, color, marca }) => {
        console.log('Entro al metodo de desestrutacion');
        console.log(marca);
        console.log(modelo);
        console.log(color);
        console.log(color);
    };

    desestructuracion(automovil);

    const { nombreP, estatura, raza } = { nombreP: 'Perro', raza: 'pastor', estatura: 120 }
    console.log(nombreP);
    console.log(estatura);
    console.log(raza);

    //declaren un objeto con un atributo complejo (con un atributo de tipo objeto)
    // y vamos a desestructurar en especial el atributo de tipo objeto

    const universidad = {
        nombre: 'UCE',
        estudiantes: 10000000,
        rector: {
            nombreR: 'Nombre1',
            apellido: 'Apellido1'
        }
    };


    /*
       //extraer informacion de un objeto dentro de otro objeto
       const {estudiantes, rector} = universidad; 
       console.log(estudiantes);
       console.log(rector);
      
       //extraer informacion del rector de un objeto en dos pasos
       const {nombreR} = rector;
   
       console.log(nombreR);
   
       */
    //extraer en una linea 
    const { estudiantes, rector: { nombreR, apellido } } = universidad;
    console.log(nombreR);
    console.log(apellido);

} 