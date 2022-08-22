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
    











let password = 'Glucose7!!6'

//checks variables to make sure requirements are met
//set all to false at first and will only meet password requirements after all booleans set true.
let minChars = false
let numCheck = false
let upperCheck = false
let letterCheck = false

for(let i = 0; i < password.length; i++){
  //Checking if the password contains a letters. If i !isNaN (if i[any character in the password] is Not a Number) than numCheck becomes true.
  if(!isNaN(+password[i])){
    numCheck = true
  }

  //checking if the character is uppercase. within the same for statement for ease. Also have to add && isNaN(not a number) because numbers will fail this test reading as lowercase.
  if(password[i] === password[i].toUpperCase() && isNaN(+password[i])){
    upperCheck = true
  }
}

//check that the password has a letter. New code, very useful. 
if(/[a-zA-Z].test(password)/){
  letterCheck = true
}

//check that password meets minimum and maximum characters. Did this on original. This adds maximum password length as well and will activate else statement without needing a variable called maxChars. 
if(password.length >= 10 && password.length <= 20){
  minChars = true
}

if(minChars && letterCheck && upperCheck && numCheck){
  console.log('Your password fills all the requirements')
} else {
  console.log('The password does not fill all requirements')
}

