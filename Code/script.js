$(()=>{

    var score1, score2, currentPlayer, currentPlayerScore;
    var diceno1, diceno2, sum;
    var name_1, name_2, input, name1, name2, final;
    var alphabet, numbers;
    var nOfTurns, sumTwo, finalSum, turnNumber1, turnNumber2;

    turnNumber1 = 1;
    turnNumber2 = 1;
    nOfTurns = 0;
    sumTwo = 0;
    finalSum = 0;
    alphabet = 'qwertyuioplkjhgfdsazxcvbnm';
    numbers = '123456789';

    $('#3btn-hold').prop('disabled',true)
        
        name_1 = prompt('Enter the first player\'s name(Optional)');
        name_2 = prompt('Enter the second player\'s name(Optional)');
        input = prompt('Enter the end score if you want it other than 150.(Optional)')
    
    init();
    
    score1 = document.getElementById('cur1').textContent;
    score2 = document.getElementById('cur2').textContent;
    currentPlayer = document.getElementById('curplayer').textContent;
    
    // Dice roll
    
    document.getElementById('btn-roll').addEventListener('click', function() {
        nOfTurns += 1;
        console.log(nOfTurns);

        diceno1 = Math.floor(Math.random() * 6 ) + 1;
        diceno2 = Math.floor(Math.random() * 6 ) + 1;

        sumTwo = parseInt(diceno1 + diceno2);
        if (sumTwo % 2 == 0) {
            finalSum += parseInt(sumTwo);
        }
        else if (sumTwo % 2 == 1) {
            finalSum -= parseInt(sumTwo);
        }

        console.log(finalSum);

        sumTwo = 0;
        
        document.getElementById('dice1').style.display = 'block';
        document.getElementById('dice2').style.display = 'block';
        document.getElementById('dice1').src = '../Images/Dice/dice-' + diceno1 + '.png';
        document.getElementById('dice2').src = '../Images/Dice/dice-' + diceno2 + '.png';
        document.getElementById('dice1').style.textAlign = 'center';
        document.getElementById('dice2').style.textAlign = 'center';

        // $('#btn-roll').prop('disabled',true)
        $('#btn-hold').prop('disabled',false)

        if (nOfTurns == 5) {
            if (currentPlayer == 1) {
                console.log('Player 1');
                score1 += parseInt(finalSum);
                document.getElementById('cur1').textContent = score1;
                nextPlayer();
            }
            else {
                console.log('Player 2');
                score2 += parseInt(finalSum);
                document.getElementById('cur2').textContent = score2;
                nextPlayer();
            }

            $('#btn-hold').prop('disabled',true)

        }

        if (currentPlayer == 1) {
            if (turnNumber1 == 1) {
                $('#btn-roll').prop('disabled',true)
            }
            else {
                $('#btn-roll').prop('disabled',false)
            }
        }
        else if (currentPlayer == 2) {
            console.log(turnNumber2);

            if (turnNumber2 == 1) {
                $('#btn-roll').prop('disabled',true)
            }
            else {
                $('#btn-roll').prop('disabled',false)
            }
        }

        currentPlayer == 1 ? turnNumber1 += 1 : turnNumber2 += 1;
    });
    
    // Hold btn
    
    document.getElementById('btn-hold').addEventListener('click', function() {
        
        $('#btn-roll').prop('disabled',false)
        sum = parseInt(diceno1 + diceno2);
        
        if(currentPlayer == 1) {
            console.log("Player 1");
                           
            currentPlayerScore = parseInt(score1);
        
            sum % 2 == 0 ? currentPlayerScore += sum : currentPlayerScore -= sum;
            console.log("Score: " + currentPlayerScore); 
            
            document.getElementById('cur1').textContent = currentPlayerScore;
            score1 = currentPlayerScore;
            console.log(score1);
            
            loseCheck(score1);
            winnerCheck(score1);
            
            currentPlayerScore = 0;    
        }
        else if(currentPlayer == 2){
            console.log("Player 2");
                        
            currentPlayerScore = parseInt(score2);
                      
            sum % 2 == 0 ? currentPlayerScore += sum : currentPlayerScore -= sum;
            console.log("Score: " + currentPlayerScore);
                         
            document.getElementById('cur2').textContent = currentPlayerScore;
            score2 = currentPlayerScore;            
            console.log(score2);           
            
            loseCheck(score2);
            winnerCheck(score2);                      
            
        };
            
        sum = 0;
        currentPlayerScore = 0;
        nOfTurns = 0;
        $('#btn-hold').prop('disabled',true)
        
        setTimeout(()=>{
            document.getElementById('dice1').style.display = 'none';
            document.getElementById('dice2').style.display = 'none';
        },500)
        
    });
    
    // New Game
    
    document.getElementById('newGame').addEventListener('click', function() {
        init();
        document.querySelector('.container').style.display = 'block';
        document.querySelector('.winner').style.display = 'none';
    });
    
    // functions

    // main functions

    function init() {
        $('#btn-hold').prop('disabled',true)

        document.getElementById('cur1').textContent = 0;
        document.getElementById('cur2').textContent = 0;
        document.getElementById('curplayer').textContent = 1;
        document.getElementById('dice1').style.display = 'none';
        document.getElementById('dice2').style.display = 'none';

        name1Correct();
        name2Correct();

        inputCorrect2();
        inputCorrect();

        if(name_1) {
            document.querySelector('.playerName1').textContent = name_1;
        }
        
        if(name_2) {
            document.querySelector('.playerName2').textContent = name_2;
        }
        
        if(input > 0) {
            document.querySelector('.end').textContent = input;
        }
        
    };
    
    function nextPlayer() {
        
        if(document.getElementById('curplayer').textContent == 1) {
            document.getElementById('curplayer').textContent = 2;
            currentPlayer = 2;
        }
        else if(document.getElementById('curplayer').textContent == 2){
            document.getElementById('curplayer').textContent = 1;
            currentPlayer = 1;
        }
        setTimeout(()=>{
            document.getElementById('dice1').style.display = 'none';
            document.getElementById('dice2').style.display = 'none';
        },500)
        finalSum = 0;
        nOfTurns = 0;
    };
    
    function inputCheck() {
        
        if(input) {
            final = input;
        }
        else {
            final = 150;
        };
        console.log(final);
    };

    // enter name check functions
    function namecheck1() {
       
        if(name_1) {
            name1 = name_1;
        }else {
            name1 = 'Player-1';
        }
    };

    function nameCheck2() {
       
        if(name_2) {
            name2 = name_2;
        }else {
            name2 = 'Player-2';
        }
    };

    // lose/win functions
    function winnerCheck(score) {
        inputCheck();
        
        if(score >= final) {
            setTimeout(()=>{
            document.querySelector('.container').style.display = 'none';
            },200)
            
            if(currentPlayer == 1) {
                namecheck1();
                setTimeout(()=>{
                    document.querySelector('.heading').textContent = 'Congratulations ' + name1 + ', you are the Winner.';
                    document.querySelector('.winner').style.display = 'block';
                },400)
            }
            else {
                nameCheck2();
                setTimeout(()=>{
                    document.querySelector('.heading').textContent = 'Congratulations ' + name2 + ', you are the Winner.';
                    document.querySelector('.winner').style.display = 'block';
                },400)
            }
            
        }
        else {
            nextPlayer();
        };
    };

    function loseCheck(score) {
        if(score <= -50) {
            setTimeout(()=>{
                document.querySelector('.container').style.display = 'none';
                if(currentPlayer == 1) {
                namecheck1();
                //setTimeout(()=>{
                    document.querySelector('.heading').textContent = 'Congratulations ' + name1 + ', you are the Winner.';
                    console.log('1');
                    document.querySelector('.winner').style.display = 'block';
                //},400)
            }
            else if(currentPlayer == 2){
                nameCheck2();
                //setTimeout(()=>{
                    document.querySelector('.heading').textContent = 'Congratulations ' + name2 + ', you are the Winner.';
                    console.log('2');                
                    document.querySelector('.winner').style.display = 'block';
                //},400)
            }
            },200)
            
            
        }
    };

    // correction functions
    function inputCorrect() {

        if (input < 0) {
            input =  prompt('Final Score should be bigger than 0.');
        }

    };

    function inputCorrect2() {

        if(alphabet.indexOf(input) > 0) {
            input =  prompt('Final Score should be a number.');
        }

    };

    function name1Correct() {
        if (numbers.indexOf(name_1) > 0) {
            name_1 = prompt('Name should be a word, first name is a number.');
        }
    }

    function name2Correct() {
        if (numbers.indexOf(name_2) > 0) {
            name_2 = prompt('Name should be a word, second name is a number.');
        }
    }
    
});