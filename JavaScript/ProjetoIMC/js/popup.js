//página popup
export const popup = {
    //Váriaveis da pagina popup
    popUpContainer: document.querySelector('.popUp-container'),
    popUpMessage: document.querySelector('.popUp span'),
    btnClose: document.querySelector('.popUp .btnClose'),

    open() { //Função abrir o popup
        popup.popUpContainer.classList.add('open')
    },
    close() {//Função fechar o popup
        popup.popUpContainer.classList.remove('open')
    }
}
//Função botão fechar no popup
popup.btnClose.onclick = () => {
    popup.close()
}
//Função fechar popup tecla ESC
document.addEventListener('keydown', handleEsc)
function handleEsc(e){
    if(e.key === 'Escape'){
        popup.close()
    }
}
export function displayResultMessage(result){
    let message = ``
    if(result < 18.5){ 
        message = `Seu IMC é de: ${result}
        Classificação: Magreza`
        popup.open()
    }else if(result >= 18.5 && result <= 24.9){
        message = `Seu IMC é de: ${result}
        Classificação: Normal`
        popup.open()
    }else if(result >= 25 && result <= 29.9){
        message = `Seu IMC é de: ${result}
        Classificação: Sobrepeso`
        popup.open()
    }else if(result >= 30 && result <= 39.9){
        message = `Seu IMC é de: ${result}
        Classificação: Obesidade`
        popup.open()
    }else{
        message = `Seu IMC é de: ${result}
        Classificação: Obesidade Grave`
        popup.open()
    }
    popup.popUpMessage.innerText = message
}