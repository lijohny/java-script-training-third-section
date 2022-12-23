/* Write a function getWeekDay(date) to show the weekday in short format: 
‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.*/


function getWeekDay(date) {
    let day;
    if (date.getDay() == 0) {
        day = "SU"
    }
    if (date.getDay() == 1) {
        day = "MO"
    }
    if (date.getDay() == 2) {
        day = "TU"
    }
    if (date.getDay() == 3) {
        day = "WE"
    }
    if (date.getDay() == 4) {
        day = "TH"
    }
    if (date.getDay() == 5) {
        day = "FR"
    } if (date.getDay() == 6) {
        day = "SA"
    }
    // switch (date.getDay()) {
    //     case 0:
    //         day = "Sun";
    //         break;
    //     case 1:
    //         day = "Mon";
    //         break;
    //     case 2:
    //         day = "Tues";
    //         break;
    //     case 3:
    //         day = "Wednes";
    //         break;
    //     case 4:
    //         day = "Thurs";
    //         break;
    //     case 5:
    //         day = "Fri";
    //         break;
    //     case 6:
    //         day = "Satur";
    // }
    return day
}

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert(getWeekDay(date));        // should output "TU"
// console.log(getWeekDay(date));

// function getWeekDay(date) {
//     let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

//     return days[date.getDay()];
// }