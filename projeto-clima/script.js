
const key = '9585e8fd0c877641203fd59ba4f42610'

function handleDados(dados){
    document.querySelector('h2').innerHTML = 'Tempo em '+dados.name
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp)+ ' ºC'
    document.querySelector('.descriton').innerHTML = dados.weather[0].description
    document.querySelector('.humidity').innerHTML = 'Umidade: ' +dados.main.humidity + '%'
    document.querySelector('.img-temp').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    
}

async function api(city){
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`)
    .then(res => res.json())

    document.querySelector('input').value = ''
    handleDados(dados)
    
}

function buttonSearch(){
    const city = document.querySelector('input').value
    
    api(city)
}

document.addEventListener('keydown', handleBtnEnter)

function handleBtnEnter(e){

    if(e.key === 'Enter'){
        buttonSearch()
        
    }
}