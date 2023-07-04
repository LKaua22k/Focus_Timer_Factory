import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"

const buttonPlay = document.querySelector(".Play")
const buttonPause = document.querySelector(".pause")
const buttonSet = document.querySelector(".set")
const buttonStop = document.querySelector(".stop")
const buttonSoundOn = document.querySelector(".on")
const buttonSoundOff = document.querySelector(".off")
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
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
  resetControls: controls.reset(),
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

buttonPlay.addEventListener('click',function (){
  sound.pressButton
  controls.Play()
  timer.countDown()
} )

buttonPause.addEventListener('click',function (){
  controls.Pause()
  timer.hold()
} )

buttonSet.addEventListener('click', function(){
  sound.pressButton
  UpdateMinutes()
})

buttonStop.addEventListener('click', function(){
  controls.reset()
  timer.reset()
})

buttonSoundOn.addEventListener('click', function(){
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function(){
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})