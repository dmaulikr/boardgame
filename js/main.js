//Main Board Game

var game = {
    player: [
        {
            name: undefined,
            icon: '<img id="piece-1" class="piece" src="images/spaceship-yellow-sm.png">',
            iden: "piece-1"
        },
        {
            name: undefined,
            icon: '<img id="piece-2" class="piece" src="images/spaceship-green-sm.png">',
            iden: "piece-2"
        }
    ],
    rollClear: 0,   

    turnOver: function() {                                                                                                              // TURN OVER 
        n = 0                                                                                                                               // Reset the dice number to 0
        game.rollClear = 0                                                                                                                  // Reset the rollClear value to 0
        game.switchPlayer()                                                                                                                 // Run the switchPlayer function
        $('.roll').css({"background": "rgb(255, 255, 255)","background": "rgba(255, 255, 255, 0.4)", "color":"white"})                      // Change the appearance of the roll button
    },
    switchPlayer: function() {                                                                                                          // SWITCH PLAYER
        if(game.currentPlayer === game.player[0] && game.rollClear === 0){                                                                  // If the current player is Player1 and the rollClear value has been reset to 0
            game.currentPlayer = game.player[1]                                                                                                 // Set the current player to Player2
        }
        else if(game.currentPlayer === game.player[1] && game.rollClear === 0) {                                                            // If the current player is Player2 and the rollClear value has bene reset to 0
            game.currentPlayer = game.player[0]                                                                                                 // Set the curretn player to Player1
        }
        $('.turn-bar').text(game.currentPlayer.name + ", you're up.")                                                                       // And update the turn bar to announce whose turn it is
    },
    gameOver: function(){                                                                                                               // CHECK IF THE GAME IS OVER
        if($('#52').html() !== '') {                                                                                                        // If a piece lands on the last square
            return "winner"                                                                                                                     // Return "winner" (so it can be reference in the playGame function)
        }
    },
    bump: function($piece, targetNum) {                                                                                                 // BUMP PIECE FORWRD OR BACK
        if($piece.parent().prop("class") == "square backward") {                                                                            // If the piece lands on a backward square
            var bumpBackSound = new Audio('sounds/laser.wav')                                                                                   // 1. Create a variable whose value is a new sound
            bumpBackSound.play()                                                                                                                // 2. Play that sound
            $piece.fadeOut(400, function() {                                                                                                    // 3. Fade that piece out
                targetNum -= 1                                                                                                                      // Then decrease the newSquareNum by one
                $('#' + targetNum).append($piece)                                                                                                   // And add the piece to the new square
                $piece.fadeIn(400)                                                                                                                  // And fade it in
            })
        }
        else if($piece.parent().prop("class") == "square forward") {                                                                        // But if the piece lands on a forward square
            var bumpForwardSound = new Audio('sounds/powerup.wav')                                                                              // 1. Create a variable whose value is a new sound
            bumpForwardSound.play()                                                                                                             // 2. Play that sound
            $piece.fadeOut(800, function() {                                                                                                    // 3. Fade the piece out
                targetNum += 1                                                                                                                      // Then increase the newSquareNum by one
                $('#' + targetNum).append($piece)                                                                                                   // And add the piece to the new square
                $piece.fadeIn(800)                                                                                                                  // And fade it in
            })
        }
    },
    challenge: function($piece) {                                                                                                       // RUN A CHALLENGE
        if($piece.parent().prop("class") == "square challenge-one") {                                                                       // If the piece lands on is a challenge-one square
            var challengeStartSound = new Audio('sounds/explosionultrabass.wav')                                                                // 1. Create a variable whose value is a new sound
            challengeStartSound.play()                                                                                                          // 2. Play that sound
            
            if(grab.gamePlayed === false){
                $('.modal-content').css({"display": "block"})                                                                                       // 3. Show the modal-content div
                $('.modal-grab').css({"display": "block"})                                                                                          // 4. Show the modal-grab div
                $('#challengeModal').css({"display": "block"})                                                                                      // 5. Show the challengeModal div
            }
            // else if(grab.gamePlayed === true) {
            //     $('.modal-content').css({"display": "block"})                                                                                       // 3. Show the modal-content div
            //     $('.modal-safe').css({"display": "block"})                                                                                           // 4. Show the modal-grab div
            //     // $('.modal-safe').append('<button id="exitG">Exit</button>')
            //     $('#challengeModal').css({"display": "block"})                                                                                      // 5. Show the challengeModal div
            //     $('#exitG').on('click', function(){                                          // 2. on click of the button
            //         $('#challengeModal').css({"display": "none"})                                      // change the display of the modal to 'none'
            //         $('.modal-safe').css({"display": "none"})
            //         $('.modal-content').css({"display": "none"})
            //     })
            // }
            
            grab.playGame()                                                                                                                     // 6. Run the grab game
            // $('modal-tic').css({"display": "none"})
        }
        else if ($piece.parent().prop("class") == "square challenge-two") {                                                                 // If the piece lands on a challenge-two square
            var challengeStartSound = new Audio('sounds/explosionultrabass.wav')                                                                // 1. Create a variable whose value is a new sound
            challengeStartSound.play()                                                                                                          // 2. Play that sound
            
            if(tic.checkWinner() !== true){
                $('.modal-content').css({"display": "block"})                                                                                       // 3. Show the modal-content div
                $('.modal-tic').css({"display": "block"})                                                                                           // 4. Show the modal-grab div
                $('#challengeModal').css({"display": "block"})                                                                                      // 5. Show the challengeModal div
            }
            else if(tic.checkWinner() === true) {
                $('.modal-content').css({"display": "block"})                                                                                       // 3. Show the modal-content div
                $('.modal-safe').css({"display": "block"})                                                                                           // 4. Show the modal-grab div
                $('#challengeModal').css({"display": "block"})                                                                                      // 5. Show the challengeModal div
                x = 0
            }
            tic.playGame()                                                                                                                      // 6. Run the tic tac toe game
            $('.status-bar').text("It's " + tic.currentPlayer.name + "'s turn!")
            // $('modal-tic').css({"display": "none"})
        }
    },
    checkWinner: function(target) {                                                                                                     // CHECK TO SEE IF THERE IS A WINNER (NEED TO COMBINE WITH GAMEOVER)
        if(target === 52) {                                                                                                                 // If the new square is the last square (52)
            $('.modal-content').css({"display": "block"})                                                                                       // Show the modal-content div
            $('.modal-win').css({"display": "block"})                                                                                           // Show the modal-win div
            $('#challengeModal').css({"display": "block"})                                                                                      // Show the challengeModal div
        }
    },
    movePiece: function() {                                                                                                             // MOVE PIECE
        if($(this).prop("id") == game.currentPlayer.iden && game.rollClear !== 0 && game.gameOver() !== "winner"){                          // If the id of the piece clicked is the same as the id of the current player's piece, the dice has been rolled, and the game has not been won: 
            var $currentSquareNum = Number($(this).parent().prop("id"))                                                                         // 1. Create a variable ($currentSqareNum) whose value is the id of the parent element of the piece
            var newSquareNum = $currentSquareNum + n                                                                                            // 2. Create a variable (newSquareNum) whose value is the number of the current square (id number) plus the number rolled
            var $newSquare = $('#' + newSquareNum)                                                                                              // 3. Create a variable ($newSquare) whose value is the id of the space the piece is to move to
            var regMoveSound = new Audio('sounds/laserblast.wav')                                                                               // 4. Create a variable whose value is a new sound
            regMoveSound.play()                                                                                                                 // 5. Play that sound
            $(this).fadeOut(500, function() {                                                                                                   // 6. Fade out the piece clicked on
                $newSquare.append($(this))                                                                                                          // Then, append the piece to the new square
                $(this).fadeIn(500, function() {                                                                                                    // And fade the piece into the new square
                    game.challenge($(this))                                                                                                             // Then, run the challenge function to see if you've landed on a challenge square
                    game.bump($(this), newSquareNum)                                                                                                    // And run the bump function to see if you've landed on a bump square
                })
            })  
            
            game.turnOver()                                                                                                                     // Run the turnOver function
            game.checkWinner(newSquareNum)                                                                                                      // Run the checkWinner function to see if the new square is the last square
        }         
    },
    roll: function() {                                                                                                                  // ROLL THE DICE
        if(game.rollClear === 0) {                                                                                                          // If the variable rollClear has a value of 0
            var diceSound = new Audio('sounds/dice.wav')                                                                                        // 1. Create a variable whose value is a new sound
            diceSound.play()                                                                                                                    // 2. Play that sound
            n = Math.ceil(Math.random() * 6)                                                                                                    // 3. Set the variable n to a random number between 0 and 6 (rounded up)
            $('.dice-num').text("You rolled a " + n)                                                                                            // 4. Show what was rolled on the screen
            game.rollClear += 1                                                                                                                 // 5. And add 1 to the current value of rollClear, so that the roll button can't be clicked again until the current player has moved their piece
            $('.roll').css({ "background": "rgba(255,255,255,0.1)", "color":"#575259", "border": "0"})                                          // 6. And change the background color of the roll button so it's not as prominent when people aren't suppoed to click on it
            $('.piece').on('click', game.movePiece)                                                                                             // 7. When the current game piece is clicked on, run the movePiece function
        }
    },
}

