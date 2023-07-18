/* 
    Solicitar o nome do aluno e as 3 notas do bimestre
    e calcular a média daquele aluno.

    A média positiva deverá ser maior que 6

    Se o aluno passou no bimestre, dar os parabéns

    Se o aluno não passou no bimestre, motivar o aluno 
    a dar o seu melhor na prova de recuperação.

    Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let student = prompt('Digite seu nome: ')
let n1 = prompt('Digite a primeira nota: ')
let n2 = prompt('Digite a segunda nota: ')
let n3 = prompt('Digite a terceira nota: ')

let average = (Number(n1) + Number(n2) + Number(n3)) / 3
average = average.toFixed(1)

if (average >= 6) {
    alert('Parabéns ' + student + ', você passou de bimestre. Sua média foi de: ' + average)
}
else if (average < 3){
    alert('Reprovado! =/ Sua média é de: '+average)
}
else {
    alert('Infelizmente ' + student + ', sua média de '+average+' ficou abaixo de 6. Esforce mais para prova de recuperação')
}