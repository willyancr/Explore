
//PROGRAMA NÚMEROS DECRECENTES

const num = Number(prompt('Número:'))
let reply = ""

for(let i = num; i >= 1; i--){

    reply = reply + i + '\n'
}

alert(reply)