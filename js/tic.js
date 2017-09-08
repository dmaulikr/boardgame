// TIC TAC TOE

var tic = {
    player: [
        {
            name: "Player",
            symbol: '<img id="hole" src="images/hole.png">'
        },
        {
            name: "Challenger",
            symbol: '<img id="asteroid" src="images/asteroid2.png">'
        }
    ],
    $box: $('.box'),
    $statusBar: $('.status-bar'),   
    squaresFilled: 0,

    // Functions

    ticBump: function() {                                                                                                               // BUMP PIECE ON BOARD DEPENDING ON OUTCOME OF GAME
        var cPiece = undefined                                                                                                              // Create a variable (cPiece) and set value as undefined
        if(x < 0 && game.currentPlayer.iden == 'piece-1') {                                                                                 // If x is less than 0 and the current player id is piece-1
            cPiece = game.player[1].icon                                                                                                        // 1. Set the value of cPiece to the current player's icon
            var $curSqNu = Number($("#piece-2").parent().prop("id"))                                                                            // 2. Create a variable ($curSqNu) and set the value to the number of the id of the square the other piece is in (because the switch player function has already happened)
            var $newSqNum = $curSqNu - 5                                                                                                        // 3. Create a variable ($newSqNum) and set teh value to the current square number minus 5                                             
            var $newSq = $("#" + $newSqNum)                                                                                                     // 4. Create a variable ($newSq) and set the value to make the id of the new square
            var challengeBackSound = new Audio('sounds/lasergun.wav')                                                                           // 5. Create a variable and set the value to a new sound
            challengeBackSound.play()                                                                                                           // 6. Play that sound
            $("#piece-2").fadeOut(1000,function() {                                                                                             // 7. Fade out the piece
                $newSq.append($("#piece-2"))                                                                                                        // Then add the piece to the new square
                $('#piece-2').fadeIn(1000)                                                                                                          // And fade it in
            })
            
        }
        else if(x < 0 && game.currentPlayer.iden == 'piece-2') {                                                                            // Same as the above for the other player
            cPiece = game.player[0].icon
            var $curSqNu = Number($("#piece-1").parent().prop("id"))
            var $newSqNum = $curSqNu - 5
            var $newSq = $("#" + $newSqNum)
            var challengeBackSound = new Audio('sounds/lasergun.wav')
            challengeBackSound.play()
            $("#piece-1").fadeOut(1000,function() {
                $newSq.append($("#piece-1"))
                $('#piece-1').fadeIn(1000)
            })
        }
        else if(x > 0 && game.currentPlayer.iden == 'piece-1') {                                                                            // If x is greater than 0 and the current player id is piece-1
            cPiece = game.player[1].icon                                                                                                        // 1. Set the value of cPiece to the current player's icon
            var $curSqNu = Number($("#piece-2").parent().prop("id"))                                                                            // 2. Create a variable ($curSqNu) and set the value to the number of the id of the square the other piece is in (because the switch player function has already happened)
            var $newSqNum = $curSqNu + 6                                                                                                        // 3. Create a variable ($newSqNum) and set teh value to the current square number plus 6                                             
            var $newSq = $("#" + $newSqNum)                                                                                                     // 4. Create a variable ($newSq) and set the value to make the id of the new square
            var challengeForwardSound = new Audio('sounds/powerup2.wav')                                                                        // 5. Create a variable and set the value to a new sound
            challengeForwardSound.play()                                                                                                        // 6. Play that sound
            $("#piece-2").fadeOut(1000,function() {                                                                                             // 7. Fade out the piece
                $newSq.append($("#piece-2"))                                                                                                        // Then add the piece to the new square
                $('#piece-2').fadeIn(1000)                                                                                                          // And fade it in
            })
        }
        else if(x > 0 && game.currentPlayer.iden == 'piece-2') {                                                                            // Same as the above for the other player
            console.log('move!')
            cPiece = game.player[0].icon
            var $curSqNu = Number($("#piece-1").parent().prop("id"))
            var $newSqNum = $curSqNu + 6
            var $newSq = $("#" + $newSqNum)
            var challengeForwardSound = new Audio('sounds/powerup2.wav')
            challengeForwardSound.play()
            $("#piece-1").fadeOut(1000,function() {
                $newSq.append($("#piece-1"))
                $('#piece-1').fadeIn(1000)
            })
        }
    },
    checkLine: function(a,b,c) {                                                                                                        // CHECK IF ANY LINE HAS MATCHING SYMBOLS
        if ($('.box')[a].innerHTML === $('.box')[b].innerHTML &&                                                                            // If the inner text of box A is equal to the inner text of box B 
            $('.box')[a].innerHTML === $('.box')[c].innerHTML &&                                                                            // AND the inner text of box A is equal to the inner text of box C
            $('.box')[a].innerHTML !== '') {                                                                                                // AND the inner text of box A is not blank
                return true                                                                                                                     // return true
        }
    }, 
    checkWinner: function() {                                                                                                           // CHECK IF THE GAME HAS BEEN WON
        if(tic.checkLine(0,1,2) === true ||                                                                                                 // If running the checkLine function with the top row of squares is true
            tic.checkLine(3,4,5) === true ||                                                                                                // OR running the checkLine function with the middle row of squares is true
            tic.checkLine(6,7,8) === true ||                                                                                                // OR running the checkLine function with the bottom row of squares is true 
            tic.checkLine(0,3,6) === true ||                                                                                                // OR running the checkLine function with the first column of squares is true 
            tic.checkLine(1,4,7) === true ||                                                                                                // OR running the checkLine function with the second column of squares is true 
            tic.checkLine(2,5,8) === true ||                                                                                                // OR running the checkLine function with the third column of squares is true 
            tic.checkLine(0,4,8) === true ||                                                                                                // OR running the checkLine function with the L > R diagonal is true 
            tic.checkLine(2,4,6) === true) {                                                                                                // OR running the checkLine function with the R > L diagonal is true
                return true                                                                                                                     // return true
        }
    },
    draw: function() {                                                                                                                  // CHECK IF THE GAME WAS A DRAW
        if(tic.isFull() === true && tic.checkWinner() !== false) {                                                                          // If the board is full but there is no winner
            $('.status-bar').text("It's a draw. " + tic.player[0].name + ", stay where you are. Click 'exit' to continue the game")             // Update the status bar to announce there was no winner
            return true                                                                                                                         // return true
        }
    },
    whoWinner: function() {                                                                                                             // FIND OUT WHO THE WINNER IS
        if(tic.checkWinner() === true){                                                                                                     // If someone has won the game
            if(tic.currentPlayer === tic.player[0]) {                                                                                           // And if the current player (thus the winner) is player 1
                $('.status-bar').text(tic.currentPlayer.name + ", you got through! Go forward 6 extra spaces! Click 'exit' to continue the game.")  // Update the status bar to show that player 1 won
                x = 6                                                                                                                               // And set the value of x to 6
            }
            else if (tic.currentPlayer === tic.player[1]) {                                                                                         // But if the current player (thus the winner) is player 2
                $('.status-bar').text(tic.player[0].name + ", Challenger blocked you. You've been bumped back 5 spaces. Click 'exit' to continue the game.")  // Update the status bar to show that player 2 won
                x = -5                                                                                                                              // And set the value of x to -5
            }
        }
    },
    switchPlayer: function() {                                                                                                          // SWITCH PLAYER
        if(tic.currentPlayer === tic.player[0]){                                                                                            // If the current player is player 1
            tic.currentPlayer = tic.player[1]                                                                                                   // Switch the current player to player 2
        }
        else if(tic.currentPlayer === tic.player[1]) {                                                                                      // But if the current player is player 2
            tic.currentPlayer = tic.player[0]                                                                                                   // Switch the current player to player 1
        }
        $('.status-bar').text("It's " + tic.currentPlayer.name + "'s turn!")                                                                // And update the status bar to announce the current player   
    },
    isFull: function() {                                                                                                                // CHECK IF THE BOARD IS FULL
        if(tic.squaresFilled === 9){                                                                                                        // If the number of squares filled is 9
            return true                                                                                                                         // return true
        }
    },
    gameOver: function() {                                                                                                              // FINISH THE GAME
        $('.modal-content').append('<button id="exit">Exit</button>')                                                                       // 1. Show a button to exit the modal
        $('#exit').on('click', function(){                                                                                                  // 2. On click of the button
            $('#challengeModal').css({"display": "none"})                                                                                       // Change the display of the challengeModal div to 'none'
            $('.modal-tic').css({"display": "none"})                                                                                            // Change the display of the modal-tic div to none
            tic.ticBump()                                                                                                                   // 3. Run the ticBump function to move player forward on board depending on outcome of tic tac toe
        })
        if(tic.draw() === true) {                                                                                                           // 4. If the game is a draw, do nothing (need to remove)
        }
        else if(tic.checkWinner() === true){                                                                                                // 5. But if there was a winner
            tic.whoWinner()                                                                                                                     // Run whoWinner function to determine which player was the winner
        }
    },
    playGame: function() {                                                                                                              // PLAY THE GAME
        $('.box').on('click', function() {                                                                                                  // When a box is clicked
            if(tic.isFull() !== true && tic.checkWinner() !== true){                                                                            // If the board is not full and no one has won yet
                if($(this).html() === ''){                                                                                                          // And if the there is no icon in the box 
                    $(this).html(tic.currentPlayer.symbol)                                                                                              // Put the icon of the current player into the box clicked
                    if(tic.currentPlayer === tic.player[0]){                                                                                                // If the current player is player1
                        var blastSound = new Audio('sounds/balloon.wav')                                                                             // Create a variable whose value is a new sound
                        blastSound.play()                                                                                                                       // Play that sound
                    }
                    else if (tic.currentPlayer === tic.player[1]){                                                                                          // If the current player is player2
                        var thudSound = new Audio('sounds/thud.wav')                                                                                 // Create a variable wohse value is a new sound
                        thudSound.play()                                                                                                                        // Play that sound
                    }
                    if(tic.checkWinner() !== true && tic.isFull !== true) {                                                                                 // Then, if there still is no winner and the board is not full
                        tic.switchPlayer()                                                                                                                      // Switch players
                        tic.squaresFilled += 1                                                                                                                  // And change add 1 to the value of squaresFilled
                    }
                    else {                                                                                                                                  // Otherwise
                        tic.gameOver()                                                                                                                          // Run the gameOver function
                    }
                }
            }
        })
    }
}

tic.currentPlayer = tic.player[0]
var x = undefined
