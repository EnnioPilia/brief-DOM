var btn = document.getElementById('btn') ; 
var result = document.getElementById('result') ;


btn.addEventListener("click", () => {
    let randome = Math.random();
    if (randome > 0,5 ){
        result.innerHtml = "pile"
    } else {
        result.innerHtml = "face"
        }
    console.log(randome + " : " + result.innerHTML);
});


