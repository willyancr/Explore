const numRandon = Math.floor(Math.random() * 3)
let xAttempts = 1
// const button = document.querySelector('button')

function handleClick(event){
    event.preventDefault() //Não faz o envio de formulário padrão
    
    const inputNumber = document.querySelector('#inputNumber')
    
    if(Number(inputNumber.value) == numRandon){
        document.querySelector('.screen1').classList.add('hide')
        document.querySelector('.screen2').classList.remove('hide')
        
        document.querySelector('.screen2 h2').innerText = `Acertou em ${xAttempts} tentativas`
        
        
    }
    // button.addEventListener('click', function(){
    //     document.querySelector('.screen2').classList.add('hide')
    //     document.querySelector('.screen1').classList.remove('hide')
    // })
    xAttempts++
}
