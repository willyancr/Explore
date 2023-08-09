
const btn = document.querySelector('#btn')
const res = document.querySelector('#res')
//Eventos
btn.addEventListener('click', evenOdd)

//Função
function evenOdd(event){
    event.preventDefault()
    const inputNumber = document.querySelector('#inputNumber')
    
    if(Number(inputNumber.value) % 2 === 0){
        res.innerText = `O número é par`
    }else{
        res.innerText = `O número é ímpar`
    }
    inputNumber.value = ''
}


