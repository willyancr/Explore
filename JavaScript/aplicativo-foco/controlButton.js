const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonTimer = document.querySelector('.timer')
const buttonVolume = document.querySelector('.volume')
const buttonMute = document.querySelector('.mute')

controlButton()
export function controlButton(){
    buttonPlay.onclick = () => {
        buttonPause.classList.remove('hide')
        buttonStop.classList.remove('hide')
        buttonPlay.classList.add('hide')
        buttonTimer.classList.add('hide')
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
}


