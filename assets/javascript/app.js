// Who invented the telephone? (Bell)
// Which nail grows fastest? (middle)
// What temperature does water boil at? (100C)
// What Spanish artist said he would eat his wife when she died? (Dali)
// Who wrote Julius Caesar, Macbeth and Hamlet? (Shakespeare)
// How many states are there in the United States of America? (50)
// What did the crocodile swallow in Peter Pan? (alarm clock)
// Where was Lope de Vega born? (Madrid)
// Who did Lady Diana Spencer marry? (Prince Charles)

//Global variable 
var timer = 30; //seconds
var counter;
var allQuestionArr = [];
var answersArr = [];
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 5;
 

//checking to see if correctAnswers, incorrectAnswers or unanswered should increase 
$(document).ready(function () {
    $('#questionScreen').hide()

    $(document).on('click',".selectChoice", function(event){
        console.log('hello')
        userInput = event.target.value;
        console.log(userInput);
        
            if (answersArr.includes(userInput)&& event.target.checked) {
                unanswered -=1;
                correctAnswers +=1;
            } else {
                unanswered -=1;
                incorrectAnswers +=1;
            }
        
        
    })
})


//to show the questions screen
function showQuestionScreen() {
    $('#startScreen').hide();
    $('#questionScreen').show();
}


// to show the stats screen 
function showStats() {
    $('#questionScreen').hide();
    $('#statsScreen').show();
}

//to update the timer 
function updateTimerText(){
    if (timer === 1) {
        $("#timeRemaining").text('Time remaining: ' + timer + ' second');
    }
    else {
        $("#timeRemaining").text('Time remaining: ' + timer + ' seconds');
    }
}


//starts the timer 
function startTimer() {
    function decrementTimer() {
        timer = timer - 1;
        if (timer < 0) {
            clearInterval(counter);
            stats();
            showStats();
            return;
        }
        console.log(timer);
        updateTimerText();
    }
    counter = setInterval(decrementTimer, 1000);
}


// funtion to load your questions 
function loadTimer() {
    $('#loadTimer').append('<div />')
    $('#loadTimer' + ' div:last-child').addClass('jumbotron col-12 text-center col-12');
    $('#loadTimer' + ' div:last-child').append('<p id="timeRemaining">' + 'Time remaining: ' + timer + ' seconds');
}


//global section of main functions
$('#startButton').on('click', function (event) {
    console.log('you got clicked');
    event.preventDefault();
    showQuestionScreen();
    loadTimer();
    startTimer();
    loadChoiceQ1();
    loadChoiceQ2();
    loadChoiceQ3();
    loadChoiceQ4();
    loadChoiceQ5();
    // loadQuestions();
    
});

// creating an object constructor.
function questionsChoicesAnswers(questions,choices,answers) {
    this.questions = questions;
    this.choices = choices;
    this.answers = answers;
    
};


/////////////////////////////////////////////////////////
// creating my object 
function pushingToAllQuestionsArr () {
    var q1 = new questionsChoicesAnswers ('With what country is France\'s longest land border?',['Brazil','USA','France','Russia'],'Brazil');
    var q2 = new questionsChoicesAnswers ('How many provinces does Holland have?',[3,6,2,0],0);
    var q3 = new questionsChoicesAnswers ('Where is the world\'s largest desert?',['Africa','Antartica','Oceania','Europe'],'Antartica');
    var q4 = new questionsChoicesAnswers ('Where are Bugatti cars made?',['Germany','France','Italy','United-Kingdom'],'France');
    var q5 = new questionsChoicesAnswers ('What company is the world\'s biggest distributer of toys?',['Target','Walmart','McDonalds','Amazon'],'McDonalds');

    allQuestionArr.push(q1,q2,q3,q4,q5);
    console.log(allQuestionArr)
}
pushingToAllQuestionsArr();
////////////////////////////////////////////////////////////
// questionsChoicesAnswers.prototype.addToIscorrect = function (){
//     $('input[value='+'"'+allQuestionArr[1].choices[i]+'"'+']').on('click', function(e) {
//         if (this.answers=this.choices[i]){
//             correctAnswers++
//         }
//     })
       
