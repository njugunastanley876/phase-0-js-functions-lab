function calculateTax(amount) {
 return amount * 0.10;
}
// function two name
function  convertToUpperCase(text) {
    return text.toUpperCase();
}
// function three
function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}
// function four
function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
}
// function five
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * (discountPercentage / 100));
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };