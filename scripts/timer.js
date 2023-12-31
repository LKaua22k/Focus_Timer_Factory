import Sounds from "./sounds.js"

export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls,
    minutes
}) {

    let timerTimeOut

    function countDown(){
        timerTimeOut = setTimeout(() => {
          let minutes = Number(minutesDisplay.textContent)
          let seconds = Number(secondsDisplay.textContent)
          let isFinish = minutes <= 0 && seconds <= 0
        
          UpdateDisplay(minutes,0)

          if (isFinish){
            resetControls()
            UpdateDisplay()
            Sounds().finishbTimer()
            return
          }
      
      
          if(seconds <= 0){
            seconds = 60    
            
            --minutes
          }

          console.log(seconds)
      
          //  secondsDisplay.textContent = String(seconds -1).padStart(2 , "0")
          UpdateDisplay(minutes,String(seconds -1))
          countDown()
        }, 1000)
    }
      
    function reset(){
    UpdateDisplay(minutes, 0)
    clearInterval(timerTimeOut)
    }

    
    function UpdateDisplay(newMinutes,seconds){
        
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds

        minutesDisplay.textContent = String(newMinutes).padStart(2 , "0") 
        secondsDisplay.textContent = String(seconds).padStart(2 , "0") 
    }

    function hold(){
        clearInterval(timerTimeOut)
    }

    function Minutes(newMinutes){
        minutes = newMinutes
    }

    return {
        countDown,
        reset,
        UpdateDisplay,
        Minutes,
        hold
    }
}