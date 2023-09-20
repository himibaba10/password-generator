let input = document.querySelector("input");
let copiedPassword = document.querySelector(".copied-text");
let copyIcon = document.getElementById("copy-icon");
let tooltip = document.querySelector(".copy-tooltip");

let upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCases = upperCases.toLowerCase();
let symbols = "~!#$%^&*()_+';:?";
let numbers = "0123456789";

//Click to generate password
document.getElementById("generate-password").onclick = () => {
  let password = "";

  //until the password length is 12
  while (password.length < 12) {
    password += upperCases[Math.floor(Math.random() * upperCases.length)];
    password += lowerCases[Math.floor(Math.random() * lowerCases.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
  }

  input.value = password;
  copiedPassword.style.visibility = "hidden";
};

// Click the icon to copy the password
copyIcon.onclick = () => {
  input.select();
  document.execCommand("copy");
  copiedPassword.style.visibility = "visible";
};

//Hover on icon to show tooltip
copyIcon.onmouseenter = () => {
  tooltip.style.display = "block";
};

//Mouse leave on icon to hide tooltip
copyIcon.onmouseleave = () => {
  tooltip.style.display = "none";
};
