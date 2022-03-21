// Ejercicio 1
function giveMeTen(number){
    /**
    * Adivinar los siguientes 10 números a una cifra dada
    * @param  number {int} un número para iniciar.
    * @return {int} imprime en pantalla los siguientes 10 números que siguen a la cifra dada
    */
    let i = 0;
    let secuencia = number;
    for (i=1; i<=10; i++){
        secuencia++;
        console.log(secuencia);
    }
}
let showMeTen = giveMeTen(23);
console.log(showMeTen);


//Ejercicio 2
function contarTresEnTres(min, max){
    /**
    //* cuenta de 3 en tres desde una cifra dada para iniciar, hasta una cifra dada para detenerse
    //* @param  min {int} un número desde donde debe empezarse a contar
    //* @param  max {int} un número hasta donde se debe contar
    //* @return {int} imprime en pantalla los números de tres en tres hasta el número máximo
    //*/
    let i=min;
    let contador = min;
    do{
        contador = contador + 3;
        console.log(contador)
        i= i+3;
    }
    while (i< max);
}
let cifrasTresEnTres = contarTresEnTres(0, 12);
console.log(cifrasTresEnTres);

//Ejercicio 3
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

//Ejercicio 4
function factorial(number){
    /**
    * Dado un numero, multiplica todos los números que senencuentra hasta llegar a 1
    * @param  number {int} un número para iniciar.
    * @return {int} imprime en pantalla la multiplicaicón de todos los números 
    */
    let i = number;
    let resultado = 1;
    for (i=number; i>0; i--)
    resultado = resultado * i;
    return resultado
}

let conteo = factorial(5);
console.log(conteo)

//Ejercicio 5
function generateFibonacci(number){
    /**
    * Dado un número entero positivo, mostrar su factorial. El factorial de
        un número se obtiene multiplicando todos los números enteros
        positivos que hay entre el 1 y ese número.
    * @param  number {int} un número para terminar
    * @return {int} imprime en pantalla todos los números fibonacci encontrados 
        desde 0 hasta le número dado por parámetro
    */
    let anterior = 0
    let siguiente = 1
    let fibonacci = 0
    for (let i = 0; i <= number; i++) {
        if (fibonacci<=number){
            console.log(anterior);
            fibonacci = anterior + siguiente;
            anterior = siguiente;
            siguiente = fibonacci;  
        }
        
    }
}

let fibonacci = generateFibonacci(21);
console.log(fibonacci)