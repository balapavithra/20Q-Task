let numbers = [21, 58, 69, 20, 47, 55, 7, 36, 91, 75];
numbers.sort(function (a, b) { return (b - a) });
console.log(numbers)
const first5Largest = numbers.slice(0, 5);
console.log(first5Largest)
sum = first5Largest.reduce(myFunction)
function myFunction(total, value) {
    return total + value;
}
console.log(sum)