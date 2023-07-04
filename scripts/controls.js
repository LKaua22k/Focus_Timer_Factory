export default function Controls(){
    function reset(){
        buttonPlay.classList.remove("hide")
        buttonPause.classList.add("hide")
        buttonSet.classList.remove("hide")
        buttonStop.classList.add("hide")
    }

    return{
        reset
    }
}