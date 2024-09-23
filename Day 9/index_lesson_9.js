// Cau 1
const numbers = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
const targetCounting = 2;
let count = 0;
for ( let i = 0; i < numbers.length; i++) {
    if (numbers[i] == targetCounting ) {
        count++;
    }
}
console.log('Bai 1');
console.log(count);
// Cau 2
const numbers_1 = [5, 2, 9, 3, 7, 11, 8];
let max_1 = numbers_1[0];
for ( let i = 0; i < numbers_1.length; i++) {
    if (max_1 < numbers_1[i]) {
        max_1 = numbers_1[i];
    }
}
console.log('Bai 2');
console.log(max_1);
// Cau 3
const array = [1, 2, 3, 4, 5];
let transfNumber;
for ( let i = 0; i < array.length/2; i++) {
    transfNumber = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = transfNumber;
};
console.log('Bai 3');
console.log(array);
// Cau 4
const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
for ( let i = 0; i < duplicatesArray.length; i++) {
    for ( let j = 0; j < duplicatesArray.length; j++) {
        if (i != j) {
            if (duplicatesArray[j] == duplicatesArray[i]) {
                for ( let k = j; k < duplicatesArray.length;k++ ) {
                    duplicatesArray[k] = duplicatesArray[k+1];
                    
                }
                duplicatesArray.pop();
            }
            
        }
    }
}
console.log('Bai 4');
console.log(duplicatesArray);
// Cau 5
const students = [
    { name: "Alice", age: 20, grades: [80, 85, 90] },
    { name: "Bob", age: 21, grades: [75, 88, 95] }
];
let averageGrade = [];
for ( let i = 0; i < students.length; i++) {
    let sumGrade = 0;
    for ( let j = 0; j < students[i].grades.length; j++) {
        sumGrade += students[i].grades[j];
        averageGrade[i] = sumGrade / 3;
    }
    averageGrade[i] = sumGrade / 3;
    sumGrade = 0;
}
console.log('Bai 5');

console.log(averageGrade);
// Cau 6
const products = [
    { name: "Áo", price: 20 },
    { name: "Quần", price: 30 },
    { name: "Giày", price: 50 }
];
let max_2 = products[0].price;
for ( let i = 0; i < products.length; i++) {
    if (max_2 < products[i].price) max_2 = products[i].price;
}
console.log('Bai 6');
console.log(max_2);
// Cau 7
const students_1 = [
    { name: "Alice", age: 20, grades: { math: 90, english: 85, science: 88 } },
    { name: "Bob", age: 21, grades: { math: 80, english: 75, science: 78 } }
];

const courseGrade = 
    { math: [], english: [], science: []}

for ( let i = 0; i < students_1.length; i++) {
    (courseGrade.math).push(students_1[i].grades.math);
    (courseGrade.english).push(students_1[i].grades.english);
    (courseGrade.science).push(students_1[i].grades.science);
}
console.log('Bai 7');
console.log(courseGrade);
