/*
    Capturar 2 números e fazer as perações matemáticas
    de soma, subtração, multiplicação, divisão e resto
    da divisão.

    E para cada operação, mostrar um alerta com o resultado
*/

let num1 = prompt("Digite o primeiro número:")
let num2 = prompt("Digite o segundo número: ")

num1 = Number(num1)
num2 = Number(num2)

const soma = num1 + num2 // const: variavél que não precisa ser alterada, vai ser constante
const sub = num1 - num2
const mult = num1 * num2
const div = num1 / num2
const restDiv = num1 % num2

alert('O valor da soma: ' + soma)
alert('O valor da subtração: ' + sub)
alert('O valor da multiplicação: ' + mult)
alert('O valor da divisão: ' + div)
alert('O valor do resto da divisão: ' + restDiv)
