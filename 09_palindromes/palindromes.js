/**
 * 
 * @param {string} string 
 * @returns {boolean} - Whether the string is a palindrome or not
 */
const palindromes = function (string) {
    const chars = string.toLowerCase().split("").filter(c => c.match(/[a-z\d]/));
    return chars.join("") === chars.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
