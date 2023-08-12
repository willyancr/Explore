import { displayResultMessage } from "./popup.js"
import { popupAlert } from "./alert.js"
import { calcIMC,notNumber } from "./utils.js"

//váriaveis 
const form = document.querySelector('form')
const inputWeight = document.querySelector('#inputWeight')
const inputHeight = document.querySelector('#inputHeight')

//fechar a janela de erro ao digitar no campo
inputWeight.oninput = () => popupAlert.close()
inputHeight.oninput = () => popupAlert.close()

//Função ao evento botão submit
form.onsubmit = event => {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if(weightOrHeightIsNotANumber){
        popupAlert.open()
        return;
    }else{
        popupAlert.close()
    }

    const result = calcIMC(weight, height)    
    displayResultMessage(result)

    inputWeight.value = ''
    inputHeight.value = ''
}
// function displayResultMessage(result){
//     const message = `Seu IMC é de ( ${result} )`

//     popup.popUpMessage.innerText = message
//     popup.open()
// }






