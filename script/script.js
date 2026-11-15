let time_input = document.querySelector('.time-input');
let clear_button = document.querySelector('.clear-button');
let result = document.querySelector('.hours_minutes_result');
let warning = document.querySelector('.warning');
let hours = 0, minutes = 0, totalDays = 0, totalHours = 0, totalMinutes = 0;
const regex = /^\d{1,2}:\d{1,2}$/; 

function getHoursMinutes (time) {
    let splitting = time.split(":");
    let inputHours = Number(splitting[0]); //first split string converted to number 
    let inputMinutes = Number(splitting[1]); //second split string converted to number
    let inputs;
    return inputs = [inputHours, inputMinutes];
}
function calcTime (inputs) { 
    hours += inputs[0];
    minutes += inputs[1];
    //calculating total hours and minutes
    let HoursFromMinutes = (minutes / 60);
    let RoundingHours = Math.trunc(HoursFromMinutes); //to give only hours, if we have 75 minutes then we'll have 1.25 hours, we only need the 1
    let calculated_hours = hours + RoundingHours;
    totalMinutes = minutes % 60; //gives remainder so in case of any number above 60 minutes it'll take the 60 (hour) and leave the rest (minutes)
    totalHours = calculated_hours % 24; //same as the totalMinutes, only in hours
    totalDays = Math.trunc(calculated_hours / 24);
}

function createResult (timeInput) {
        if (timeInput.key === "Enter") {
        if (regex.test(timeInput.target.value)) 
            {
                calcTime(getHoursMinutes(timeInput.target.value));
                timeInput.target.value = "";
                return result.textContent = `${totalDays} days, ${totalHours} hours and ${totalMinutes} minutes`
            }
        else
        {
            timeInput.target.value = ""
            return createWarning(`Wrong time input, try again.`);
        }
    } 
}

function createWarning (message) {
    warning.textContent = message;
    setTimeout(clearWarning, 6000); //to clear the warning message after 6 seconds
}

function clearWarning () {
    warning.textContent = "";
}

function clearBox () {
    hours = minutes = totalHours = totalMinutes = 0;
    result.textContent = "";
}

time_input.addEventListener("keydown", createResult)
clear_button.addEventListener("click", clearBox)