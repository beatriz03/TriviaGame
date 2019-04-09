// When user clicks "start" the questions will appear & timer will begin.
$(document).ready(function(){
    $(".startButton").click(function(){
        $("#triviaBody").toggle();
        $("#triviaBody2").hide();
        $(".doneButton").toggle();
    });

// start & stop buttons
    $(".startButton").on("click", start);

    $(".doneButton").on("click", stop);
    $("#triviaBody2").toggle();
  });


var IntervalId;
var clockRunning = false;
var time = 10;

function start() {
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
      }
    }

function stop() {
    clearInterval(intervalId);
    clockRunning = false;
  }

function count() {
    time--;

var converted = timeConverter(time);
    console.log(converted);

    $("#timer").text(converted);
}

// Stop timer automatically at 00:00 and show screen with results
if (time == 0) {
    clearInterval(x);
    document.getElementById("#triviaBody2").innerHTML = "";
  };


//Logic for the trivia answers and scores:
if (condition) {
    correctAnswers++
  } else { 
    incorrectAnswers++
  }







//Time Converter
function timeConverter(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}


