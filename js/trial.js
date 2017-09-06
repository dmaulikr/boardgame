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
    },
    switchPlayer: function() {
        if(game.currentPlayer === game.player[0] && game.rollClear === 0){
            game.currentPlayer = game.player[1]
        }
        else if(game.currentPlayer === game.player[1] && game.rollClear === 0) {
            game.currentPlayer = game.player[0]
        }
        console.log(game.currentPlayer.name)
        $('.turn-bar').text("Turn: " + game.currentPlayer.name)
    },
    fadeBack: function() {

    },
    movePiece: function() {
        if($(this).prop("id") == game.currentPlayer.iden && game.rollClear !== 0){
            var $currentSquareNum = Number($(this).parent().prop("id"))
            console.log("current sq num: " + $currentSquareNum)
            var newSquareNum = $currentSquareNum + n
            console.log("new sq num: " + newSquareNum)
            console.log("n: " + n)
            var $newSquare = $('#' + newSquareNum)
            $newSquare.append($(this))                   
            
            game.turnOver()

            if($(this).parent().prop("class") == "square backward") {
                $(this).fadeOut(1000, function() {
                    newSquareNum -= 1
                    $('#' + newSquareNum).append($(this))
                    $(this).fadeIn(1000)
                })
            }
            else if($(this).parent().prop("class") == "square forward") {
                $(this).fadeOut(1000, function() {
                    newSquareNum += 1
                    $('#' + newSquareNum).append($(this))
                    $(this).fadeIn(1000)
                })
            }
        }                
    }
}

game.currentPlayer = game.player[0]
var n = undefined


$('#startBtn').on('click', function() {
    $('#0').append(game.player[0].icon).append(game.player[1].icon)
    $('#startBtn').remove()
    var $roll = $('<button>').addClass('roll').text('Roll')
    $('.roll-bar').prepend($roll)
    $('.turn-bar').text("Turn: " + game.currentPlayer.name)

    $roll.on('click', function() {
        if(game.rollClear === 0) {
            
            n = Math.ceil(Math.random() * 6)
            console.log("n on roll: " + n)
            $('.dice-num').text("You rolled a " + n)
            game.rollClear += 1

            $('.piece').on('click', game.movePiece)
        }
    })
})