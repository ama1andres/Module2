// List
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usando un bucle `for`
let evenNumbersFor = [];
for (let number of numbers) {
    if (number % 2 === 0) {
        evenNumbersFor.push(number);
    }
}
console.log("Even numbers using for:", evenNumbersFor);

// `filter`
let evenNumbersFilter = numbers.filter(number => number % 2 === 0);
console.log("Even numbers using filter:", evenNumbersFilter);
