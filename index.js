// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
// Done

function isArray(tmp) {
    return Array.isArray(tmp);
}

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// should output [2,4,6,8,10]
function doubleUpArray(array) {
    array.forEach((element, index) => {array[index] = element * 2});
    return array;
}


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
// case 1 output: 'Red Green White Black'
function joinningWithSpace(array) {
    return array.join(' ');
}
// case 2 output: 'Red+Green+White+Black'
function joinningWithPlus(array) {
    return array.join('+');
}
// case 3 output: 'Red,Green,White,Black'
function joinningWithComma(array) {
    return array.join(',')
}

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
// should output: [10,8,5,4,1]
function sortByLargeToSmall(array) {
    return array.sort((prior, next) => {return prior - next});
}

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// should output: 'a'
function findMostFrequent(array) {
    return array.sort((prior, next) =>
        array.filter(x => x===prior).length
        - array.filter(x => x===next).length
    ).pop();
}