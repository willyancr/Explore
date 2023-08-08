//variáveis
const btnTry = document.querySelector('#btnTry')
const btnPlayAgain = document.querySelector('#btnPlayAgain')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const numRandon = Math.floor(Math.random() * 5)
let xAttempts = 1

//Eventos
btnTry.addEventListener('click', handleClick) // ao clicar no botão 'Tentar', chama a função.
btnPlayAgain.addEventListener('click', handleResetClick)// ao clicar no botão 'Jogar Novamente', chama a função.
document.addEventListener('keydown', handleBtnEnter)// presionar o enter chama a função

//Funções 
function handleClick(event){ //função verifica se o num digitado é igual ao randon gerado
    event.preventDefault() //Não faz o envio de formulário padrão
    
    const inputNumber = document.querySelector('#inputNumber')
    
    if(Number(inputNumber.value) == numRandon){
        toggleScreen()
        screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas` //innertext add texto em um elemento
    }
    
    inputNumber.value = "" // Limpar o campo digitado
    xAttempts++
}

function handleResetClick(){ // ao clicar no botão jogar novamente, volta pra primeira pagina
    toggleScreen()
    xAttempts = 1
}

function toggleScreen(){ //função para alternar as paginas ao clicar no botão
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function handleBtnEnter(e){ // função ao clicar no enter, volta pra primeira pagina
    if(e.key === 'Enter'){
        handleResetClick()
    }
}