// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  // Difine the criterias that will be chosen
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChars = "0123456789";
  const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
  // Ask the user about the length of the password
  let length = prompt("Enter password length (between 8 and 128):");
  // make sure the length between 8 and 128 characters
  if (length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }
  // Confirm the criterias that will be chosen to generate the random password
  let includeLowercase = confirm("Use lowercase characters?");
  let includeUppercase = confirm("Use uppercase characters?");
  let includeNumeric = confirm("Use numeric characters?");
  let includeSpecial = confirm("Use special characters?");

  let charSets = [];

  if (includeLowercase) charSets.push(lowercaseChars);
  if (includeUppercase) charSets.push(uppercaseChars);
  if (includeNumeric) charSets.push(numericChars);
  if (includeSpecial) charSets.push(specialChars);

  let charSetsAll = charSets.join("");
  // console.log(charSets);
  // console.log(charSetsAll);
  //make sure the user chose at least one criteria
  if (charSets.length === 0) {
    alert("Please select at least one character type.");
    return "";
  }

  let password = "";

  // Make sure the password has at least one character type
  charSets.forEach((charSet) => {
    password += charSet[Math.floor(Math.random() * charSet.length)];
  });

  // Generate the remaining password rondomly from the selected criterias
  let remainingLength = length - password.length;
  for (let i = 0; i < remainingLength; i++) {
    password += charSetsAll[Math.floor(Math.random() * charSetsAll.length)];
  }
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
// Execute the function when click the button to generate a password
generateBtn.addEventListener("click", writePassword);
