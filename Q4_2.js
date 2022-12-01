function capitalizeLetters(str){
    const mySentence = str;
    const words = mySentence.split(" ");
    const cap_sent = words.map((word) => {
        return word[0].toUpperCase().concat(word.substring(1));
}).join(" ");
console.log(cap_sent);

}

console.log(capitalizeLetters("i don't love javascript"));

