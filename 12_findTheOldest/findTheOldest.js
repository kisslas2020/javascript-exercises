const findTheOldest = function(people) {
    return people.sort((a, b) => {
        let aStart = a.yearOfBirth;
        let bStart = b.yearOfBirth;
        let aEnd = a.yearOfDeath === undefined ? new Date().getFullYear() : a.yearOfDeath;
        let bEnd = b.yearOfDeath === undefined ? new Date().getFullYear() : b.yearOfDeath;
        let aAge = aEnd - aStart;
        let bAge = bEnd - bStart;
        return bAge - aAge;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
