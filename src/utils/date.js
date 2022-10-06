const date = new Date();
const year = date.getFullYear();
let month = date.getMonth() + 1; // Months start at 0!
let day = date.getDate();
let tomorrow = day + 1;

if (day < 10) day = "0" + day;
if (month < 10) month = "0" + month;
if (tomorrow < 10) tomorrow = "0" + tomorrow;

export const formattedToday = day + "/" + month + "/" + year;
export const formattedTomorrow = tomorrow + "/" + month + "/" + year;
