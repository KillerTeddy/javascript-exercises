const palindromes = function (word) {
    const processedWord = word.toLowerCase().replace(/[^a-z]/gi, "")
    const reversedWord = processedWord.split("").reverse().join("")
    return reversedWord == processedWord
};

// Do not edit below this line
module.exports = palindromes;
