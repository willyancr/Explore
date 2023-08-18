export default () => {
    const alarmAudio = new Audio('https://github.com/willyancr/Explore/blob/main/JavaScript/aplicativo-foco/music/alarm.mp3?raw=true')
    const bgAudio = new Audio('https://github.com/willyancr/Explore/blob/main/JavaScript/aplicativo-foco/music/musicFocus.mp3?raw=true')
    
    function alarm(){
        alarmAudio.play()
    }
    
    
    return {
        alarm,
        bgAudio
    }
}