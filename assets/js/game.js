// Start of game.html JS.
    const buttons = document.getElementsByClassName('control');
    const humanImg = document.getElementById('human-img');
    const computerImg = document.getElementById('computer-img');
    const choices = ['coffee', 'bottle', 'cake', 'chocolate', 'cookie', 'ice-cream'];
    let mScore = 0;
    let dScore = 0;
    
    
// Enter the game when you click lets play on the info screen
    const startGame = function (){
            const startBtn = document.querySelector('.info button');
            const infoScreen = document.querySelector('.info');
            const playZone = document.querySelector('.play-zone');
    
            startBtn.addEventListener('click', function (){
                infoScreen.classList.add('fadeOut');
                playZone.classList.add('fadeIn'); 
            });
    };
    // Call the above function Start Game
        startGame();
    
// Adding event listeners to the buttons
       for (let button of buttons) {
            button.addEventListener("click", function(){
            let humanChoice = this.getAttribute("data-choice")
            playGame(humanChoice);
            });
        };


     
// This function will be used to start the game
    function playGame(humanChoice) {

        //Update Images 
        const imageFileName = choices[humanChoice] ?? 'coffee'
        humanImg.src = `./assets/images/${imageFileName}.png`
        humanImg.alt = choices[humanChoice];
    
        let computerChoice = Math.floor(Math.random() * 6);
    
        computerImg.src = `./assets/images/${choices[computerChoice]}.png`
        computerImg.alt = choices[computerChoice];

        // Compare images
        compareChoices(humanImg.src, computerImg.src);

        };

        // This section is to update the score
        const updateScore = () =>{
            const humanScore = document.querySelector('.match p');
            const computerScore = document.querySelector('.different p');
            humanScore.textContent = mScore;
            computerScore.textContent = dScore;
        };
    
        // This section is used to check if there is a match
        
        const compareChoices =(humanChoice, computerChoice) => {
        
            //Checking for a match
            const outcome = document.querySelector('.outcome');

            if(humanChoice === computerChoice){
                outcome.textContent = "It is a match";
                mScore++;
                updateScore();
                return;
            } else {
                outcome.textContent = "It is not a match"
                dScore++;
                updateScore();
                return;
            };
            };
    
    