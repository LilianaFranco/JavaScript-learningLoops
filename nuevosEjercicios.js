const prompt = require ('prompt-sync')({sigint: true})

// // Ejercicio 1
function imprimirFrase(){
    /**
    * Pide frase al usuario frase y la imprime en pantalla.
    * @return imprime en pantalla la frase del usuario.
    */
    let frase = prompt("ingresar una frase: ")
    console.log(frase)
}
imprimirFrase();

// // Ejercicio 2
function saludar(){
    /**
    * Pide nombre al usuario frase y lo saluda por su nombre.
    * @return imprime en pantalla Hola + nombre del usuario.
    */
    let frase = prompt("ingresa tu nombre: ")
    console.log("Hola, " + frase)
}
saludar();

// // Ejercicio 3
function sumar(){
    /**
    * Pide dos números al usuario y los imprime en pantalla.
    * @return imprime en pantalla la suma de los dos números.
    */
    let numero1 = prompt("ingresa un número: ")
    let numero2 = prompt("ingresa otro número: ")
    console.log("La suma de ambos números es: " + (+numero1 + +numero2)) 
}
sumar();

// // Ejercicio 4
function calcularEdad(){
    /**
    * @parameter {int} Pide al usuario un número de base.
    * * @parameter {int} Pide al usuario un número máximo.
    * @return {int} entrega un número aleatorio entre el número base y el número máximo
    */
    let anioNacimiento = prompt("ingrese su año de nacimiento: ")
    console.log("Tu edad es: " + (2022 - +anioNacimiento))
}
calcularEdad();

// // Ejercicio 5
function getRandomInt(min, max) {
    /**
    * Pide frase al usuario frase y la imprime en pantalla.
    * @return imprime en pantalla la frase del usuario.
    */
    return Math.floor(Math.random() * (max - min)) + min;
}

// function guessTheNumber() {
    /**
    * Compara un numero entregado con un número aleatorio de 1 a 10
    * @return esNumeroSecretro {string} imprime en pantalla felicitaciones si adivíno o informa si se equivocó.
    */
    let numeroSecreto = getRandomInt(0, 10)
    let numeroUsuario = prompt("Adivina el número que estoy pensando: ")
    if (numeroUsuario == numeroSecreto){
        console.log("Felicitaciones, ese era.")
    }
    else{
        console.log("Lo siento, intenta nuevamente")
    }
}

// console.log (guessTheNumber(3))

// Ejercicio 6
function encontrarPares(max){
    /**
    //* encuentra todos los pares dsde 0 hasta hasta una cifra dada para detenerse.
    //* @param  max {int} un número hasta donde se debe contar de dos en dos
    //* @return {int} imprime en pantalla los numeros pares desde 0 hasta el número máximo
    //*/
    let contador = 0;
    let i = 0
    do{
        contador = contador + 2;
        console.log(contador)
        i= i+2;
    }
    while (i < max);
}
let pares = encontrarPares(100);
console.log(pares);

//Ejercicio 7
function recorrerArreglo(nombres){
    /**
    //* Imprime todos los elementos de un arreglo
    //* @param  nombres {array} arreglo ingresado por el usuario
    //* @return {int} imprime en pantalla los elementos de un arreglo
    //*/
    let i = 0
    for (i=0; i<nombres.length; i++){
        console.log(i)
        console.log(nombres[i])
        
    }
}
console.log(recorrerArreglo(["Pedro", "Pablo", "Maria", "Juan", "Diana"]))

//Ejercicio 8
function percentage(number1, number2){
    /**
    * Calculate the percentage of one number
    * @param  number1 {int} the percentage we want to calculate
    * @param  number2 {int} a given number
    * @return result {float} the percentage number2 of a given number1.
    */
    let result = (number1*number2)/100
    return result
}
function percentageIf(number){
    if (number>500){
        return percentage(18, number)
    }
}
console.log(percentageIf(650))

//Ejercicio 9
function returnElementThree(nombres){
    /**
    //* Imprime el elemento 3 de un arreglo, sino lo encuentra retorna -1
    //* @param  nombres {array} arreglo ingresado por el usuario
    //* @return {int} imprime en pantalla el elemento de l posición 3 o -1 si no existe dicha posición.
    //*/
    if(nombres[3]){
        return nombres[3]
    }
    else
        return -1
    
}

let notas = [3,8,9,10]
let edad = [3,8,9]
console.log(returnElementThree(notas))
console.log(returnElementThree(edad))

Ejercicio 10
function twoOrThreeDigits(){
    let number = prompt("Ingrese un número de máximo dos cifras: ")
    if (number>99){
        return "Error. Ingresa un número de máximo dos cifras"
    }
    else if (number>=0){
        if(number < 10){
            cifraFaltante = 10 - number
            return `Para ser un número de dos cifras te faltan ${-cifraFaltante} unidades`
        }
        else{
        cifraFaltante = 100 - number
        return `Para ser un número de tres cifras te faltan ${-cifraFaltante} unidades`
        }
    }
    else {
        if(number > -10){
            cifraFaltante = (10 + +number) * -1
            return `Para ser un número de dos cifras te faltan ${cifraFaltante} unidades`
        }
        else{
        cifraFaltante = (100 + +number) * -1
        return `Para ser un número de tres cifras te faltan ${cifraFaltante} unidades`
        }
    }
}

console.log(twoOrThreeDigits())

//Ejercicio 11
function averageNotes(notes){
    let numberOfNotes = notes.length
    let suma = 0
    for (let i=0; i<numberOfNotes; i++){
        suma = suma + notes[i]
    }
    return suma/numberOfNotes
}

console.log(averageNotes([5,5,5,4]))

//Ejercicio 12
function sumarConsecutivos(number){
    /**
    * Suma todos los numeros consecutivos hasta llegar al número máximo entregado
    * @param  number {int} un número para terminar
    * @return {int} la suma de los números
    */
    let i = 1;
    let resultado = 0;
    for (i=1; i<=number; i++)
    resultado = resultado + i;
    return resultado
}
let sumaConsecutiva = sumarConsecutivos(100);
console.log(sumaConsecutiva)