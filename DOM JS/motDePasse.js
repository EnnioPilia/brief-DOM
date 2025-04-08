const input = document.getElementById('input'); 
const display = document.getElementById('display'); 
const checkbox = document.getElementById('checkbox') ;

checkbox.addEventListener("click", () => {
    if (checkbox.checked){
        input.type = "text";
    } else {
        input.type = "password";
    }
})

console.log(input);
