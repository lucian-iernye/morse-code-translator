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

const writeOutput = () => {
    let message = document.getElementById("text").value; 
    document.getElementById("result").value = translate(message);
}
  

  document.getElementById("translate").addEventListener("click", writeOutput)