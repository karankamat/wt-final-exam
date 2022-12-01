let today = new Date();
let christmas_date = new Date(2022, 11, 25);
let dayMilliseconds = 1000 * 60 * 60 * 24;
let remainingDays = Math.ceil((christmas_date.getTime() - today.getTime()) / (dayMilliseconds));

console.log("There are " + remainingDays + " days remaining until Christmas 2022.");
