const myBtn = document.getElementById('myBtn') ; 
const cntClic = document.getElementById('cntClic') ; 
let nbClic = 0 ; 

function countClick() {
    myBtn.addEventListener("click", () => {
        nbClic += 1;
        console.log(nbClic);
    })
    return 
}


countClick();








