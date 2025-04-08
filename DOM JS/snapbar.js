let snackBar = document.getElementById("snackbar");
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    snackBar.style.visibility = "visible"

    setTimeout(() => {
        snackBar.style.visibility = "hidden"
    },3000)
})
