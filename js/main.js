var game = {
    // Variables
    player: [
        {
            name: "Player 1",
            score: 0,
            icon: '<img id="piece-1" class="piece" src="https://lh3.googleusercontent.com/ez8pDFoxU2ZqDmyfeIjIba6dWisd8MY_6choHhZNpO0WwLhICu0v0s5eV2WHOhuhKw=w170">',
            ident: "piece-1" 
        },
        {
            name: "Player 2",
            score: 0,
            icon: '<img id="piece-2" class="piece" src="https://clipartion.com/wp-content/uploads/2015/10/penguin-clip-art-for-kids-free-clipart-images-1024x1024.png">',
            ident: "piece-2"
        }
    ],

    // Functions
    turn: function() {
        if(counter === undefined) {
            game.rollDice()
        }
        else if(counter === 0) {            
            game.switchPlayer()   
            game.rollDice()
        }
    }, 
    rollDice: function() {
        n = Math.ceil(Math.random() * 6)
        $('.dice-num').text("Dice Roll: " + n)
        $('.turn-bar').text("Turn: " + game.currentPlayer.name)
        counter += 1
        $('.piece').on('click', game.movePiece)         
        
    },
    switchPlayer: function() {
        if(game.currentPlayer === game.player[0]) {
            game.currentPlayer = game.player[1]
        }
        else if(game.currentPlayer === game.player[1]) {
            game.currentPlayer = game.player[0]
        }
    },
    movePiece: function() {
        if(this.id === game.currentPlayer.ident) {
            var $spaceId = $(this).parent().prop("id")
            var $newSpaceNo = Number($spaceId) + n
            $('#' + $newSpaceNo).append(this)
            n = 0
            counter = 0
        }
    }
}




game.currentPlayer = game.player[0]
var n = undefined
var counter = undefined

$('#startBtn').on('click', function() {
    //console.log('clicked start')
    $('#0').append(game.player[0].icon + game.player[1].icon)
    $('#startBtn').remove()
    var $roll = $('<button>').addClass('roll').text('Roll')
    $('.roll-bar').prepend($roll)
    $('.roll').on('click', game.turn)
})
              


