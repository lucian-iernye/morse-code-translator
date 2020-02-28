const char = {  
    0:"-----",
    1:".----",
    2:"..---",
    3:"...--",
    4:"....-",
    5:".....",
    6:"-....",
    7:"--...",
    8:"---..",
    9:"----.",
    a:".-",
    b:"-...",
    c:"-.-.",
    d:"-..",
    e:".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..", 
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    " ": " "
};

const translate = morse => morse.toLowerCase().split("").map(mapLetter).join(" ");

const mapLetter = letter => char[letter]; 

const writeOutput = () => {
    let message = document.getElementById("text").value;
    document.getElementById("result").value = translate(message);
}

document.getElementById("translate").addEventListener("click", writeOutput);