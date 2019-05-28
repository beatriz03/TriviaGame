// When user clicks "start" the questions will appear & timer will begin.
$(document).ready(function () {
  $('#startButton').on('click',function () {
    $('#startButton').remove();
    game.loadQuestion();
  })
  
$(document).on('click', '.answer-button', function(e){
  game.clicked(e);
})

$(document).on('click', '#reset', function(e){
  game.reset();
})

var questions = [{
  question:'What country is the largest by landmass?',
  answers:['Canada', 'Russia', 'China', 'Zimbabwe'],
  correctAnswer:'Russia',
},{
  questions:'Which country has won the most Olympic gold medals?',
  answers:['Germany', 'Switzerland', 'USA', 'Japan'],
  correctAnswer:'USA',
},{
  questions:'Which of the following countries is NOT an example of an enclave?',
  answers:['Vatican City', 'Lesotho', 'Madagascar', 'San Merino'],
  correctAnswer:'Madagascar',
},{
  questions:'Club America, Cruz Azul, and Club Leon are teams in what country\'s soccer league?',
  answers:['Mexico', 'Honduras', 'Italy', 'Chile'],
  correctAnswer:'Mexico',
},{
  questions:'What is the capital of Australia?',
  answers:['Sydney', 'Canberra', 'Adelaide', 'Melbourne'],
  correctAnswer:'Canberra',
},{
  questions:'What is the smallest country in Central America?',
  answers:['El Salvador', 'Costa Rica', 'Nicaragua', 'Belize'],
  correctAnswer:'El Salvador',
},{
  questions:'Which is NOT an official language of Belgium?',
  answers:['French', 'Dutch', 'German', 'English'],
  correctAnswer:'English',
},{
  questions:'What is the youngest country in the world?',
  answers:['Serbia', 'South Sudan', 'Eritrea', 'Czech Republic'],
  correctAnswer:'South Sudan',
}];

var game={
  questions:questions,
  currentQuestion:0,
  counter:30,
  correct:0,
  incorrect:0,
  unAnswered:0,

  countdown: function(){
    game.counter--;
    $('#counter').html(game.counter);
    if(game.counter <= 0){
      game.timeUp();
    }
  },


  loadQuestion: function(){
    timer=setInterval(game.countdown, 1000);
    $('#subwrapper').html("<h2 id='counter'>30</h2>");
    $('#subwrapper').append('<h2>' + questions[game.currentQuestion].question + '</h2>');

    for (var i=0; i< questions[game.currentQuestion].answers.length; i++){
      $('#subwrapper').append('<button class="answer-button" id ="button-' + i + '" data-name="' + questions[game.currentQuestion].answers[i]+ '">' + questions[game.currentQuestion].answers[i] + '</button');
    }
  },

  nextQuestion: function(){
    game.counter=30;
    $('#counter').html(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  }, 


  timeUp: function(){
    clearInterval(timer);
    game.unAnswered++;
    $('#subwrapper').html('<h2>Out of time!</h2>');
    $('#subwrapper').append('<h3>The correct answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3');

    if(game.currentQuestion==questions.length-1){
      setTimeout(game.results, 3*1000);
    } else {
      setTimeout(game.nextQuestion, 3*1000);
    }
  },


  results: function(){
    clearInterval(timer);
    $('#subwrapper').html('All Done!');
    $('#subwrapper').append('<h3>Correct: ' + game.correct +'</h3>');  
    $('#subwrapper').append('<h3>Incorrect: ' + game.incorrect +'</h3>');
    $('#subwrapper').append('<h3>Unanswered: ' + game.unAnswered +'</h3>');
    $('#subwrapper').append("<button id='reset'>Reset Game!</button>");
  },



  clicked: function(e){
    clearInterval(timer);
    if($(e.target).data('name')==questions[game.currentQuestion].correctAnswer){
      game.answeredCorrectly();
    } else {
      game.answeredIncorrectly();
    }
  }, 


  answeredCorrectly: function(){
    clearInterval(timer);
    game.correct++;
    $('#subwrapper').html('<h2>You are correct!</h2>');

    if(game.currentQuestion==questions.length-1){
      setTimeout(game.results, 3*1000);
    } else {
      setTimeout(game.nextQuestion, 3*1000);
    }
  },


  answeredIncorrectly: function(){
    clearInterval(timer);
    game.incorrect++;
    $('#subwrapper').html('<h2>Sorry, that is wrong!</h2>');
    $('#subwrapper').append('<h3>The correct answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3');

    if(game.currentQuestion==questions.length-1){
      setTimeout(game.results, 3*1000);
    } else {
      setTimeout(game.nextQuestion, 3*1000);
    }
  },


  reset: function(){
game.currentQuestion=0;
game.counter=0;
game.correct=0;
game.incorrect=0;
game.unAnswered=0;
game.loadQuestion();
  }
}


  }); 

