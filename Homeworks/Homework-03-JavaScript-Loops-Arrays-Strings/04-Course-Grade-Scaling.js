'use strict';

function gradeScale(arr) {
    for(var student in arr) {
        //students.push(arr[student]);
        var score = arr[student].score;
        score *= 1.1;
        arr[student].hasPassed = score >= 100;
        if (score % 1 !== 0) {
            score = Number(score.toFixed(1));
        }
        arr[student].score = score;
    }

    function removeFailed(element) {
        return element.hasPassed;
    }
    function ascendName(a, b) {
        return a.name > b.name;
    }

    console.log(JSON.stringify(arr.filter(removeFailed).sort(ascendName)));
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