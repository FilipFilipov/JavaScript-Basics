'use strict';

function findYoungestPerson(array) {
    var youngest = { age: Number.MAX_VALUE };

    for(var i = 0; i < array.length; i++) {
        if(array[i].hasSmartphone && array[i].age < youngest.age) {
            youngest = array[i];
        }
    }

    return 'The youngest person is ' + youngest.firstname + ' ' + youngest.lastname;
}

var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }
];

console.log(findYoungestPerson(people));