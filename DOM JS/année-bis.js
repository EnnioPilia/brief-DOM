let check = document.getElementById("check") ; 

check.addEventListener("click", () => { 
    let year = document.getElementById("year").value ; 

        if (year % 4 === 0){
            console.log(`l'année ${year} est bisextile`);
        } else {
            console.log(`l'année ${year} n'est pas bisextile`);
        }

}); 
