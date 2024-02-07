const passwordInput = document.getElementById("gen-password");
const copyBtn = document.getElementById("copy-btn");
const generateBtn = document.getElementById("gen-btn");
const length = document.getElementById("length");
const lengthValue = document.querySelector(".lengh-label");
const uppChk = document.getElementById("uppercase");
const lowrChk = document.getElementById("lowercase");
const numChk = document.getElementById("numbers");
const symChk = document.getElementById("symbols");


const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numbersChars = "0123456789";
const symbolsChars = "!@#$%^&*()";


function generatePassword() {
    let chksTick = uppChk.checked || lowrChk.checked || numChk.checked || symChk.checked;
    if(chksTick){ 
        let chars = "";

        chars += uppChk.checked ? uppercaseChars : "";
        chars += lowrChk.checked ? lowercaseChars : "";
        chars += numChk.checked ? numbersChars : "";
        chars += symChk.checked ? symbolsChars : "";
    
        let charsLength = chars.length;
        let password = ""
    
        for (let i = 0; i < length.value; i++) {
            let randomIndex = Math.floor(Math.random() * charsLength);
            password += chars[randomIndex];
        }
    
        passwordInput.value = password;
    }
}

function updateLabel() {
    lengthValue.textContent = length.value;
}

function copyPassword() {
    navigator.clipboard.writeText(passwordInput.value)
}

length.addEventListener("input", updateLabel);
generateBtn.onclick = generatePassword;
copyBtn.onclick = copyPassword;