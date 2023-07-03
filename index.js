const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonSet = document.querySelector(".set")
const buttonStop = document.querySelector(".stop")
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)

function countDown(){
  setTimeout(() => {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(minutesDisplay.textContent)

    if(seconds <= 0){
      seconds = 60
      
      minutesDisplay.textContent = String(minutes).padStart(2 , "0")
    }

    secondsDisplay.textContent = String(seconds -1).padStart(2 , "0")
  }, 1000)
}

buttonPlay.addEventListener('click',function (){
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  countDown()
} )

buttonPause.addEventListener('click',function (){
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
} )

buttonSet.addEventListener('click', function(){
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
})

buttonStop.addEventListener('click', function(){
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
})