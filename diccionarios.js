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