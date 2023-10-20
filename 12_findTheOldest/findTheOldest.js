/**
 * 
 * @param {Array<{name: string, yearOfBirth: number, yearOfDeath?: number}>} people - An array of people
 * @returns {{name: string, yearOfBirth: number, yearOfDeath?: number}} The oldest person in the people array
 */
const findTheOldest = function (people) {
    return people.reduce((person1, person2) => {
        return findAge(person1) > findAge(person2) ? person1 : person2;
    })

    function findAge(person) {
        let { yearOfBirth, yearOfDeath } = person;
        yearOfDeath = yearOfDeath ?? new Date().getFullYear();
        return yearOfDeath - yearOfBirth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
