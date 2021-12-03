const sumAll = function(first, last) {
    if (!isInteger(first) || !isInteger(last)) {
        return "ERROR";
    }
    if (first < 0) {
        return "ERROR";
    }
    if (first > last) {
        let temp = first;
        first = last;
        last = temp;
    }

    let sum = 0;
    for (let i = first; i <= last; i++) {
        sum += i;
    }
    return sum;
};

function isInteger(num) {
    return typeof(num) === "number" && Math.round(num) === num;
}

// Do not edit below this line
module.exports = sumAll;
