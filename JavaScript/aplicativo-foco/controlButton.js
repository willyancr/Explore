
let receiveMinutes 
let timeOut

const handleVariables = {
     buttonPlay : document.querySelector('.play'),
     buttonPause : document.querySelector('.pause'),
     buttonRepeat : document.querySelector('.repeat'),
     buttonTimer : document.querySelector('.timer'),
     buttonVolume : document.querySelector('.volume'),
     buttonMute : document.querySelector('.mute'),
     minutes : document.querySelector('.minutes'),
     seconds : document.querySelector('.seconds'),
}
function handlePlay(){
    handleVariables.buttonPause.classList.remove('hide')
    handleVariables.buttonRepeat.classList.remove('hide')
    handleVariables.buttonPlay.classList.add('hide')
    handleVariables.buttonTimer.classList.add('hide')
    counterDown()
}
function handlePause(){
    handleVariables.buttonPause.classList.add('hide')
    handleVariables.buttonPlay.classList.remove('hide')
    handleVariables.buttonRepeat.classList.remove('hide')   
    pauseTime()
}
function handleRepeat(){
    handleVariables.buttonRepeat.classList.remove('hide')
    handleVariables.buttonPause.classList.add('hide')
    handleVariables.buttonPlay.classList.remove('hide')
    handleVariables.buttonTimer.classList.add('hide')
    handleVariables.minutes.textContent = String(receiveMinutes).padStart(2,'0')
    handleVariables.seconds.textContent = '00'
    pauseTime()
}
function handleVolume(){
    handleVariables.buttonMute.classList.remove('hide')
    handleVariables.buttonVolume.classList.add('hide')
}
function handleMute(){
    handleVariables.buttonMute.classList.add('hide')
    handleVariables.buttonVolume.classList.remove('hide')
}
function handleTimer(){
    receiveMinutes = prompt('Quantos minutos')
    handleVariables.minutes.textContent = String(receiveMinutes).padStart(2,'0')
}
function handleMinutes(){
    receiveMinutes = prompt('Quantos minutos')
    handleVariables.minutes.textContent = String(receiveMinutes).padStart(2,'0')
    handleVariables.seconds.textContent = '00'
}

export function controlButton(){
    handleVariables.buttonPlay.onclick = handlePlay
    handleVariables.buttonPause.onclick = handlePause
    handleVariables.buttonRepeat.onclick = handleRepeat
    handleVariables.buttonVolume.onclick = handleVolume
    handleVariables.buttonMute.onclick = handleMute
    handleVariables.buttonTimer.onclick = handleTimer
    handleVariables.minutes.onclick = handleMinutes
    
}
controlButton()

function counterDown(){
        timeOut = setTimeout(function(){
        let receiveSeconds = Number(handleVariables.seconds.textContent)
        let receiveMinutes = Number(handleVariables.minutes.textContent)

        if(receiveMinutes <= 0){
            handleRepeat()
            
            handleVariables.minutes.textContent = String(receiveMinutes).padStart(2,'0')
            return
        }
        
        if(receiveSeconds <= 0){
            receiveSeconds = 60
            
            handleVariables.minutes.textContent = String(receiveMinutes - 1).padStart(2,'0')
        }
        handleVariables.seconds.textContent = String(receiveSeconds - 1).padStart(2,'0')
        counterDown()
    }, 1000)

}
function pauseTime(){
    clearTimeout(timeOut)
}

