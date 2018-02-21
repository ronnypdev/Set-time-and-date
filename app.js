const currentDay = document.getElementById('currentDay');
const currentTime = document.getElementById('currentTime');
const today = new Date();
const day = today.getDay();
const daylist = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday ',
  'Thursday',
  'Friday',
  'Saturday'
];
currentDay.innerHTML = 'Today is : ' + daylist[day] + '.';
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let prepand = hour >= 12 ? ' PM ' : ' AM ';
hour = hour >= 12 ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = ' Noon';
  } else {
    hour = 12;
    prepand = ' PM';
  }
}
if (hour === 0 && prepand === ' AM ') {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = ' Midnight';
  } else {
    hour = 12;
    prepand = ' AM';
  }
}
currentTime.innerHTML =
  'Current Time : ' + hour + prepand + ' : ' + minute + ' : ' + second;
