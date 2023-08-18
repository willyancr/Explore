import { handleVariables } from "./main.js"
import Sound from "./sound.js"

let receiveMinutes
let timeOut

export function updateTimerDisplay() {
    handleVariables.minutes.textContent = String(receiveMinutes).padStart(2, '0')
    handleVariables.seconds.textContent = '00'
}
export function handleTimer() {
    receiveMinutes = prompt('Quantos minutos') || 0

    if (isNaN(receiveMinutes)) {
        alert('Por favor, digite somente números.') 
        return
    }
    updateTimerDisplay()
}
export function handleSpanMinutes() {
    receiveMinutes = prompt('Quantos minutos') || 0

    if (isNaN(receiveMinutes)) {
        alert('Por favor, digite somente números.')
        return
    }
    updateTimerDisplay()
}
export function counterDown() {
    timeOut = setTimeout(function () {
        let receiveSeconds = Number(handleVariables.seconds.textContent)
        let receiveMinutes = Number(handleVariables.minutes.textContent)

        if (receiveMinutes <= 0) {
            handleRepeat()
            Sound().alarm()
            return
        }
        if (receiveSeconds <= 0) {
            receiveSeconds = 60

            handleVariables.minutes.textContent = String(receiveMinutes - 1).padStart(2, '0')
        }
        handleVariables.seconds.textContent = String(receiveSeconds - 1).padStart(2, '0')
        counterDown()

    }, 1000)

}
export function pauseTime() { 
    clearTimeout(timeOut)
}
