'use strict';

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

var people = [
    new Person("Scott", "Guthrie", 38),
    new Person("Scott", "Johns", 36),
    new Person("Scott", "Hanselman", 39),
    new Person("Jesse", "Johns", 57),
    new Person("Jon", "Skeet", 38)
];

function groupBy(criteria) {
    var result = {},
        person,
        personStr;

    for(person in people) {
        personStr = people[person].firstName + ' ' +
            people[person].lastName + '(age ' + people[person].age + ')';
        if(result['Group ' + people[person][criteria]] === undefined) {
            result['Group ' + people[person][criteria]] = [ personStr ];
        }
        else {
            result['Group ' + people[person][criteria]].push(personStr);
        }
    }
    return result;
}
console.log(groupBy('firstName'));
console.log();
console.log(groupBy('lastName'));
console.log();
console.log(groupBy('age'));