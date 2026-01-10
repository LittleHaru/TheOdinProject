const TEST_STRING = "background-color-boom"
const TEST_ARR = [1,2,3,4,5,6,7,8,9,10,-3,34,67]
const WORD_ARR = [
    "Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
]
var modArr = [1,2,3,4,5,6,7,8,9,10,-3,34,67]


// Camel String
function camelize(string) {
    return string
    .split("-")
    .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join("")
};
console.log(camelize(TEST_STRING))

// Filter range
function filterRange(arr, a, b) {
    filtered = arr.filter((num) => (a <= num && num <= b));
    return filtered
};
console.log(filterRange(TEST_ARR,2,8))
console.log(TEST_ARR)

//Filter range in place
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num < a || num > b) {
            arr.splice(i, 1)
            i--;
        }
    }
    return arr
}
console.log(filterRangeInPlace(modArr,1,50))

// Sort In Descending Order
function sortDesc(arr){
    return arr.sort((a, b) => b - a)
}
console.log(sortDesc(TEST_ARR)) 

// Return a new arr Sorted Ascending Order
function sortAsc(arr) {
    return arr.sort((a , b) => a - b)
}
console.log(sortAsc(TEST_ARR))

// Shuffle Array
function shuffleArr(arr) {
    return arr.sort(() => Math.random() - 0.5)
}
console.log(shuffleArr(TEST_ARR))

//Filter unique items in an array
function filterUnique(arr) {
    let unique = new Set(arr)
    return unique
}
console.log(filterUnique(WORD_ARR))