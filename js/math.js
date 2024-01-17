//STEP 1
// Create an application that prompts the user for a number. 
// Regardless of whether they enter a negative or positive number, 
// make sure to display the positive version of that number in the console window. 
// If I enter -15 in the prompt and -15 is displayed in the console window, you did 
// this one wrong.

let myNum = prompt("Enter a number to find the absolute value of:")
console.log(Math.abs(myNum))


//STEP 2
// Create an application that prompts the user for a floating point value (decimal). 
// Store the result of that input in a variable and then round it up to the nearest 
// whole number. Display the result within a console window.

let myFloat = prompt("Enter a decimal number to round up:")
console.log(Math.ceil(myFloat))


//STEP 3
// Create an application that prompts the user for a floating point value (decimal). 
// Store the result of that input in a variable and then round it down to the nearest 
// whole number. Display the result within a console window.

myFloat = prompt("Enter a decimal number to round down:")
console.log(Math.floor(myFloat))


//STEP 4
// Create an application that prompts the user for 5 numbers. Ask them to comma delimit 
// each number so you get 1,2,3,4,5 for example. Store the result of that input in a 
// variable and then find the largest and smallest numbers in that list. Display both of 
// those numbers within a console window.

let myNums = prompt("Enter 5 numbers separated by commas (e.g., 1,2,3,4,5):")
// Convert string to array of numbers
myNums = myNums.replaceAll(" ", "").split(",").map(x => parseFloat(x))
console.log("max:" + Math.max(...myNums) + ", min:" + Math.min(...myNums))


//STEP 5
// Create an application that prompts the user for a number. Now find the square root 
// of that number and display the result within a console window.

myNum = prompt("Enter a number to find the square root of:")
console.log(Math.sqrt(myNum))

