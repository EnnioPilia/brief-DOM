let convert = document.getElementById("convert") ; 
const secondsInMinute = 60; 
const minutesInHour = 60; 
const hoursInDay = 24; 
const daysInYear = 365; 

convert.addEventListener("click", () => { 
    let numberOfYears = document.getElementById("numberOfYears").value ; 

    let nuMsecondsInMinute = numberOfYears  * daysInYear * hoursInDay * minutesInHour * secondsInMinute
        console.log(nuMsecondsInMinute); 
    let nuMminutesInHour = numberOfYears  * daysInYear * hoursInDay * minutesInHour
        console.log(nuMminutesInHour);
    let nuMhoursInDay = numberOfYears  * daysInYear * hoursInDay
        console.log(nuMhoursInDay);
    let NumdaysInYear = numberOfYears * daysInYear
        console.log(NumdaysInYear);
}); 

