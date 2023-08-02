
alert('### VERIFICA VELOCIDADE ###')
const speedAllowed = Number(prompt('Velocidade permitida:'))
const speedConductor = Number(prompt('Velocidade do condutor:'))

function calcTraffic(speedAllowed, speedConductor){

    const lightFine = speedAllowed * 1.20
    const seriusFine = speedAllowed * 1.20

    if(speedConductor <= speedAllowed){
        return 'Situação: Sem Multa'
    }else if(speedConductor <= lightFine){
        return 'Situação: Multa Leve'
    }else{
        return 'Situação: Multa grave'
    }
}

const resultado = calcTraffic(speedAllowed,speedConductor)
alert(resultado)