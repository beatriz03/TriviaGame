// When user clicks "start" the questions will appear & timer will begin.
$(document).ready(function(){
    $(".startButton").click(function(){
        $("#triviaBody").toggle();
        $("#triviaBody2").hide();
        $(".doneButton").toggle();

        $(".doneButton").click(function(){
            $("#triviaBody2").show();
            $("#triviaBody").toggle();
            $(".doneButton").toggle();
            $(".startButton").toggle();
            $("#timer").toggle();
    });
});

// start & stop buttons
    $(".startButton").on("click", start);
    $(".doneButton").on("click", stop);
  });



var IntervalId;
var clockRunning = false;
var time = 3;

correctAnswersText.textContent = "Correct Answers: " + correctAnswers;
incorrectAnswersText.textContent = "Incorrect Answers: " + incorrectAnswers;

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
    time--

var converted = timeConverter(time);
    console.log(converted);

    $("#timer").text(converted);
}





// Logic for the trivia answers and scores:
// if ("#correct").onclick(); {
//     correctAnswers++
//   } else { 
//     incorrectAnswers++
//   }







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


