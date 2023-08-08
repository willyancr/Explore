
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const numRandon = Math.floor(Math.random() * 5)
let xAttempts = 1

function handleClick(event){ //função verifica se o num digitado é igual ao randon gerado
    event.preventDefault() //Não faz o envio de formulário padrão
    
    const inputNumber = document.querySelector('#inputNumber')
    
    if(Number(inputNumber.value) == numRandon){
        screen1.classList.add('hide')
        screen2.classList.remove('hide')
        
        document.querySelector('.screen2 h2').innerText = `Acertou em ${xAttempts} tentativas`    
    }
    
    inputNumber.value = "" // Limpar o campo digitado
    xAttempts++
}

//Eventos
const btnTry = document.querySelector('#btnTry')
const btnPlayAgain = document.querySelector('#btnPlayAgain')

btnTry.addEventListener('click', handleClick) // ao clicar no botão tentar, chama a função handleClick
btnPlayAgain.addEventListener('click', function(){ // ao clicar no botão jogar novamente, volta pra primeira pagina

    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    xAttempts = 1

})