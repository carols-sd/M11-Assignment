//STEP 1
// Create an application that gets the number of days in a month. 
// Display that result within the console window.

// Arguments are integers representing month and year
// Returns number of days in that month
function daysInMonth(month, year) {
    return new Date(myYear, myMonth, 0).getDate()
}

let myMonth = 2
let myYear = 2024
console.log(`Month ${myMonth} in year ${myYear} has ${daysInMonth(myMonth, myYear)} days`)


//STEP 2
// Create an application that gets the month name from a particular date. 
// Display that result within the console window.

function getMonthName(d) {
    return d.toLocaleString('default', {month: 'long'})
}
let myDate = new Date();
console.log(getMonthName(myDate))


//STEP 3
// Create an application that tests whether a date is a weekend. 
// Display that result within the console window.

// Sun is 0
// Sat is 6
function isWeekend (d) {
    return ([0,6].includes(d.getDay()))
}
myDate = new Date(2024, 1, 3)
console.log(`Is ${myDate.toDateString()} a weekend?  ${isWeekend(myDate)}`)


//STEP 4
// Create an application that gets yesterday’s day of the week. 
// For instance, if today is Tuesday, the console window should display Monday.

let today = new Date()
let yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 1)
console.log("Yesterday was " + yesterday.toLocaleString('default', {weekday: 'long'}))


//STEP 5
// Create an application that gets the current day of the week. 
// The twist here is that I want only the first letter of the day. 
// If today is Tuesday, the letter T should be displayed in the console window.

today = new Date()
console.log(today.toLocaleString('default', {weekday: 'long'})[0])


