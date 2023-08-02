
//PROGRAMA TABUADA

const num = Number(prompt('Número:'))
let reply = ""

for(let i = 1; i <= 10; i++){

    reply = reply + num + "X" + i + " = " + (num*i) + "\n"
}

alert(reply)