// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChars = "0123456789";
  const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
  let length = prompt("Enter password length (between 8 and 128):");
  if (length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }

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

  if (charSets.length === 0) {
    alert("Please select at least one character type.");
    return "";
  }

  let password = "";

  // Ensure that each selected character set contributes at least one character
  charSets.forEach((charSet) => {
    password += charSet[Math.floor(Math.random() * charSet.length)];
  });

  //The remaining characters
  let remainingLength = length - password.length;
  for (let i = 0; i < remainingLength; i++) {
    password += charSetsAll[Math.floor(Math.random() * charSetsAll.length)];
  }
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
