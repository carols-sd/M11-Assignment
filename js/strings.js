//STEP 1
// Create an application that prompts the user for their name. 
// Then, find the length of characters in the person’s name. 
// Use the alert method to display the result

let userName = prompt("Enter your name:")
alert(`Length of name "${userName}" is ${userName.length} characters`);


//STEP 2
// Create an application that prompts the user for their name. 
// Then, prompt for a numeric value to use to find the letter 
// in the string based on the number they specify. 
// Use the alert method to display the result.

// userName = prompt("Enter your name:")
// let pos = prompt(`Enter an index (0 to ${userName.length}):`)
// alert(`Character at position ${pos} is '${userName.charAt(pos)}'`);


//STEP 3
// Create an application that prompts the user for their first name. 
// Then, prompt the user for their last name using a second prompt. 
// Use the alert method to display the text "Your name is: " along with 
// the result of the first name and last name concatenated together. 
// You will use a concatenation operator to concatenate the literal string with
// the result of the String object method’s result.

// let fname = prompt("Enter your first name:")
// let lname = prompt("Enter your las name:")
// alert(fname.concat(" ", lname));


//STEP 4
// Create an application that stores the text “The quick brown fox jumps over the
// lazy dog” within a variable. 
// Then, find and display within an alert the index of the word “fox”.

// let pangram = "The quick brown fox jumps over the lazy dog"
// alert("'fox' is at index " + pangram.indexOf("fox"))


//STEP 5
// Create an application that stores the text “The quick brown fox jumps over the
// lazy fox” within a variable.
// Then, find and display within an alert the index of the last instance of the word “fox”.

// pangram = "The quick brown fox jumps over the lazy fox";
// alert("The last instance of 'fox' is at index " + pangram.lastIndexOf("fox"))


//STEP 6
// Create an application that stores the text “The quick brown fox jumped over the 
// lazy dog” within a variable. 
// Then, prompt the user for their full name. 
// Then, replace the text “the lazy dog” in the variable with the name that the user
// enters within the prompt. 
// Use the alert method to display the result.

// pangram = "The quick brown fox jumps over the lazy dog"
// fullName = prompt("Enter your full name (first last):")
// alert(pangram.replace("the lazy dog", fullName))


//STEP 7
// Create an application that stores the text “The quick brown fox jumps over the 
// lazy dog” within a variable. 
// Then, prompt the user for a word. 
// Next, search for the word within the string that the user enters into the prompt. 
// Use the alert method to display the result.

// pangram = "The quick brown fox jumps over the lazy dog"
// word = prompt("Please enter a word to find:")
// index = (" " + pangram + " ").search(" " + word + " ")  // the padding is to find
// if (index == -1) {                                      // whole words, not parts of words
//     alert("The word '" + word + "' was not found") 
// } else {
//     alert("The first index of word '" + word + "' was found at index " + index)
// }


//STEP 8
// Create an application that stores the text “The quick brown fox jumps over the 
// lazy dog” within a variable called old_string. 
// Then, use slice(), substr(), or substring() to extract the words “the lazy dog” 
// from the old_string variable and store result in a second variable called new_string. 
// Use the alert method to display the uppercase result of new_string.

// let old_string = "The quick brown fox jumps over the lazy dog"
// let new_string = old_string.slice(31, 43)
// alert(new_string.toUpperCase())


//STEP 9
// Create an application that stores the text 
// “ THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. 
// Make sure to add space before and after the text so that appears very similar to 
// the text here. 
// Use the alert method to display the lowercase result of the variable once the 
// space has been trimmed off

// pangram = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          "
// alert("'" + pangram.trim().toLowerCase() + "'")


//STEP 10
// Create an application that stores the text “the quick brown fox jumps over the 
// lazy dog” within a variable. The user clearly forgot to capitalize the first letter 
// in the sentence. 
// Programmatically capitalize the first letter in the sentence and display the result 
// in an alert.

// pangram = "the quick brown fox jumps over the lazy dog"
// pangram = pangram[0].toUpperCase() + pangram.slice(1)
// alert(pangram)


