var inc = 1000;
clock();
function clock() {
  const date = new Date();
  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  const h = (hours < 10) ? "0" + hours : hours;
  const m = (minutes < 10) ? "0" + minutes : minutes;
  document.querySelector('.hours').innerHTML = h;
  document.querySelector('.mins').innerHTML = m;
  document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
  document.querySelector('.second').style.transform = `rotate(${second}deg)`
}

document.getElementById("year").innerHTML=(new Date).getFullYear();
document.getElementById("year1").innerHTML=(new Date).getFullYear();

  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[d.getDay()];
  document.getElementById("day").innerHTML = n;
  document.getElementById("days").innerHTML = n;

  var now = new Date();
  var currentMonth = now.toDateString().split(' ')[1];
  document.getElementById("month").innerHTML = currentMonth;
  document.getElementById("months").innerHTML = currentMonth;
  
setInterval(clock, inc);
