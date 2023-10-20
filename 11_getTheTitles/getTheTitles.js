/**
 * 
 * @param {Array<{title: string, author: string}>} books - An array of books
 * @returns {Array<string>} An array of book titles
 */
const getTheTitles = function (books) {
    return books.map(({ title }) => title);
};

// Do not edit below this line
module.exports = getTheTitles;
