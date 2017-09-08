// TIC TAC TOE

var tic = {
    player: [
        {
            name: "Player",
            symbol: '<img id="hole" src="https://i.imgur.com/6rWTYMn.png">'
        },
        {
            name: "Challenger",
            symbol: '<img id="asteroid" src="https://i.imgur.com/elZKMAQ.png">'
        }
    ],
    $box: $('.box'),
    $statusBar: $('.status-bar'),   
    squaresFilled: 0,

    // Functions

    ticBump: function() {
        var cPiece = undefined
        if(x < 0 && game.currentPlayer.iden == 'piece-1') {
            cPiece = game.player[1].icon
            var $curSqNu = Number($("#piece-2").parent().prop("id"))
            var $newSqNum = $curSqNu - 5
            var $newSq = $("#" + $newSqNum)
            var challengeBackSound = new Audio('https://github.com/katiegoines/boardgame/blob/master/sounds/lasergun.wav')
            challengeBackSound.play()
            $("#piece-2").fadeOut(1000,function() {
                $newSq.append($("#piece-2"))
                $('#piece-2').fadeIn(1000)
            })
            
        }
        else if(x < 0 && game.currentPlayer.iden == 'piece-2') {
            cPiece = game.player[0].icon
            var $curSqNu = Number($("#piece-1").parent().prop("id"))
            var $newSqNum = $curSqNu - 5
            var $newSq = $("#" + $newSqNum)
            var challengeBackSound = new Audio('https://github.com/katiegoines/boardgame/blob/master/sounds/lasergun.wav')
            challengeBackSound.play()
            $("#piece-1").fadeOut(1000,function() {
                $newSq.append($("#piece-1"))
                $('#piece-1').fadeIn(1000)
            })
        }
        else if(x > 0 && game.currentPlayer.iden == 'piece-1') {
            cPiece = game.player[1].icon
            var $curSqNu = Number($("#piece-2").parent().prop("id"))
            var $newSqNum = $curSqNu + 6
            var $newSq = $("#" + $newSqNum)
            var challengeForwardSound = new Audio('https://github.com/katiegoines/boardgame/blob/master/sounds/powerup2.wav')
            challengeForwardSound.play()
            $("#piece-2").fadeOut(1000,function() {
                $newSq.append($("#piece-2"))
                $('#piece-2').fadeIn(1000)
            })
        }
        else if(x > 0 && game.currentPlayer.iden == 'piece-2') {
            console.log('move!')
            cPiece = game.player[0].icon
            var $curSqNu = Number($("#piece-1").parent().prop("id"))
            var $newSqNum = $curSqNu + 6
            var $newSq = $("#" + $newSqNum)
            var challengeForwardSound = new Audio('https://github.com/katiegoines/boardgame/blob/master/sounds/powerup2.wav')
            challengeForwardSound.play()
            $("#piece-1").fadeOut(1000,function() {
                $newSq.append($("#piece-1"))
                $('#piece-1').fadeIn(1000)
            })
        }
    },
    checkLine: function(a,b,c) {                                                // CHECK IF ANY LINE HAS MATCHING SYMBOLS
        if ($('.box')[a].innerHTML === $('.box')[b].innerHTML &&                    // if the inner text of box A is equal to the inner text of box B 
            $('.box')[a].innerHTML === $('.box')[c].innerHTML &&                    // AND the inner text of box A is equal to the inner text of box C
            $('.box')[a].innerHTML !== '') {                                        // AND the inner text of box A is not blank
                return true                                                             // return true
        }
    }, 
    checkWinner: function() {                                                   // CHECK IF THE GAME HAS BEEN WON
        if(tic.checkLine(0,1,2) === true ||                                         // if running the checkLine function with the top row of squares is true
            tic.checkLine(3,4,5) === true ||                                        // OR running the checkLine function with the middle row of squares is true
            tic.checkLine(6,7,8) === true ||                                        // OR running the checkLine function with the bottom row of squares is true 
            tic.checkLine(0,3,6) === true ||                                        // OR running the checkLine function with the first column of squares is true 
            tic.checkLine(1,4,7) === true ||                                        // OR running the checkLine function with the second column of squares is true 
            tic.checkLine(2,5,8) === true ||                                        // OR running the checkLine function with the third column of squares is true 
            tic.checkLine(0,4,8) === true ||                                        // OR running the checkLine function with the L > R diagonal is true 
            tic.checkLine(2,4,6) === true) {                                        // OR running the checkLine function with the R > L diagonal is true
                return true                                                             // return true
        }
    },
    draw: function() {                                                          // CHECK IF THE GAME WAS A DRAW
        if(tic.isFull() === true && tic.checkWinner() !== false) {                  // if the board is full but there is no winner
            $('.status-bar').text("It's a draw. " + tic.player[0].name + ", stay where you are. Click 'exit' to continue the game")          // update the status bar to announce there was no winner
            return true                                                                 // return true
        }
    },
    whoWinner: function() {                                                     // FIND OUT WHO THE WINNER IS
        if(tic.checkWinner() === true){                                             // if someone has won the game
            if(tic.currentPlayer === tic.player[0]) {                                   // and if the current player (thus the winner) is player 1
                $('.status-bar').text(tic.currentPlayer.name + ", you got through! Go forward 6 extra spaces! Click 'exit' to continue the game.")  // update the status bar to show that player 1 won
                x = 6
            }
            else if (tic.currentPlayer === tic.player[1]) {                             // but if the current player (thus the winner) is player 2
                $('.status-bar').text(tic.player[0].name + ", Challenger blocked you. You've been bumped back 5 spaces. Click 'exit' to continue the game.")  // update the status bar to show that player 2 won
                x = -6
            }
            console.log(tic.currentPlayer.name)                                         // and console log the current player's name
        }
    },
    switchPlayer: function() {                                                  // SWITCH PLAYER
        if(tic.currentPlayer === tic.player[0]){                                    // if the current player is player 1
            tic.currentPlayer = tic.player[1]                                           // switch the current player to player 2
            console.log("Player 2's turn")
        }
        else if(tic.currentPlayer === tic.player[1]) {                              // but if the current player is player 2
            tic.currentPlayer = tic.player[0]                                           // switch the current player to player 1
            console.log("Player 1's turn")
        }
        $('.status-bar').text("It's " + tic.currentPlayer.name + "'s turn!")        // and update the status bar to announce the current player   
    },
    isFull: function() {                                                        // CHECK IF THE BOARD IS FULL
        if(tic.squaresFilled === 9){                                                // if the number of squares filled is 9
            return true                                                                 // return true
        }
    },
    gameOver: function() {                                                        // FINISH THE GAME
        $('.modal-content').append('<button id="exit">Exit</button>')               // 1. show a button to exit the modal
        $('#exit').on('click', function(){                                          // 2. on click of the button
            $('#challengeModal').css({"display": "none"})                                     // change the display of the modal to 'none'
            $('.modal-tic').css({"display": "none"})

            tic.ticBump()

        })
        if(tic.draw() === true) {                                                   // 3. if the game was a draw
            console.log('draw')                                                         // console log 'draw
        }
        else if(tic.checkWinner() === true){                                        // 4. but if there was a winner
            console.log('yes winner')                                                   // console log 'yes winner'
            tic.whoWinner()                                                             // and run whoWinner function
        }
    },
    playGame: function() {
        $('.box').on('click', function() {
            if(tic.isFull() !== true && tic.checkWinner() !== true){
                if($(this).text() === ''){
                    $(this).html(tic.currentPlayer.symbol)
                    if(tic.currentPlayer === tic.player[0]){
                        var blastSound = new Audio('https://github.com/katiegoines/boardgame/blob/master/sounds/balloon.wav')
                        blastSound.play()
                    }
                    else if (tic.currentPlayer === tic.player[1]){
                        var thudSound = new Audio('https://github.com/katiegoines/boardgame/blob/master/sounds/thud.wav')
                        thudSound.play()
                    }
                    if(tic.checkWinner() !== true && tic.isFull !== true) {
                        tic.switchPlayer()
                        tic.squaresFilled += 1
                    }
                    else {
                        console.log('game over')
                        tic.gameOver()
                    }
                }
            }
        })
    }
}

tic.currentPlayer = tic.player[0]
var x = undefined
