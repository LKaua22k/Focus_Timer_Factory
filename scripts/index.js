import Controls from "./controls.js"
import Timer from "./timer.js"

const buttonPlay = document.querySelector(".Play")
const buttonPause = document.querySelector(".pause")
const buttonSet = document.querySelector(".set")
const buttonStop = document.querySelector(".stop")
const buttonSoundOn = document.querySelector(".on")
const buttonSoundOff = document.querySelector(".off")
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

const controls = Controls()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls: controls.reset()
})

// function resetControls(){
//   buttonPlay.classList.remove("hide")
//   buttonPause.classList.add("hide")
//   buttonSet.classList.remove("hide")
//   buttonStop.classList.add("hide")
// }

// function countDown(){
//   timerTimeOut = setTimeout(() => {
//     let minutes = Number(minutesDisplay.textContent)
//     let seconds = Number(secondsDisplay.textContent)

//     if (minutes <= 0 & seconds <= 0){
//       resetControls()
//       UpdateDisplay(minutes,0)
//       return
//     }


//     if(seconds <= 0){
//       seconds = 2
      
//       --minutes
//     }

//     //  secondsDisplay.textContent = String(seconds -1).padStart(2 , "0")
//     UpdateDisplay(minutes,seconds -1)
//     countDown()
//   }, 1000)
// }

// function resetTimer(){
//   UpdateDisplay(minutes, 0)
//   clearInterval(timerTimeOut)
// }

// function UpdateDisplay(minutes,seconds){
//   minutesDisplay.textContent = String(minutes).padStart(2 , "0") 
//   secondsDisplay.textContent = String(seconds).padStart(2 , "0") 
// }

function UpdateMinutes(){
  let newMinutes = prompt("Quantos Minutos")

  if(!newMinutes || newMinutes == 0){
    timer.reset()
    return
  }

  minutes = newMinutes
  timer.UpdateDisplay(minutes,0)
}

buttonPlay.addEventListener('click',function (){
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
  timer.countDown()
} )

buttonPause.addEventListener('click',function (){
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  clearInterval(timerTimeOut)
} )

buttonSet.addEventListener('click', function(){

  UpdateMinutes()
})

buttonStop.addEventListener('click', function(){
  resetControls()
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