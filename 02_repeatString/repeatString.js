const repeatString = function (string, num) {
    if (num < 0)
        return "ERROR";
    num = num ?? Math.floor(Math.random() * 1000);
    let result = "";
    for (let i = 0; i < num; i++) {
        result = result + string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
