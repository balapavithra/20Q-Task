let str = "Level"
string=str.toLowerCase()

const reverseString = string.split('').reverse().join('');

let palindrome=checkPalindrome(string)
function checkPalindrome() {
    if(string === reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
