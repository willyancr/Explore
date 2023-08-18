import { handleVariables } from "./main.js"
import { counterDown, pauseTime, updateTimerDisplay } from "./timer.js"
import Sound from "./sound.js"
export {handleMute,handlePause,handlePlay,handleRepeat,handleVolume}

const sound = Sound()

function handlePlay() {
    handleVariables.buttonPause.classList.remove('hide')
    handleVariables.buttonRepeat.classList.remove('hide')
    handleVariables.buttonPlay.classList.add('hide')
    handleVariables.buttonTimer.classList.add('hide')
    counterDown()
}
function handlePause() {
    handleVariables.buttonPause.classList.add('hide')
    handleVariables.buttonPlay.classList.remove('hide')
    handleVariables.buttonRepeat.classList.remove('hide') 
    pauseTime()
}
function handleRepeat() {
    handleVariables.buttonRepeat.classList.remove('hide')
    handleVariables.buttonPlay.classList.remove('hide')
    handleVariables.buttonPause.classList.add('hide')
    handleVariables.buttonTimer.classList.add('hide')

    updateTimerDisplay()
    pauseTime()
}
function handleVolume() {
    handleVariables.buttonMute.classList.remove('hide')
    handleVariables.buttonVolume.classList.add('hide')
    sound.bgAudio.play()
}
function handleMute() {
    handleVariables.buttonMute.classList.add('hide')
    handleVariables.buttonVolume.classList.remove('hide')
    sound.bgAudio.pause()
}