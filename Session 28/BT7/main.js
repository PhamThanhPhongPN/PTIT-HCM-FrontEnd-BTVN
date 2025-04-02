let  students=[

    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature : 7 } },

    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature : 5} },

    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature : 9 } }

];

function filterStudents(students){
    students.forEach(student => {
        let scores = Object.values(student.scores);
        let sum = scores.reduce((acc, score) => acc + score, 0); 
        let average = sum / scores.length; 
        if (average >= 8){
            console.log(`${student.name}: ${average.toFixed(2)}`);
        }
    });
}

console.log(filterStudents(students));