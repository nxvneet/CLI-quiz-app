var readlineSync = require("readline-sync");

var score = 0;

var questions = [
    
    {
        question: "Where do I live? ",
        answer: "Delhi"
    },
    {
        question: "What's my favourite club? ",
        answer: "Manchester United"
    },
    {
        question: "Who's my favourite player? ",
        answer: "Cristiano Ronaldo"
    },
    {
        question:"What's my favourite colour? ",
        answer: "Red"
    },
    {
        question:"Tell me my favourite web series? ",
        answer: "Breaking Bad"
    },
] 

var highScores = [
    {
        name : "Navneet",
        score: "5"
    },
    {
        name: "Siddharth",
        score: "4"
    },
    {
        name: "Rishabh",
        score: "4"
    },
    {
        name: "Piyush",
        score: "4"
    }
]

function welcome(){

    var userName = readlineSync.question("Enter your username ");
    console.log("Welcome " + userName + " to DO YOU KNOW Navneet?");

}

function play(question, answer){

    var correctAnswer = readlineSync.question(question);

    if(correctAnswer === answer){
        console.log("Right answer!");
        score = score + 1;
    
    }
    else{
        console.log("Wrong answer!");
    
    }

    console.log("Current score: " + score);
    console.log("-------------");

}

function loop(){

    for(var i= 0 ; i< questions.length ; i++){ 

        var currentQuestion = questions[i];
        play(currentQuestion.question, currentQuestion.answer);
    
    }

    console.log("\n" + "YAY! you scored: " + score);
    console.log("Check out the high scores, if you should be there ping me and I'll update it" + "\n");
    
}


function scores(){
    
    for(var j= 0; j< highScores.length; j++){
     
        var scoreList = highScores[j];
        console.log(scoreList.name, scoreList.score);
    }

}

welcome();
loop();
scores();