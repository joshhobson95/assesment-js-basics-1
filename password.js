// //let password = 'Glucose76!!'
// let chars = password.split('')
// let lettersLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// // let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]



//   if (password.length >= 10){
//     console.log("Sufficient Characters")
//   }else{
//     console.log('Not enough characters')
//   }
//   if (password.length >= 30){
//     console.log("Maximum Characters reached!")
//   }
 

// if(password[0] <= 9){
//     console.log('enough numbers')
// } else if(password[1] <= 9){
//     console.log('enough numbers')
// } else if(password[2] <= 9){
//     console.log('enough numbers')
// } else if(password[3] <= 9){
//     console.log('enough numbers')
// } else if(password[4] <= 9){
//     console.log('enough numbers')
// } else if(password[5] <= 9){
//     console.log('enough numbers')
// } else if(password[6] <= 9){
//     console.log('enough numbers')
// } else if(password[7] <= 9){
//     console.log('enough numbers')
// } else if(password[8] <= 9){
//     console.log('enough numbers')
// } else if(password[9] <= 9){
//     console.log('enough numbers')
// } else{
//     console.log('no numbers')
// }

// for (var i = 0; i < password.length; i++) {
//  if(password.charAt(i) === lettersLowercase[0])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[1])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[2])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[3])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[4])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[5])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[6])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[7])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[8])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[9])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[10])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[11])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[12])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[13])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[14])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[15])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[16])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[17])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[18])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[19])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[20])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[21])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[22])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[23])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[24])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[25])
//     console.log('one letter')
// else if(password.charAt(i) === lettersLowercase[26])
//     console.log('one letter')
// }
    
//Do the same for capital Letters
//Then try and add {} for only printing out one letter one time, completing the if and not running it through every letter. 
//also make sure TO TURN IN ON GITHUB AND FRODO LINK THE GITHUB





//Here is how the password validator was done by Alec
//Checking for Uppercase and Maximum Length


let password = 'adc123'
// all false at first
let minChars = false
let letterCheck = false
let numCheck = false
let upperCheck = false




//checks if the characters can be converted to a number data type
for(let i =0; i < password.length; i++){
        if(password[i] !== NaN){
            numCheck = true
        }
    
//checks for uppercase. if lowercase number can be changed to uppercase then there is a lowercase number and upperCheck is true.
for(let i =0; i < password.length; i++)
    console.log(password[i].toUpperCase())
        if(password[i] !== NaN)
    //must put && isNAN so that a number is not read as an upppercase
    if(password[i] === password[i].toUpperCase() && isNaN(+password[i]))
        upperCheck = true
    
}


//check that the password has a letter
if(/[a-zA-z].test(password)/){
letterCheck = true
}
console.log(letterCheck)


// multiplying i will take every character of the password and multiply it by two. if it comes back with NaN it is not a longer but a letter 
//checks for minimum characters
if(password.length >= 10){
minChars = true
}
//minChars = true sets the condition to true so that if it passes the password will be accepted

if(password.length <= 20){
    maxChars = true
}

//says if they are all true
if(minsChars && letterCheck && upperCheck && numCheck){
    console.log('Your password fills all the requirements')
} else {
    console.log('Your password does not fill all the requirements')
}
