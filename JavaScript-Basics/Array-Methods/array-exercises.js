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

//map to names
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [ john, pete, mary ];
// let names = users.map(item => item);
// alert(names)

//map to objects
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
// let users = [john, pete, mary]
// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }))
// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith

// sort by names
// function sortByAge(users) {
//     arr.sort((a,b) => a.age - b.age)
// }
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let arr = [ pete, john, mary ];
// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

//get average of ages
// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length
// }
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

//create keyed object from array
function groupById(users) {
    return users.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);