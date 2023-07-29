let numbers = [12, 34, 46, 22, 67, 89];
let average=(numbers.reduce(myFunction))/numbers.length
function myFunction(total, value) {
    return total + value;
}
console.log(average)