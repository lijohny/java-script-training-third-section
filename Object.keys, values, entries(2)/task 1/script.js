function sumSalaries(salaries) {
    // console.log(Object.values(salaries));
    let salary = Object.values(salaries)
    // console.log(salary);

    let result = salary.reduce((sum, current) => sum + current, 0);
    return result;
    // console.log(result);
    // alert(result);
}

// function sumSalaries(salaries) {

//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//         sum += salary;
//     }

//     return sum; // 650
// }


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
// sumSalaries(salaries);
alert(sumSalaries(salaries)); // 650