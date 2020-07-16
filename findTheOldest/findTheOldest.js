let findTheOldest = function(people) {
    let thisYear = new Date().getFullYear();
    console.log(thisYear);
    people.forEach(person => {
        if (!person.yearOfDeath) {
            person.age = thisYear - person.yearOfBirth;
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
    });
    people.sort(function(a, b){return a.age - b.age});
    console.log(people);
    return people[people.length-1];
}

module.exports = findTheOldest
