


function balanceScale() { 
    const balanceIcon = document.getElementById("balanceIcon");

    balanceIcon.innerHTML = "&#xf24e; num 1"

    setTimeout(() => {
        balanceIcon.innerHTML = "&#&#xf24f; num 2"
    },1000)

    setTimeout(() => {
        balanceIcon.innerHTML = "&#xf24e; num 3 "
    },2000)

    setTimeout(() => {
        balanceIcon.innerHTML = "&#&#xf24f; num 4"
    },3000)


    } 

balanceScale(); 
setInterval(balanceScale, 4000) 