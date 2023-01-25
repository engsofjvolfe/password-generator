let btn = document.querySelector("button")
let pwd1 = document.querySelector("#generated-password1")
let pwd2 = document.querySelector("#generated-password2")

btn.addEventListener('click', function () {
    pwd1.textContent = ""
    pwd2.textContent = ""
    generatePassword();
})

function generatePassword() {
    const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
        "/"];


    for (let i = 0; i < 15; i++) {
        let randomCharacter1 = Math.floor(Math.random() * characters.length)
        pwd1.textContent += characters[randomCharacter1]
        let randomCharacter2 = Math.floor(Math.random() * characters.length)
        pwd2.textContent += characters[randomCharacter2]
    }
}