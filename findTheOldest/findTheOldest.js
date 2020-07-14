let findTheOldest = function(people) {
    people.forEach(person => person.age = person.yearOfDeath - person.yearOfBirth);
    people.sort(function(a, b){return a.age - b.age});
    return people[people.length-1];
}

module.exports = findTheOldest
