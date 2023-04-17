const findTheOldest = function(people) {
    return people.reduce((oldestPerson, person) => {
        if (!("yearOfDeath" in person)) {
            const date = new Date()
            person.yearOfDeath = date.getFullYear()
            console.log("No year of death found!")
        }
        const age = person.yearOfDeath - person.yearOfBirth;
        const oldestPersonAge = oldestPerson ? oldestPerson.yearOfDeath - oldestPerson.yearOfBirth : 0;
        console.table(person)
        return age > oldestPersonAge ? person : oldestPerson;
      }, null);

};

// Do not edit below this line
module.exports = findTheOldest;
