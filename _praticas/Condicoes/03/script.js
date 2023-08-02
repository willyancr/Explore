
alert('### PROGRAMA PARQUÍMETRO ###')
const money = Number(prompt('Valor R$:'))

const time30 = money - 1
const time60 = money - 1.75
const time120 = money - 3

    
if(money < 1){
    alert(`Valor Insuficiente`)
}
else if(money > 1 && money < 1.75){
    alert(`Tempo: 30 minutos
Troco R$: ${time30}`)
}
else if (money > 1.75 && money < 3){
    alert(`Tempo: 60 Minutos
Troco R$: ${time60}`)
}
else if (money >= 3){
    alert(`Tempo: 120 Minutos
Troco R$: ${time120}`)
}   

