let password = document.getElementById("password") ; 
let checkPassword = document.getElementById("checkPassword") ; 
let alert1 = document.getElementById("message") ; 
let btn = document.getElementById("btn")
  
btn.addEventListener('click', () => { 
    if (checkPassword.value !== password.value){
        alert1.innerHTML = "the passwords entered don't match"
        alert1.style.color = "red"
    } else {
        alert1.innerHTML = "mot de passe valide"
          alert1.style.color = "green"
    }
}) 


