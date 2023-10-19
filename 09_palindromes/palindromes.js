/**
 * 
 * @param {string} string 
 * @returns {boolean} - Whether the string is a palindrome or not
 */
const palindromes = function (string) {
    const chars = string.toLowerCase().replace(/[^a-z\d]/g, "");
    return chars.split("").reverse().join("") == chars;
};

// Do not edit below this line
module.exports = palindromes;
