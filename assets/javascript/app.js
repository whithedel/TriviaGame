var timer= 30; //seconds
var counter;
var questions = [{}];
var correctAnswers;
var incorrectAnswers;
var unanswered;

function showQuestionScreen() {
    $('#startScreen').hide();
    $('#questionScreen').show();
    console.log('should hide')
}

function showStats(){
    $('#questionScreen').hide();
    $('#statsScreen').show();
}




$('#startButton').on('click', function(event){
    console.log('you got clicked');
    event.preventDefault();
    showQuestionScreen();


});