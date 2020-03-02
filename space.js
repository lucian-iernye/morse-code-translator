const changeToWords = element => {
    
    return Object.keys(char).find(key => char[key] === element) === undefined ? " " : Object.keys(char).find(key => char[key] === element);
}