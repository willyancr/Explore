//variaveis
const speedAllowed = document.querySelector('#speedAllowed')
const speedConductor = document.querySelector('#speedConductor')
const btn = document.querySelector('#btn')
const res = document.querySelector('#res')

//evento
btn.addEventListener('click', calcTraffic)


function calcTraffic(event){
    event.preventDefault()

    const lightFine = Number(speedAllowed.value) * 1.20
    // const seriusFine = Number(speedAllowed.value) * 1.20

    if(Number(speedConductor.value) <= Number(speedAllowed.value)){
        res.innerText = 'Situação: Sem Multa'
    }else if(Number(speedConductor.value) <= lightFine){
        res.innerText = 'Situação: Multa Leve'
    }else{
        res.innerText = 'Situação: Multa grave'
    }
}
