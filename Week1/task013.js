// Month name & number of days using switch-case
// Description: Input a month number (1–12) and display its name and number of days.
// 31 Days: 1, 3, 5, 7, 8, 10, 12
// 30 Days: 4, 6, 9, 11
// Special: 2 (February)

function getMonthAndDays(monthNum) {
  if (monthNum > 12 || monthNum < 1) {
    return "Please enter a valid month number";
  }
  let monthName = "";
  let days = "";
  switch (monthNum) {
    case 1:
      monthName = "Jan";
      break;
    case 2:
      monthName = "Feb";
      break;
    case 3:
      monthName = "Mar";
      break;
    case 4:
      monthName = "Apr";
      break;
    case 5:
      monthName = "May";
      break;
    case 6:
      monthName = "Jun";
      break;
    case 7:
      monthName = "Jul";
      break;
    case 8:
      monthName = "Aug";
      break;
    case 9:
      monthName = "Sep";
      break;
    case 10:
      monthName = "Oct";
      break;
    case 11:
      monthName = "Nov";
      break;
    case 12:
      monthName = "Dec";
      break;
    default:
      monthName = "Invalid month";
  }

  switch (monthNum) {
    case 1: //case stacking
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      days = "28 or 29";
    default:
      days = 0;
  }
  return `${monthName}, ${days} days`;
}
console.log(getMonthAndDays(21));
