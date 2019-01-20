//have code run only when the page is ready, place all code within
$(document).ready(function() {

//array containing the question, multiple answer options, and the correct answer 
    var questions = [
      {
        question: "How many national parks are in the USA?",
        options: ["103", "58", "86", "162"],
        correctAnswer: "58"
      },
  
      {
        question: "What state is Sequoia National Park in?",
        options: ["California", "Oregon", "Montana", "Washington"],
        correctAnswer: "California"
      },
  
      {
        question: "Where is the largest National park?",
        options: ["Florida", "Oregon", "Montana", "Alaska"],
        correctAnswer: "Alaska"
      },
  
      {
        question: "El Capitan and Half Dome are iconic granite cliffs located in which national park?",
        options: ["Sierra Nevada National Park", "Yosemite National Park", "Zion National Park", "Yellowstone National Park"],
        correctAnswer: "Yosemite National Park"
      }
  
    ];
  console.log(questions);

    //variables for timing, score keeping, and tracking what is the current question 
    var time = 5,
        correctGuesses = 0,
        incorrectGuesses = 0,
        currentQ = 0;

    //start button to begin the game
    beginGame();
    
    function beginGame (){
        $("#startB").on("click", function() {
            //hide start button
            $("#startB").hide();
        });
        //start timer and display the remaining time
        timer();
    };
    function timer() {
        clock = setInterval(countDown, 1000);
        function countDown() {
            if (time < 1) {
                clearInterval(clock);
                noTime();
            }
            if (time > 0) {
                time--;
            }
            $("#timer").text(time);
        }
    };
    
    
    

    

    //show first question and answer options

    //click event to store the users answer

    //compare the users answer to the correct answer

    //move to the next question

    //reset the timer

    //after the last question, show the final results

});
