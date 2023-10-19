/**
 * 
 * @param {string} string 
 * @returns {string}
 */
const reverseString = function (string) {
    if (string === "" || string === undefined) {
        return "";
    }

    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
};

/**
 * Instead you could've just split the string using "" as the delimiter 
 * and then reversed the array and rejoined it
 */

// Do not edit below this line
module.exports = reverseString;
