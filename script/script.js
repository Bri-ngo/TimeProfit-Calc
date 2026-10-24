let time = document.querySelector('.time-input');
let clear_button = document.querySelector('.clear-button');
let result = document.querySelector('.hours_minutes');
let hours = 0;
let minutes = 0;
let totalHours = 0;
let totalMinutes = 0;

function TimeCalculation (input) {
    let splitting = input.split(":");
    //first split string convert to number 
    let InputHours = Number(splitting[0]);
    //second split string convert to number
    let InputMinutes = Number(splitting[1]); 
    hours += InputHours;
    minutes += InputMinutes;

    //calculating total hours and minutes
    let HoursFromMinutes = (minutes / 60);
    let RoundingHours = Math.trunc(HoursFromMinutes); //to give only hours, if we have 75 minutes then we'll have 1.25 hours, we only need the 1
    totalHours = hours + RoundingHours;
    totalMinutes = minutes % 60; //gives remainder so in case of any number above 60 minutes it'll take the 60 (hour) and leave the rest (minutes)
}

time.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        TimeCalculation(time.value);
        time.value = "";
        result.textContent = `${totalHours} hours and ${totalMinutes} minutes`
    }
})
clear_button.addEventListener("click", function(event){
    hours = minutes = totalHours = totalMinutes = 0;
    result.textContent = "";
})