game.currentPlayer = game.player[0]                                                                                                         // Create a currentPlayer object inside the game variable, whose value is the current player
var n = undefined                                                                                                                           // Create a variable (n)


$('form').on('submit', function(evnt) {                                                                                                     // When a form is submitted,
    evnt.preventDefault()                                                                                                                       // 1. Prevent the default actions (refreshing the page)
    var startSound = new Audio('sounds/comet.wav')                                                                                              // 2. Create a variable whose value is a new sound
    startSound.play()                                                                                                                           // 3. Play that sound
    game.player[0].name = $('#p1-name').val() || "Player 1"                                                                                     // 4. Set the name of player 1 to the value of the first input box, or if it was left empty, to Player 1
    game.player[1].name = $('#p2-name').val() || "Player 2"                                                                                     // 5. Set the name of player 2 to the value of the second input box, or if it was left empty, to Player 2
    $('form').fadeOut(1000, function() {                                                                                                        // 6. Fade out the form
        $('.turn-bar').html(game.currentPlayer.name + " is up first. Click the 'roll' button then click your piece to move.")                       // After the form has faded out,change the text of the turn-bar to announce who's turn is first
        $('#0').append(game.player[0].icon, game.player[1].icon)                                                                                    // And append the player icons to the first square
        var $roll = $('<button>').addClass('roll').text('Roll')                                                                                     // And create a roll button
        $('.roll-bar').append($roll)                                                                                                                // And add the roll button
        $roll.on('click', game.roll)                                                                                                                // On click of the roll button, run the roll function
    })    
})



// For functionality that has been removed for the time being
/*
// Click One Player
$('#one-player').on('click', function() {
    console.log('clicked one player')
    $('.modal-question').css({"display": "none"})
    $('.go').css({"display": "block"})
    $('.modal-grab').css({"display": "block"})
    grab.playGame()
})

// Click Two Player
$('#two-player').on('click', function() {
    console.log('clicked two player')
    $('.modal-question').css({"display": "none"})
    $('.modal-tic').css({"display": "block"})
    $('.box').text('')
    tic.squaresFilled = 0
    $('#exit').remove()
    tic.playGame()
    $('.status-bar').text("It's " + tic.currentPlayer.name + "'s turn!")
})
*/