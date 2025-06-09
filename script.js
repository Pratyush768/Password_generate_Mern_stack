const passwordField = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const includeChars = document.getElementById("includeChars");
const includeNums = document.getElementById("includeNums");

// Character sets
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}[]|:;<>,.?/";
const numbers = "0123456789";

// Generate a random password
function generatePassword() {
    let length = parseInt(lengthSlider.value);
    let charset = "";

    if (includeChars.checked) charset += characters;
    if (includeNums.checked) charset += numbers;

    // If nothing selected
    if (charset.length === 0) {
        passwordField.value = "Please select an option";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    passwordField.value = password;
}

// Copy password
function copyPassword() {
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

// Event listeners
lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
    generatePassword();
});

includeChars.addEventListener("change", generatePassword);
includeNums.addEventListener("change", generatePassword);

// Generate default password on load
window.addEventListener("DOMContentLoaded", generatePassword);
