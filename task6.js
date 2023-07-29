let array1 = [21, 58, 69, 20, 47, 55, 7, 36, 91, 75];
let array2 = [12, 34, 46, 22, 67, 89];
let array=array1.concat(array2);
array.sort(function (a, b) { return (a-b) });
console.log(array)