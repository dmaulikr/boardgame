//Main Board Game

var game = {
    // Variables
    player: [
        {
            name: undefined,
            icon: '<img id="piece-1" class="piece" src="http://images.clipartpanda.com/spaceship-clipart-rocket-dark-blue-window-hi.png">',
            iden: "piece-1"
        },
        {
            name: undefined,
            icon: '<img id="piece-2" class="piece" src="http://www.clker.com/cliparts/R/a/Z/H/O/K/green-rocket-md.png">',
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
        $('.turn-bar').text("Turn: " + game.currentPlayer.name)                             //console.log(game.currentPlayer.name)
    },
    gameOver: function(){
        if($('#52').html() !== '') {
            console.log("winner")
            return "winner"
        }
    },
    bump: function($piece, targetNum) {
        if($piece.parent().prop("class") == "square backward") {
            $piece.fadeOut(1000, function() {
                targetNum -= 1
                $('#' + targetNum).append($piece)
                $piece.fadeIn(1000)
            })
        }
        else if($piece.parent().prop("class") == "square forward") {
            $piece.fadeOut(1000, function() {
                targetNum += 1
                $('#' + targetNum).append($piece)
                $piece.fadeIn(1000)
            })
        }
    },
    challengeBump: function() {
        var cPiece = undefined
        if(x < 0 && game.currentPlayer.iden == 'piece-1') {
            cPiece = game.player[1].icon
            var $curSqNu = Number($("#piece-2").parent().prop("id"))
            var $newSqNum = $curSqNu - 5
            var $newSq = $("#" + $newSqNum)

            $("#piece-2").fadeOut(1000,function() {
                $newSq.append($("#piece-2"))
                $('#piece-2').fadeIn(1000)
            })
            
        }
        else if(x < 0 && game.currentPlayer.iden == 'piece-2') {
            console.log('move!')
            cPiece = game.player[0].icon
            var $curSqNu = Number($("#piece-1").parent().prop("id"))
            var $newSqNum = $curSqNu - 5
            var $newSq = $("#" + $newSqNum)

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

            $("#piece-1").fadeOut(1000,function() {
                $newSq.append($("#piece-1"))
                $('#piece-1').fadeIn(1000)
            })
        }
    },
    grabBump: function() {
        var cPiece = undefined
        if(game.currentPlayer.iden == 'piece-1') {
            cPiece = game.player[1].icon
            var $curSqNu = Number($("#piece-2").parent().prop("id"))
            var $newSqNum = $curSqNu + grab.count
            var $newSq = $("#" + $newSqNum)

            $("#piece-2").fadeOut(1000,function() {
                $newSq.append($("#piece-2"))
                $('#piece-2').fadeIn(1000)
            })
        }
        else if(game.currentPlayer.iden == 'piece-2') {
            cPiece = game.player[0].icon
            var $curSqNu = Number($("#piece-1").parent().prop("id"))
            var $newSqNum = $curSqNu + grab.count
            var $newSq = $("#" + $newSqNum)

            $("#piece-1").fadeOut(1000,function() {
                $newSq.append($("#piece-1"))
                $('#piece-1').fadeIn(1000)
            })
        }
    },
    challenge: function($piece) {
        if($piece.parent().prop("class") == "square challenge") {
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
    game.player[0].name = $('#p1-name').val() || "Player 1"
    game.player[1].name = $('#p2-name').val() || "Player 2"
    $('form').fadeOut(1000, function() {
        //var $playerTurn = $('<p>').addClass("turnPara").text("Turn: " + game.currentPlayer.name)
        //$('.turn-bar').append($playerTurn)
        //$playerTurn.fadeIn(1000)
        $('.turn-bar').text("Turn: " + game.currentPlayer.name)
    })

    $('#0').append(game.player[0].icon, game.player[1].icon)
    $('.piece').fadeIn(1000)
    var $roll = $('<button>').addClass('roll').text('Roll')
    $('.roll-bar').append($roll)
    $('.roll').fadeIn(1000)

    $roll.on('click', game.roll)
    
})








