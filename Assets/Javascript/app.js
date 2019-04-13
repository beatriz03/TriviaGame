// When user clicks "start" the questions will appear & timer will begin.
$(document).ready(function(){
    $(".startButton").click(function(){
        $("#triviaBody").toggle();
        $("#triviaBody2").hide();
        $(".doneButton").toggle();


//When user clicks "done" previous items hide
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



//Clock Function
var IntervalId;
var clockRunning = false;
var time = 30;

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


//Stops clock at 0
function count() {
  if (time > 0 ){
    time--
    var converted = timeConverter(time);
    console.log(converted);

    $("#timer").text(converted);

  } else {
    stop()
  }
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




//right & wrong answers & scoring
var correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;


    $("#correctAnswers").text("Correct Answers: " + correctAnswers);
    $("#incorrectAnswers").text("Incorrect Answers: " + incorrectAnswers);
    $("#unansweredText").text("Unanswered: " + unanswered);
    
    
    var answers = $("#correct").val();
    if (answers) {
      correctAnswers++
    } else {
      incorrectAnswers++
    }