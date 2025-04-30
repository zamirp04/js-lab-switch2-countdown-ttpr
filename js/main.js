// June 05, 2025
// var end = new Date('06/05/2025 12:01 AM', 'countdown');
CountDownToMario('06/05/2025 12:01 AM', 'countdown');

function CountDownToMario(endTime, div) {
  var end = new Date(endTime);
  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;
  
  function showRemaining() {
    var now = new Date();
    var distance = end - now;
      if (distance < 0) {
        clearInterval(timer);
        document.getElementById(div).innerHTML = 'The Game is Out!';
        return;
      }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);
                document.getElementById(div).innerHTML = days + ' days ';
            document.getElementById(div).innerHTML += hours + ' hrs ';
            document.getElementById(div).innerHTML += minutes + ' mins ';
            document.getElementById(div).innerHTML += seconds + ' secs';
  }
  timer = setInterval(showRemaining, 1000);
}