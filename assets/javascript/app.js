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
            //show and start countdown 
            timer();
            //function to display the question and options
            showQs();
        });
        //start timer and display the remaining time
        
    };
    function timer() {
        //create variable that decrements while time is not 0
        clock = setInterval(countDown, 1000);
        function countDown() {
            if (time < 1) {
                //clear the clock for the next question 
                clearInterval(clock);
            }
            if (time > 0) {
                //decrease the time remaining 
                time--;
            }
            //render the time
            $("#timer").text("Time remaining: " + time);
        }
    };
    
    //show first question and answer options
    function showQs(){
        $("#game").append("<p>" + 
    		questions[currentQ].question + 
    		"</p><p class='options'>" + 
    		questions[currentQ].options[0] + 
    		"</p><p class='options'>" + 
    		questions[currentQ].options[1] + 
    		"</p><p class='options'>" + 
    		questions[currentQ].options[2] + 
    		"</p><p class='options'>" + 
    		questions[currentQ].options[3] + 
    		"</p>");
       
    };
    
        
    //click event to store the users answer, based on which class option they click
    $("#game").on("click", ".options", function(){
        alert("clicked!");
        //answer stored in new variable
        var userGuess = $(this).text();
        //compare userGuess with the correct answer

        //increment correctGuesses if right answer 
        if (userGuess === questions[currentQ].correctAnswer){
            correctGuesses++;

        //increment incorrectGuesses if wrong answer
        } else if (userGuess != questions[currentQ].correctAnswer){
            incorrectGuesses++;

        //if no selection, increment incorrectGuesses 
        } else if (userGuess === undefined) {
            incorrectGuesses++;
        }


    });
    

    //compare the users answer to the correct answer

    //move to the next question

    //reset the timer
    

    //after the last question, show the final results


    

});
