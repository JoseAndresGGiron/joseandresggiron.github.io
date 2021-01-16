function toggleMenu(){
    
    document.getElementById("primaryNav").classList.toggle("hide");
}

let daynames=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + ", " + d.getDate()  + " " + monthName  + ", " + year;


document.getElementById("lstmoddate").textContent = fulldate;
document.getElementById("currentYear").textContent = year;