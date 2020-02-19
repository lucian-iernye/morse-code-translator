let message = document.getElementById("text").value; 
console.log(message);
const char = {  
    "0":"-----",
    "1":".----",
    "2":"..---",
    "3":"...--",
    "4":"....-",
    "5":".....",
    "6":"-....",
    "7":"--...",
    "8":"---..",
    "9":"----.",
    "a":".-",
    "b":"-...",
    "c":"-.-.",
    "d":"-..",
    "e":"."
};

const translate = morse => {
    return morse.split("").map(mapLetter).join(" ");
}

const mapLetter = letter => {
    return char[letter]; 
}

let output = document.getElementById("result");

output.innerHTML = message;

document.getElementById("translate").addEventListener("click", () => translate(message));
