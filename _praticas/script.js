
const preco = prompt ('Preço: ')
const avista = preco - (preco * 0.10) 
const parcelado = Number(preco) / 3
//parcelado = parcelado.toFixed(1)

alert(`O valor a vista com desconto de 10%: R$ ${avista} \n Valor parcelado em 3x: R$ ${parcelado}`)