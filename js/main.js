//Main Board Game

var game = {
    // Variables
    player: [
        {
            name: undefined,
            icon: '<img id="piece-1" class="piece" src="file:///Users/katiegoines/WDI_51/W03/project_01_game/images/spaceship-yellow-sm.png">',
            iden: "piece-1"
        },
        {
            name: undefined,
            icon: '<img id="piece-2" class="piece" src="file:///Users/katiegoines/WDI_51/W03/project_01_game/images/spaceship-green-sm.png">',
            iden: "piece-2"
        }
    ],
    rollClear: 0,

    // Functions
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
        $('.turn-bar').text(game.currentPlayer.name + ", you're up.")                             //console.log(game.currentPlayer.name)
    },
    gameOver: function(){
        if($('#52').html() !== '') {
            console.log("winner")
            return "winner"
        }
    },
    bump: function($piece, targetNum) {
        if($piece.parent().prop("class") == "square backward") {
            var bumpBackSound = new Audio('file:///Users/katiegoines/WDI_51/W03/project_01_game/sounds/laser.wav')
            bumpBackSound.play()
            $piece.fadeOut(400, function() {
                targetNum -= 1
                $('#' + targetNum).append($piece)
                $piece.fadeIn(400)
            })
        }
        else if($piece.parent().prop("class") == "square forward") {
            var bumpForwardSound = new Audio('file:///Users/katiegoines/WDI_51/W03/project_01_game/sounds/powerup.wav')
            bumpForwardSound.play()
            $piece.fadeOut(800, function() {
                targetNum += 1
                $('#' + targetNum).append($piece)
                $piece.fadeIn(800)
            })
        }
    },
    
    
    challenge: function($piece) {
        if($piece.parent().prop("class") == "square challenge") {
            var challengeStartSound = new Audio('file:///Users/katiegoines/WDI_51/W03/project_01_game/sounds/explosionultrabass.wav')
            challengeStartSound.play()
            console.log('challenge')
            $('.modal-content').css({"display": "block"})
            $('.modal-question').css({"display": "block"})
            $('#challengeModal').css({"display": "block"})
            $('modal-tic').css({"display": "none"})
            
            //$('.modal-content').append($challengeQuestion)
        }
    },
    checkWinner: function(target) {
        if(target === 52) {
            $('h1').text('Winner')
            $('body').css({"background-image": "url('images/giphy.gif')"})
        }
    },
    movePiece: function() {
        if($(this).prop("id") == game.currentPlayer.iden && game.rollClear !== 0 && game.gameOver() !== "winner"){
            var $currentSquareNum = Number($(this).parent().prop("id"))         //console.log("current sq num: " + $currentSquareNum)
            var newSquareNum = $currentSquareNum + n                            //console.log("new sq num: " + newSquareNum)    //console.log("n: " + n)
            var $newSquare = $('#' + newSquareNum)
            var regMoveSound = new Audio('file:///Users/katiegoines/WDI_51/W03/project_01_game/sounds/laserblast.wav')
            regMoveSound.play()
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
        if(game.rollClear === 0) {
            var diceSound = new Audio('file:///Users/katiegoines/WDI_51/W03/project_01_game/sounds/dice.wav')
            diceSound.play()
            n = Math.ceil(Math.random() * 6)                                //console.log("n on roll: " + n)
            $('.dice-num').text("You rolled a " + n)
            game.rollClear += 1
            $('.roll').css({ "background": "rgba(255,255,255,0.1)", "color":"#575259", "border": "0"})
            $('.piece').on('click', game.movePiece)
        }
    },
}




game.currentPlayer = game.player[0]
var n = undefined


$('form').on('submit', function(evnt) {
    evnt.preventDefault()
    var startSound = new Audio('file:///Users/katiegoines/WDI_51/W03/project_01_game/sounds/comet.wav')
    startSound.play()
    game.player[0].name = $('#p1-name').val() || "Player 1"
    game.player[1].name = $('#p2-name').val() || "Player 2"
    $('form').fadeOut(1000, function() {
        $('.turn-bar').html(game.currentPlayer.name + " is up first. Click the 'roll' button then click your piece to move.")
        $('#0').append(game.player[0].icon, game.player[1].icon)
        var $roll = $('<button>').addClass('roll').text('Roll')
        $('.roll-bar').append($roll)
        $roll.on('click', game.roll)
    })

 

    
    
})








