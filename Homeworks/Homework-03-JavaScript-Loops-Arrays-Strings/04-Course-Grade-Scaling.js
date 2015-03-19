'use strict';

function gradeScale(arr) {
    var students = [];

    for(var student in arr) {
        students.push(JSON.parse(JSON.stringify(arr[student])));
        var score = students[student].score;
        score *= 1.1;
        students[student].hasPassed = score >= 100;
        if (score % 1 !== 0) {
            score = Number(score.toFixed(1));
        }
        students[student].score = score;
    }

    function removeFailed(element) {
        return element.hasPassed;
    }
    function ascendName(a, b) {
        return a.name > b.name;
    }
    console.log(students.filter(removeFailed).sort(ascendName));
}

gradeScale([
    {
        'name' : 'Пешо',
        'score' : 91
    },
    {
        'name' : 'Лилия',
        'score' : 290
    },
    {
        'name' : 'Алекс',
        'score' : 343
    },
    {
        'name' : 'Габриела',
        'score' : 400
    },
    {
        'name' : 'Жичка',
        'score' : 70
    }
]);