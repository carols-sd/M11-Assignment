// Solve the following string/math/number/function/array-related problems. 
// Each solution should be written within its own function and the output should 
// be displayed within a console window. 
// The display should be the return value of the function call.

//STEP 1
// Write a JavaScript function that returns a passed string with letters in 
// alphabetical order. Assume punctuation and number symbols are not included in 
// the passed-in string.

// Sample Data and Output
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'

// Returns string with letters in alphabetical order, in all lowercase
function alphabetizeString(s) {
    return s.toLowerCase().split('').sort().join('')
}

let myString = "Webmaster"
console.log(alphabetizeString(myString))


//STEP 2
// Write a JavaScript function that accepts a string as a parameter and converts the 
// first letter of each word of the string to upper case.

// Sample Data and Output
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox'

// Returns string with the first letter of each word capitalized
function capitalizeFirstLetters(s) {
    return s.split(" ").map(word => (word[0].toUpperCase()+(word.slice(1,)))).join(" ")
}

myString = "the quick brown fox"
console.log(capitalizeFirstLetters(myString))


//STEP 3
// Write a JavaScript function that accepts a string as a parameter and counts the 
// number of vowels within the string.

// Sample Data and Output
// Example string: 'The quick brown fox'
// Expected Output: 5

// Returns true if input character is a vowel, otherwise false 
function isVowel(ch) {
    return ['a', 'e', 'i', 'o', 'u'].includes(ch.toLowerCase())
}
// Returns number of vowels in input string
function countVowels(s) {
    return s.split('').map(isVowel).reduce( (a,b) => { return a+b } )
}

myString = "The quick brown fox"
console.log("'" + myString + "' has " + countVowels(myString) + " vowels")


//STEP 4
// Write a JavaScript function that generates a string id (specified length) of random 
// characters.

// Sample Data and Output
// Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA

// Returns random integer between min and max, inclusive
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// A-Z  65-90
// a-z  97-122
// 0-9  48-57
// Returns a random alphanumeric character from A-Z, a-z, 0-9
function randomAlphanum() {
    let r = randomInt(0, 61)
    // map to ASCII for digits
    if (0<=r && r<=9) {
        r += 48
    }
    // map to ASCII for uppercase letters
    else if (10<=r && r<=35) {
        r += 55
    }
    // map to ASCII for lowercase letters
    else if (36<=r && r<=61) {
        r += 61
    }
    return String.fromCharCode(r)
}

// Returns random string of specified length
function randomString(len) {
    let str = ""
    for (let i = 0; i < len; i++) {
        str += (randomAlphanum())
    }
    return str
}

console.log(randomString(8))


//STEP 5
// Write a JavaScript function that accepts a list of country names as input and returns 
// the longest country name as output.

// Sample Data and Output
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

// Returns longest string in input array
// If there is a tie, will likely return the first longest string in the array,
// but this is not guaranteed
function getLongestString(arr) {
    // map input array of strings to array of string lengths
    let arrLen = arr.map( x => x.length)
    // find index of longest string
    let maxIndex = arrLen.indexOf(Math.max(...arrLen));
    // return string at index of longest string
    return arr[maxIndex]
}

function Longest_Country_Name(arr) {
    return getLongestString(arr)
}

let myCountryNames = ["Australia", "Germany", "United States of America"]
console.log(Longest_Country_Name(myCountryNames))

