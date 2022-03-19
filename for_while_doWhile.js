function giveMeTen(number){
    /**
    * Adivinar los siguientes 10 números a una cifra dada
    * @param  number {int} un número para iniciar.
    * @return {int} imprime en pantalla los sigueintes 10 números que siguen a la cifra dada
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

function contarTresEnTres(min, max){
    /**
    //* conta de 3 en tres desde una cifra dada para iniciar, hasta una cifra dada para detenerse
    //* @param  min {int} un número desde donde debe empezarse a contar
    //* @param  max {int} un número hasta donde se debe contar
    //* @return {int} imprime en pantalla los numeros de tres en tres hasta el número máximo
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

let cifrasTresEnTres = contar(0, 12);
console.log(cifrasTresEnTres);

function factorial(number){
    let i = number;
    let resultado = 1;
    for (i=number; i>0; i--)
    resultado = resultado * i;
    return resultado
}

let conteo = factorial(5);
console.log(conteo)

