const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const stop = document.querySelector('.stop')
const timer = document.querySelector('.timer')
const volume = document.querySelector('.volume')
const mute = document.querySelector('.mute')

export function controlButton(){
    play.onclick = () => {
        pause.classList.remove('hide')
        stop.classList.remove('hide')
        play.classList.add('hide')
        timer.classList.add('hide')
    }
    pause.onclick = () => {
        pause.classList.add('hide')
        stop.classList.add('hide')
        play.classList.remove('hide')
        timer.classList.remove('hide')
    }
    volume.onclick = () =>{
        mute.classList.remove('hide')
        volume.classList.add('hide')
    }
    mute.onclick = () =>{
        mute.classList.add('hide')
        volume.classList.remove('hide')
    }
}
controlButton()

