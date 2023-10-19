/**
 * 
 * @param {[any]} arr 
 * @param  {...any} items 
 */
const removeFromArray = function (arr, ...items) {
    for (let item of items) {
        if (arr.includes(item)) {
            arr = arr.filter(e => e != item);
        }
    }
    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
