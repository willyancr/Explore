import { handleSpanMinutes, handleTimer } from "./timer.js"
import { handleMute, handlePause, handlePlay, handleRepeat, handleVolume } from "./handleButton.js"


export const handleVariables = {
    buttonPlay: document.querySelector('.play'),
    buttonPause: document.querySelector('.pause'),
    buttonRepeat: document.querySelector('.repeat'),
    buttonTimer: document.querySelector('.timer'),
    buttonVolume: document.querySelector('.volume'),
    buttonMute: document.querySelector('.mute'),
    minutes: document.querySelector('.minutes'),
    seconds: document.querySelector('.seconds'),
}

function controlClickButton() {
    handleVariables.buttonPlay.onclick = handlePlay
    handleVariables.buttonTimer.onclick = handleTimer
    handleVariables.buttonPause.onclick = handlePause
    handleVariables.buttonRepeat.onclick = handleRepeat
    handleVariables.buttonVolume.onclick = handleVolume
    handleVariables.buttonMute.onclick = handleMute
    handleVariables.minutes.onclick = handleSpanMinutes

}
controlClickButton()



