function longestWord(str) {
    let words = str.split(" ");
    let longest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
console.log(longestWord("Web Development and App Development"));