// }

////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////
//looping through an object to and pushing to answersArr
var bbb = allQuestionArr.forEach(function(element) {
 
   answersArr.push(element.answers);
  });
  
////////////////////////////////////////////////////////////


var table = '<table class="table"><thead><tr><th scope="col">'
var tableInsert = '<th scope="col"></th>'
// var button = '<label><input type="radio" name="choices">'
// var choices = function choices(){
    
// }

// function loadQuestions() {
    
//     for ( var i = 0 ; i < allQuestionArr.length ; i++) {
//         $('#questionScreen').append('<h1 id="choices">'+allQuestionArr[i].questions+'<br>'+'<br>');  
//       }
// }

function loadChoiceQ1() {
    for (var i = 0; i < allQuestionArr[0].choices.length; i++){
        var button = '<label><input class="selectChoice" type="radio" name="choices1" value='+'"'+allQuestionArr[0].choices[i]+'"'+'>'
        $('#choiceQ1').append(button+'  '+allQuestionArr[0].choices[i]+'  '+'<br>'+'<br>');
        // for (var j=0; j<answersArr.length; j++){
        //     $('input[value='+'"'+allQuestionArr[0].choices[i]+'"'+']').on('click', function(e){
        //         if (allQuestionArr[0].choices[0]===answersArr[0]){
        //             correctAnswers ++
        //         }
        //     })
        // }       
    }
}
function loadChoiceQ2() {
    for (var i = 0; i < allQuestionArr[1].choices.length; i++){
        var button = '<label><input class="selectChoice" type="radio" name="choices2" value='+'"'+allQuestionArr[1].choices[i]+'"'+'>'
        $('#choiceQ2').append(button+'  '+allQuestionArr[1].choices[i]+'  '+'<br>'+'<br>');

    }
}
function loadChoiceQ3() {
    for (var i = 0; i < allQuestionArr[2].choices.length; i++){
        var button = '<label><input class="selectChoice" type="radio" name="choices3" value='+'"'+allQuestionArr[2].choices[i]+'"'+'>'
        $('#choiceQ3').append(button+'  '+allQuestionArr[2].choices[i]+'  '+'<br>'+'<br>');
        for (var j=0; j<answersArr.length; j++){
            
        }          
    }
}
function loadChoiceQ4() {
    for (var i = 0; i < allQuestionArr[3].choices.length; i++){
        var button = '<label><input class="selectChoice" type="radio" name="choices4" value='+'"'+allQuestionArr[3].choices[i]+'"'+'>'
        $('#choiceQ4').append(button+'  '+allQuestionArr[3].choices[i]+'  '+'<br>'+'<br>');
        for (var j=0; j<answersArr.length; j++){
            
        }          
    }
}
function loadChoiceQ5() {
    for (var i = 0; i < allQuestionArr[4].choices.length; i++){
        var button = '<label><input class="selectChoice" type="radio" name="choices5" value='+'"'+allQuestionArr[4].choices[i]+'"'+'>'
        $('#choiceQ5').append(button+'  '+allQuestionArr[4].choices[i]+'  '+'<br>'+'<br>');
        for (var j=0; j<answersArr.length; j++){
            
        }          
    }
}
/// function to append stats.
function stats(){
    $('#statsScreen').append('<div>');
    $('#statsScreen' + ' div:last-child').append('<br><br>'+'Correct answers '+correctAnswers+'<br><br>');
    $('#statsScreen' + ' div:last-child').append('<br><br>'+'Incorrect answers '+incorrectAnswers+'<br><br>');
    $('#statsScreen' + ' div:last-child').append('<br><br>'+'Unanswerd '+unanswered+'<br><br>');
};
/// pushing  stats to html 
$('#submitButton').on('click', function(){
    showStats();
    stats();
    clearInterval(counter);

})
