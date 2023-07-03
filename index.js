const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")


buttonPlay.addEventListener('click',function (){
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
} )

buttonPause.addEventListener('click',function (){
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
} )