const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonTimer = document.querySelector('.timer')
const buttonVolume = document.querySelector('.volume')
const buttonMute = document.querySelector('.mute')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
let receiveMinutes 


controlButton()
export function controlButton(){
    buttonPlay.onclick = () => {
        buttonPause.classList.remove('hide')
        buttonStop.classList.remove('hide')
        buttonPlay.classList.add('hide')
        buttonTimer.classList.add('hide')
        counterDown()
    }
    buttonPause.onclick = () => {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
        
    }
    buttonStop.onclick = () => {
        buttonStop.classList.add('hide')
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
        buttonTimer.classList.remove('hide')
    }
    buttonVolume.onclick = () =>{
        buttonMute.classList.remove('hide')
        buttonVolume.classList.add('hide')
    }
    buttonMute.onclick = () =>{
        buttonMute.classList.add('hide')
        buttonVolume.classList.remove('hide')
    }
    buttonTimer.onclick = () => {
        receiveMinutes = prompt('Quantos minutos')
        minutes.textContent = String(receiveMinutes).padStart(2,'0')
    }
    
}

function counterDown(){
    setTimeout(function(){
        let receiveSeconds = Number(seconds.textContent)
        let receiveMinutes = Number(minutes.textContent)

        if(receiveMinutes <= 0){
            buttonStop.classList.add('hide')
            buttonPause.classList.add('hide')
            buttonPlay.classList.remove('hide')
            buttonTimer.classList.remove('hide')

            return
        }
        
        if(receiveSeconds <= 0){
            receiveSeconds = 5
            
            minutes.textContent = String(receiveMinutes - 1).padStart(2,'0')
        }
        seconds.textContent = String(receiveSeconds - 1).padStart(2,'0')
        counterDown()
    }, 1000)

}


