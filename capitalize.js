function capitalizeWords(str) {
    let words = str.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let firstLetter = word[0].toUpperCase();
        let rest = word.slice(1);
        result += firstLetter + rest + " ";
    }
    return result.trim();
}


console.log(capitalizeWords("the quick brown fox"));

