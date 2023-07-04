export default function Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
}){
    function reset(){
        buttonPlay.classList.remove("hide")
        buttonPause.classList.add("hide")
        buttonSet.classList.remove("hide")
        buttonStop.classList.add("hide")
    }

    function Play(){
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
    }

    function Pause(){
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }

    return{
        reset,
        Play,
        Pause
    }
}