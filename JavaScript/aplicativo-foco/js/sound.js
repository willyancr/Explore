export default () => {
    const alarmAudio = new Audio('https://drive.google.com/file/d/1nWoyUfGoZPX5bEMBV6x825fM0Vd9Nz3b/view?usp=sharing')
    const bgAudio = new Audio('https://github.com/willyancr/Explore/blob/main/JavaScript/aplicativo-foco/music/musicFocus.mp3?raw=true')
    //const bgAudio = new Audio('./music/musicFocus.mp3')

    function alarm(){
        alarmAudio.play()
    }
    
    
    return {
        alarm,
        bgAudio
    }
}