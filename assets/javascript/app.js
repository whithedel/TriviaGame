
//Global variable 
var timer = 60; //seconds
var counter;
var allQuestionArr = [];
var answersArr = [];
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

$(document).ready(function () {
    $('#questionScreen').hide()       
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
            showStats();
            scoreUpdates();
            stats();
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
    for (var i = 0; i < 5; ++i) {
        loadChoices(i, i+1);
    }
    showQuestionScreen();
    loadTimer();
    startTimer() 
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
//looping through an object to and pushing to answersArr
var bbb = allQuestionArr.forEach(function(element) {
 
   answersArr.push(element.answers);
  });
  
////////////////////////////////////////////////////////////

// function the will update the score system 
function scoreUpdates(){
    console.log("IM CALLeD");
    userInput = [$('input[name=choices1]:checked').val(),$('input[name=choices2]:checked').val(),$('input[name=choices3]:checked').val(),$('input[name=choices4]:checked').val(),$('input[name=choices5]:checked').val()];
    console.log(userInput);
    for (var i = 0; i<userInput.length; i++){
        console.log(userInput[i])
        console.log(userInput[i] === 'Brazil')
        
        if (userInput[i]==='Brazil'||userInput[i]==='0'||userInput[i]==='Antartica'||userInput[i]==='France'||userInput[i]==='McDonalds')  {
            console.log('nonoono')
            correctAnswers +=1;
        } else if (userInput[i]=== undefined) {
            unanswered +=1;
            
        }else {
            incorrectAnswers +=1;
        }
    }
    
}

// main function to load all choices
function loadChoices(number,choiceQnumber){
    for (var i = 0; i < allQuestionArr[number].choices.length; i++){
        var button = `<label><input class="selectChoice" type="radio" name="choices${choiceQnumber}" value="${allQuestionArr[number].choices[i]}">`
        $('#choiceQ'+choiceQnumber).append(button+'  '+allQuestionArr[number].choices[i]+'  '+'<br>'+'<br>');      
    }
}

// function to append stats.
function stats(){
    
    $('#statsScreen').append('<div>');
    $('#statsScreen' + ' div:last-child').append('<br><br>'+'Correct answers '+correctAnswers+'<br><br>');
    $('#statsScreen' + ' div:last-child').append('<br><br>'+'Incorrect answers '+incorrectAnswers+'<br><br>');
    $('#statsScreen' + ' div:last-child').append('<br><br>'+'Unanswerd '+unanswered+'<br><br>');
};

// pushing  stats to html
$('#submitButton').on('click', function(){
    showStats();
    
    clearInterval(counter);
    console.log('hello')
    scoreUpdates();
    stats();
    clearInterval(counter);

})
