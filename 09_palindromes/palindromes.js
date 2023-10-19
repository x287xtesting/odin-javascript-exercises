/**
 * 
 * @param {string} string 
 * @returns {boolean} - Whether the string is a palindrome or not
 */
const palindromes = function (string) {
    let chars = string.split("").filter(char => char.match(/[a-z\d]/i)).map(char => char.toLowerCase());
    console.log(chars);
    for (let i = 0; i <= Math.floor(chars.length / 2); i++) {
        if (chars[i] !== chars[chars.length - 1 - i]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
