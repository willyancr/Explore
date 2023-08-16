const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonRepeat = document.querySelector('.repeat')
const buttonTimer = document.querySelector('.timer')
const buttonVolume = document.querySelector('.volume')
const buttonMute = document.querySelector('.mute')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
let receiveMinutes 
let timeOut

function handlePlay(){
    buttonPause.classList.remove('hide')
    buttonRepeat.classList.remove('hide')
    buttonPlay.classList.add('hide')
    buttonTimer.classList.add('hide')
    counterDown()
}
function handlePause(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonRepeat.classList.remove('hide')
    
    pauseTime()
}
function handleRepeat(){
    buttonRepeat.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonTimer.classList.add('hide')
    minutes.textContent = String(receiveMinutes).padStart(2,'0')
    seconds.textContent = '00'
    pauseTime()
}
function handleVolume(){
    buttonMute.classList.remove('hide')
    buttonVolume.classList.add('hide')
}
function handleMute(){
    buttonMute.classList.add('hide')
    buttonVolume.classList.remove('hide')
}
function handleTimer(){
    receiveMinutes = prompt('Quantos minutos')
    minutes.textContent = String(receiveMinutes).padStart(2,'0')
}
function handleMinutes(){
    receiveMinutes = prompt('Quantos minutos')
    minutes.textContent = String(receiveMinutes).padStart(2,'0')
    seconds.textContent = '00'
}

export function controlButton(){
    buttonPlay.onclick = handlePlay
    buttonPause.onclick = handlePause
    buttonRepeat.onclick = handleRepeat
    buttonVolume.onclick = handleVolume
    buttonMute.onclick = handleMute
    buttonTimer.onclick = handleTimer
    minutes.onclick = handleMinutes
    
}
controlButton()

function counterDown(){
        timeOut = setTimeout(function(){
        let receiveSeconds = Number(seconds.textContent)
        let receiveMinutes = Number(minutes.textContent)

        if(receiveMinutes <= 0){
            handleRepeat()
            
            minutes.textContent = String(receiveMinutes).padStart(2,'0')
            return
        }
        
        if(receiveSeconds <= 0){
            receiveSeconds = 60
            
            minutes.textContent = String(receiveMinutes - 1).padStart(2,'0')
        }
        seconds.textContent = String(receiveSeconds - 1).padStart(2,'0')
        counterDown()
    }, 1000)

}
function pauseTime(){
    clearTimeout(timeOut)
}

