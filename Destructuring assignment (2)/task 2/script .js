/*Create the function topSalary(salaries) that returns the name of the top - paid person.

If salaries is empty, it should return null.
If there are multiple top - paid persons, return any of them.
    P.S.Use Object.entries and destructuring to iterate over key / value pairs.*/

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};


function topSalary(arr) {
    arr = Object.entries(salaries)

    if (Object.keys(salaries).length == 0) {
        return null
    }
    let max = 0;
    let name;
    for (i = 0; i < arr.length; i++) {
        // console.log(arr[i][1]);
        if (arr[i][1] > max) {
            max = arr[i][1]
            name = arr[i][0]
        }
    } return name

}
console.log(topSalary(salaries));

// function topSalary(salaries) {

//     let maxSalary = 0;
//     let maxName = null;

//     for (const [name, salary] of Object.entries(salaries)) {
//         if (maxSalary < salary) {
//             maxSalary = salary;
//             maxName = name;
//         }
//     }

//     return maxName;
// }
// console.log(topSalary(salaries));