export default function Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    resetControls
}) {

    function countDown(){
        timerTimeOut = setTimeout(() => {
          let minutes = Number(minutesDisplay.textContent)
          let seconds = Number(secondsDisplay.textContent)
      
          if (minutes <= 0 & seconds <= 0){
            reset()
            UpdateDisplay(minutes,0)
            return
          }
      
      
          if(seconds <= 0){
            seconds = 2
            
            --minutes
          }
      
          //  secondsDisplay.textContent = String(seconds -1).padStart(2 , "0")
          UpdateDisplay(minutes,seconds -1)
          countDown()
        }, 1000)
    }
      
    function reset(){
    UpdateDisplay(minutes, 0)
    clearInterval(timerTimeOut)
    }

    
    function UpdateDisplay(minutes,seconds){
        minutesDisplay.textContent = String(minutes).padStart(2 , "0") 
        secondsDisplay.textContent = String(seconds).padStart(2 , "0") 
    }

    return {
        countDown,
        reset,
        UpdateDisplay
    }
}