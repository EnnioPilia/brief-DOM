
var logo = document.getElementById('logo'); 
var value = 0 ; 

function animLogo(){
    if (value < 240){
        value ++

        logo.style.width = value + "px"
        logo.style.height = value + "px"
        logo.style.fontSize = value / 8 + "px"
    
    }
 
}
animLogo()
setInterval(animLogo, 1);