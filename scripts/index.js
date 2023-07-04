import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  buttonStop,
  minutesDisplay,
  secondsDisplay}  from "./elements.js"
import Events from "./events.js"


let minutes = Number(minutesDisplay.textContent)

const sound = Sounds()

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
})
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  minutes
})

function UpdateMinutes(){
  let newMinutes = prompt("Quantos Minutos")

  if(!newMinutes || newMinutes == 0){
    timer.reset()
    return
  }

  minutes = newMinutes
  timer.UpdateDisplay(minutes,0)
  timer.Minutes(minutes)
}

Events({controls,timer,sound,UpdateMinutes})

