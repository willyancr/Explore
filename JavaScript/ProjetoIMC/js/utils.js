//Função verificar se a somente numeros nos inputs
export function notNumber(value){
    //isNaN = isso não é um número
    return isNaN(value) || value == ''
}
//Função calcular IMC
export function calcIMC(weight, height){ 

    return (weight / ((height/100) ** 2)).toFixed(2)
}


