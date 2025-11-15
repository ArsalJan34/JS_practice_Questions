function isPalindrome(str) {
    let clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reverse = clean.split("").reverse().join("");
    return clean === reverse;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
