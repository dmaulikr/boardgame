// TIC TAC TOE

var tic = {
    player: [
        {
            name: "Defender",
            symbol: '<img id="hole" src="https://t3.ftcdn.net/jpg/01/41/84/84/500_F_141848405_Xe2Ltjeyj7Z8zwDfWQ0rNIIt4gJ8JZDh.jpg">'
        },
        {
            name: "Challenger",
            symbol: '<img id="hole" src="https://pbs.twimg.com/profile_images/3627005607/2aae0e25c02fe03e8b22437d69d6802c_400x400.png">'
        }
    ],
    $box: $('.box'),
    $statusBar: $('.status-bar'),   
    squaresFilled: 0,

    // Functions
    getName: function() {
        if(game.currentPlayer === game.player[0]){
            tic.player[1].name = game.player[1].name
        }
        else if(game.currentPlayer === game.player[1]){
            tic.player[1].name = game.player[0].name
        }
        return tic.player[1].name
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
            $('.status-bar').text("It's a draw. " + tic.player[0].name + ", stay where you are.")          // update the status bar to announce there was no winner
            return true                                                                 // return true
        }
    },
    whoWinner: function() {                                                     // FIND OUT WHO THE WINNER IS
        if(tic.checkWinner() === true){                                             // if someone has won the game
            if(tic.currentPlayer === tic.player[0]) {                                   // and if the current player (thus the winner) is player 1
                $('.status-bar').text(tic.currentPlayer.name + ", go forward 6 extra spaces!")  // update the status bar to show that player 1 won
                x = 6
            }
            else if (tic.currentPlayer === tic.player[1]) {                             // but if the current player (thus the winner) is player 2
                $('.status-bar').text(tic.player[0].name + ", you've been bumped back 5 spaces")  // update the status bar to show that player 2 won
                x = -6
            }
            console.log(tic.currentPlayer.name)                                         // and console log the current player's name
        }
    },
    switchPlayer: function() {                                                  // SWITCH PLAYER
        if(tic.currentPlayer === tic.player[0]){                                    // if the current player is player 1
            tic.currentPlayer = tic.player[1]                                           // switch the current player to player 2
            //console.log("Player 2's turn")
        }
        else if(tic.currentPlayer === tic.player[1]) {                              // but if the current player is player 2
            tic.currentPlayer = tic.player[0]                                           // switch the current player to player 1
            //console.log("Player 1's turn")
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

            game.challengeBump()

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
                    tic.squaresFilled += 1
                    if(tic.checkWinner() !== true && tic.isFull !== true) {
                        tic.switchPlayer()
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
tic.player[1].name = tic.getName()