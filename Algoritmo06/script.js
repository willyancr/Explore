/*
    ** JOGO DA ADVINHAÇÃO **

    Apresente a mensagem ao usuário: "Advinhe o número que estou pensando?
    Está entre 0 e 10"

    Crie uma lógica para gerar um número aleatório e verificar se o número
    digitado é o mesmo que o aleatório gerado pelo sistema.

    Enquanto o usuário não advinhar o número, mostrar amensagem:
    "Erro, tente novamente"

    Caso o usuário acerte o número, apresentar a mensagem:
    "Parabéns! Você advinhou o número em x tentativas"

    Substitua o "x" da mensagem, pelo número de tentativas

*/

let result = prompt('Tente advinhar qual número estou pensando de 0 a 10')
const numRandon = Math.floor(Math.random() * 10)
let xAttempts = 1

while(Number(result) != numRandon){
    result = prompt("Erro, tente novamente")
    xAttempts++;
}

alert(`Parabéns, você acertou em ${xAttempts} tentativas`)