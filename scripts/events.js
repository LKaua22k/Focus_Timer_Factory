import {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff,
    buttonStop,
    minutesDisplay,
    secondsDisplay}  from "./elements.js"

export default function Events({controls , timer, sound, UpdateMinutes}){
    buttonPlay.addEventListener('click',function (){
        sound.pressButton()
        controls.Play()
        timer.countDown()
      } )
      
      buttonPause.addEventListener('click',function (){
        controls.Pause()
        timer.hold()
        sound.pressButton()
      } )
      
      buttonSet.addEventListener('click', function(){
        sound.pressButton()
        UpdateMinutes()
      })
      
      buttonStop.addEventListener('click', function(){
        controls.reset()
        timer.reset()
        sound.pressButton()
      })
      
      buttonSoundOn.addEventListener('click', function(){
        buttonSoundOn.classList.add('hide')
        buttonSoundOff.classList.remove('hide')
        sound.pauseBg()
      })
      
      buttonSoundOff.addEventListener('click', function(){
        buttonSoundOn.classList.remove('hide')
        buttonSoundOff.classList.add('hide')
        sound.playBg()
      })
}