var game = {
    // Variables
    player: [
        {
            name: "Player 1",
            icon: '<img id="piece-1" class="piece" src="https://lh3.googleusercontent.com/ez8pDFoxU2ZqDmyfeIjIba6dWisd8MY_6choHhZNpO0WwLhICu0v0s5eV2WHOhuhKw=w170">',
            iden: "piece-1"
        },
        {
            name: "Player 2",
            icon: '<img id="piece-2" class="piece" src="https://clipartion.com/wp-content/uploads/2015/10/penguin-clip-art-for-kids-free-clipart-images-1024x1024.png">',
            iden: "piece-2"
        }
    ],
    rollClear: 0,

    // Functions
    turnOver: function() {
        n = 0
        game.rollClear = 0
        game.switchPlayer()
        $('.roll').css({"background": "#75B775"})
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
    // fadeBack: function() {

    // },
    // fadeForward: function() {

    // },
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
            $newSquare.append($(this))                   
            
            game.turnOver()

            game.bump($(this), newSquareNum)
            
            game.checkWinner(newSquareNum)
                
            
        }  
        /*else if($(this).prop("id") != game.currentPlayer.iden && game.rollClear !== 0) {
            alert('Not your turn!')
        } */         
    },
    roll: function() {
        if(game.rollClear === 0) {
            n = Math.ceil(Math.random() * 6)                                //console.log("n on roll: " + n)
            $('.dice-num').text("You rolled a " + n)
            game.rollClear += 1
            $('.roll').css({"background": "white"})
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

