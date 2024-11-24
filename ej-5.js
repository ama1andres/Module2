//ej
const student = {
    name: "John Doe",
    grades: [
        { name: "math", grade: 10 },
        { name: "science", grade: 100 },
        { name: "history", grade: 70 },
        { name: "PE", grade: 90 },
        { name: "music", grade: 99 }
    ]
};

let gradeSum = 0;
let highest = student.grades[0];
let lowest = student.grades[0];

for (let subject of student.grades) {
    gradeSum += subject.grade;
    if (subject.grade > highest.grade) highest = subject;
    if (subject.grade < lowest.grade) lowest = subject;
}

const result = {
    name: student.name,
    gradeAvg: gradeSum / student.grades.length,
    highestGrade: highest.name,
    lowestGrade: lowest.name
};

console.log(result);
