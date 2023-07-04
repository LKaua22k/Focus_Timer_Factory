export default function Sounds(){

    let buttonPressAudio = new Audio(
        "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
      )

    let kitchenTimer = new Audio(
        "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
      )

    let bgAudio = new Audio(
        "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true"
    )
    
    function pressButton(){
        buttonPressAudio.play()
    }

    function finishbTimer(){
        kitchenTimer.play()
    }

    function playBg(){
        bgAudio.play()
    }

    function pauseBg(){
        bgAudio.pause()
    }

    return{
        pressButton,
        finishbTimer,
        playBg,
        pauseBg
    }
}