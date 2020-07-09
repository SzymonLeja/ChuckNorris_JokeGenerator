$(document).ready(function JokeGenerator(){
  $.ajax({
    async: false,
    url: `https://api.chucknorris.io/jokes/random?category=dev`,
    type: `GET`,
    dataType: `JSON`,
    success: function(data) {
      joke = data.value
      document.getElementById("joke").innerHTML = joke
    },
    error: function(){
      console.log("error")
    }
  });

  var joke;
  var timer = Math.floor(joke.length / 8.5) * 1000
  ;


  function move() {
    var elem = document.getElementById("myBar");   
    var width = 0;
    var BarTimer = timer / 100
    var id = setInterval(frame, BarTimer);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++ 
        elem.style.width = width + '%';
        elem.innerHTML = width + '%';
      }
    }
  }
  move()

  setTimeout(JokeGenerator, timer)

});