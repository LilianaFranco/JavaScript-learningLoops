const prompt = require ('prompt-sync')({sigint: true})

function imprimirFrase(){
    /**
    * Pide frase al usuario frase y la imprime en pantalla.
    * @return imprime en pantalla la frase del usuario.
    */
    let frase = prompt("ingresar una frase: ")
    console.log(frase)
}
imprimirFrase();

function saludar(){
    /**
    * Pide nombre al usuario frase y lo saluda por su nombre.
    * @return imprime en pantalla Hola + nombre del usuario.
    */
    let frase = prompt("ingresa tu nombre: ")
    console.log("Hola, " + frase)
}
saludar();

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

function getRandomInt(min, max) {
    /**
    * Pide frase al usuario frase y la imprime en pantalla.
    * @return imprime en pantalla la frase del usuario.
    */
    return Math.floor(Math.random() * (max - min)) + min;
}

function guessTheNumber() {
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

console.log (guessTheNumber(3))




