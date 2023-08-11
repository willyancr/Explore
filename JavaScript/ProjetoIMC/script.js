//váriaveis 
const form = document.querySelector('form')
const inputWeight = document.querySelector('#inputWeight')
const inputHeight = document.querySelector('#inputHeight')

const popup = {
    //Váriaveis da pagina popup
    popUpContainer: document.querySelector('.popUp-container'),
    popUpMessage: document.querySelector('.popUp span'),
    btnClose:  document.querySelector('.popUp .btnClose'),

    open(){ //Função abrir o popup
        popup.popUpContainer.classList.add('open')
    },
    close(){//Função fechar o popup
        popup.popUpContainer.classList.remove('open')
    }

}
//Função ao evento botão submit
form.onsubmit = function(event){
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value
    
    const result = calcIMC(weight, height)
    const message = `Seu IMC é de ( ${result} )`

    popup.popUpMessage.innerText = message
    popup.open()

    inputWeight.value = ''
    inputHeight.value = ''
}
//Função calcular IMC
function calcIMC(weight, height){ 

    return (weight / ((height/100) ** 2)).toFixed(2)  
}
//Função botão fechar no popup
popup.btnClose.onclick = () => {
    popup.close()
}

