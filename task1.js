let numbers = [1, 2, 3, 5, 8, 9, 5, 6, 7, 1, 3, 5];
console.log("The element 5 occurred",numbers.filter(function(value){
    return value === 5;
}).length,"times")