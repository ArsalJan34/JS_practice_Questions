function countLetter(str, letter) {
    let count = 0;
    str = str.toLowerCase();
    letter = letter.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

console.log(countLetter("LetsCountLetters", "e"));
