let day = 4;
// switch (day) {
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//             console.log("Satday");
//             break;
// }
// switch (day) {
//     case 0:
//         console.log("Sunday");
//         break;
//     case 6:
//             console.log("Satday");
//             break;
//     default:
//         console.log('Looking forward for weekend');
//         break;
// }
switch (day) {
    case 0:
    case 6:
        console.log("WeekEnd");
        break;
    case 4:
    case 5:
        console.log("Soon it is WeekEnd");
        break;
    default:
        console.log('Looking forward for weekend');
        break;
}