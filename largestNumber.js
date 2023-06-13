// Oppgave 1.

var myArray = [5, 9, 2, 8, 12, 7];

function findLargestNumber(array) {
    let largestNumber = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > largestNumber) {
            largestNumber = array[i];
        }
    }
    return largestNumber;
};

console.log(findLargestNumber(myArray));
