let numbers = [12, 34, 45, 12, 67, 89, 12];
let indices = [];

numbers.filter(function (value, index) {
    if (value == 12) {
        indices.push(index)
    }
});
console.log(indices)