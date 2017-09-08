//Main Board Game

var game = {
    player: [
        {
            name: undefined,
            icon: '<img id="piece-1" class="piece" src="https://i.imgur.com/ltPMH4C.png">',
            iden: "piece-1"
        },
        {
            name: undefined,
            icon: '<img id="piece-2" class="piece" src="https://i.imgur.com/xV6CD8u.png">',
            iden: "piece-2"
        }
    ],
    rollClear: 0,

    turnOver: function() {
        n = 0
        game.rollClear = 0
        game.switchPlayer()
        $('.roll').css({"background": "rgb(255, 255, 255)","background": "rgba(255, 255, 255, 0.4)", "color":"white"})
    },
    switchPlayer: function() {
        if(game.currentPlayer === game.player[0] && game.rollClear === 0){
            game.currentPlayer = game.player[1]
        }
        else if(game.currentPlayer === game.player[1] && game.rollClear === 0) {
            game.currentPlayer = game.player[0]
        }
        $('.turn-bar').text(game.currentPlayer.name + ", you're up.")
    },
    gameOver: function(){
        if($('#52').html() !== '') {
            console.log("winner")
            return "winner"
        }
    },
    bump: function($piece, targetNum) {
        if($piece.parent().prop("class") == "square backward") {
            // var bumpBackSound = new Audio('https://github.com/katiegoines/boardgame/blob/master/sounds/laser.wav')
            // bumpBackSound.play()
            $piece.fadeOut(400, function() {
                targetNum -= 1
                $('#' + targetNum).append($piece)
                $piece.fadeIn(400)
            })
        }
        else if($piece.parent().prop("class") == "square forward") {
            // var bumpForwardSound = new Audio('https://github.com/katiegoines/boardgame/blob/master/sounds/powerup.wav')
            // bumpForwardSound.play()
            $piece.fadeOut(800, function() {
                targetNum += 1
                $('#' + targetNum).append($piece)
                $piece.fadeIn(800)
            })
        }
    },
    challenge: function($piece) {
        if($piece.parent().prop("class") == "square challenge-one") {
            // var challengeStartSound = new Audio('https://github.com/katiegoines/boardgame/blob/master/sounds/explosionultrabass.wav')
            // challengeStartSound.play()
            console.log('challenge')
            $('.modal-content').css({"display": "block"})
            $('.modal-grab').css({"display": "block"})
            $('#challengeModal').css({"display": "block"})
            grab.playGame()
            // $('modal-tic').css({"display": "none"})
        }
        else if ($piece.parent().prop("class") == "square challenge-two") {
            // var challengeStartSound = new Audio('https://github.com/katiegoines/boardgame/blob/master/sounds/explosionultrabass.wav')
            // challengeStartSound.play()
            console.log('challenge')
            $('.modal-content').css({"display": "block"})
            $('.modal-tic').css({"display": "block"})
            $('#challengeModal').css({"display": "block"})
            tic.playGame()
            $('.status-bar').text("It's " + tic.currentPlayer.name + "'s turn!")
            // $('modal-tic').css({"display": "none"})
        }
    },
    checkWinner: function(target) {
        if(target === 4) {
            $('.modal-content').css({"display": "block"})
            $('.modal-win').css({"display": "block"})
            $('#challengeModal').css({"display": "block"})
        }
    },
    movePiece: function() {
        if($(this).prop("id") == game.currentPlayer.iden && game.rollClear !== 0 && game.gameOver() !== "winner"){                          // If the id of the piece clicked is the same as the id of the current player's piece, and the rollClear funciton 
            var $currentSquareNum = Number($(this).parent().prop("id"))
            var newSquareNum = $currentSquareNum + n
            var $newSquare = $('#' + newSquareNum)
            // var regMoveSound = new Audio('https://github.com/katiegoines/boardgame/blob/master/sounds/laserblast.wav')
            // regMoveSound.play()
            $(this).fadeOut(500, function() {
                $newSquare.append($(this))
                $(this).fadeIn(500, function() {
                    game.challenge($(this))
                    game.bump($(this), newSquareNum)
                })
            })  
            
            game.turnOver()
            game.checkWinner(newSquareNum)
        }         
    },
    roll: function() {
        if(game.rollClear === 0) {                                                                                                          // If the variable rollClear has a value of 0
            // var diceSound = new Audio('https://github.com/katiegoines/boardgame/blob/master/sounds/dice.wav')
            // diceSound.play()                                                                                                                    // 1. Play the sound identified in the line above
            n = Math.ceil(Math.random() * 6)                                                                                                    // 2. Set the variable n to a random number between 0 and 6 (rounded up)
            $('.dice-num').text("You rolled a " + n)                                                                                            // 3. Show what was rolled on the screen
            game.rollClear += 1                                                                                                                 // 4. And add 1 to the current value of rollClear, so that the roll button can't be clicked again until the current player has moved their piece
            $('.roll').css({ "background": "rgba(255,255,255,0.1)", "color":"#575259", "border": "0"})                                          // 5. And change the background color of the roll button so it's not as prominent when people aren't suppoed to click on it
            $('.piece').on('click', game.movePiece)                                                                                             // 6. When the current game piece is clicked on, run the movePiece function
        }
    },
}

game.currentPlayer = game.player[0]
var n = undefined


$('form').on('submit', function(evnt) {                                                                                                     // When a form is submitted,
    evnt.preventDefault()                                                                                                                       // 1. Prevent the default actions (refreshing the page)
    var startSound = new Audio('~/sounds/comet.wav')
    startSound.play()                                                                                                                           // 2. Play the sound identified in the line above
    game.player[0].name = $('#p1-name').val() || "Player 1"                                                                                     // 3. Set the name of player 1 to the value of the first input box, or if it was left empty, to Player 1
    game.player[1].name = $('#p2-name').val() || "Player 2"                                                                                     // 4. Set the name of player 2 to the value of the second input box, or if it was left empty, to Player 2
    $('form').fadeOut(1000, function() {                                                                                                        // 5. Fade out the form
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