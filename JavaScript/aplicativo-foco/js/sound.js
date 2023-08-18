export default () => {
    const alarmAudio = new Audio('https://github.com/willyancr/Explore/blob/main/JavaScript/aplicativo-foco/music/Bounce%20-%20Huawei%20Ringtone.mp3')
    const bgAudio = new Audio('./music/musicFocus.mp3')

    function alarm(){
        alarmAudio.play()
    }
    
    
    return {
        alarm,
        bgAudio
    }
}