let numbers = [21, 58, 69, 20, 47, 55, 7, 36, 91, 75];
let num = numbers.sort(function (a, b) { return (a - b) });
const first5Least = num.slice(0, 5);
let average = (first5Least.reduce(myFunction)) / first5Least.length
function myFunction(total, value) {
    return total + value;
}
console.log(Math.floor(average))