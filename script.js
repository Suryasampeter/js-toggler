var light = document.querySelector(".light");
var body =document.querySelector('body');


light.addEventListener('click', (e)=>{
    console.log("clicked light")
    body.style.background = 'white'
    body.style.color = 'black'
    body.style.transition = '0.5s ease'
})


var dark = document.querySelector(".dark");
dark.addEventListener('click', (e)=>{
    console.log("clicked dark")
    body.style.background = 'black'
    body.style.color = 'white'
    body.style.transition = '0.5s ease'
})