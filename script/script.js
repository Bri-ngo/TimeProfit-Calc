let time = document.querySelector('.time-input');
let clear_button = document.querySelector('.clear-button');
let result = document.querySelector('.hours_minutes');
let hours = 0;
let minutes = 0;
let totalDays = 0;
let totalHours = 0;
let totalMinutes = 0;
const regex = /^\d{1,2}:\d{1,2}$/; 

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
    let calculated_hours = hours + RoundingHours;
    totalMinutes = minutes % 60; //gives remainder so in case of any number above 60 minutes it'll take the 60 (hour) and leave the rest (minutes)
    totalHours = calculated_hours % 24; //same as the totalMinutes, only in hours
    totalDays = Math.trunc(calculated_hours / 24);
}

time.addEventListener("keydown", function(event){ 
    if (event.key === "Enter") {
        if (regex.test(time.value)) 
            {
                TimeCalculation(time.value);
                time.value = "";
                result.textContent = `${totalDays} days, ${totalHours} hours and ${totalMinutes} minutes`
            }
        else
        {
            time.value = ""
            return result.textContent = `Wrong time input, try again.`
        }
    } 
})
clear_button.addEventListener("click", function(event){
    hours = minutes = totalHours = totalMinutes = 0;
    result.textContent = "";
})