//Acceso a propiedades

let persona ={
    nombre: 'Ana',
    apellido: 'Aparicio',
    direccion: {
        calle: 'Toledo',
        numero: 10
    }
}

function sayHello(){
    return `Hola ${persona.nombre} ${persona.apellido}, encantada.
    Vivo en calle ${persona.direccion.calle}, número ${persona.direccion.numero}`
}

console.log(sayHello())

//Cuantas propiedades tiene un objeto

function countProperties(){
    let counter = 0;
    for (let key in persona){
        counter++;
    }
    return counter
}

console.log(countProperties())

//Combinar dos diccionarios en uno

let dict1 = {
    nombre: 'Ana'
}

let dict2 = {
    apellido1: 'Aparicio',
    apellido2:'Amago'
}

function combineDicts(d1, d2){
    let finalDict = {}
    for (let key in d1){
        finalDict[key] = d1[key]
    }
        for (let key in d2){
        finalDict[key] = d2[key]
    }

    return finalDict
}

console.log(combineDicts(dict1, dict2))

//Un método que juega a piera papel y tijera e indica quién gana

const play = (player1, player2) => {
    const rules = {piedra: 'tijera', papel: 'piedra', tijera:'papel'};
    if (player1 === player2){
        return 'Empate';
    }else if (rules[player1]===player2){
        return 'Gana Jugador 1'       
    }else{
        return 'Gana Jugador 2'
    }
}

console.log(play('piedra', 'papel'))


//Una función que recibe una lista de números y crea un diccionario que indica las repeticiones que hay de cada uno

function countNumbers(array){
    let result = {};
    for (let i = 0; i< array.length ; i++){
        if(!result.hasOwnProperty(array[i])){
            result[array[i]] = 0
        }
        result[array[i]]++
    }
    return result
}

console.log('cuenta números', countNumbers([1, 2, 2, 3, 1]))

//Crear un rango ¿Por qué está esto en ejercicios de diccionarios?
function range(start, end, step=1){
    //step es opcional, lo definimos por defecto, antes se hacía como
    //en la línea de abajo. Ahora, se pasa por parámetro.
    //if (step === undefined) step = 1
    let result = []
    if (step > 0){
        for (let i = start; i <= end; i+=step){
            result.push(i)
    }

    }else{
        for (let i = start; i >= end; i+=step){
            result.push(i)
        }
    }
    return result
}

console.log(range(3, 15, 3))

//Sumar elementos de un array
//Por qué esto está en diccionarios?
function sumArray(array){
    let result = 0
    for (let i = 0; i < array.length ; i++){
        result += array[i];
    }
    return result
}

console.log(sumArray(range(1,5)))

