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
    rollDice: function() {
        if(n === undefined) {
            console.log("Current player: " + game.currentPlayer.name)
            n = Math.ceil(Math.random() * 6)
            $('.dice-num').text("Dice Roll: " + n)
        }
        else {
            console.log("Current player: " + game.currentPlayer.name)
            n = Math.ceil(Math.random() * 6)
            $('.dice-num').text("Dice Roll: " + n)
            game.switchPlayer()
        }
    
        //console.log("Dice roll: " + n)
        
    }, 
    switchPlayer: function() {
        if(game.currentPlayer === game.player[0]) {
            game.currentPlayer = game.player[1]
        }
        else if(game.currentPlayer === game.player[1]) {
            game.currentPlayer = game.player[0]
        }
        console.log(game.currentPlayer.name)
        $('.turn-bar').text('Turn: ' + game.currentPlayer.name)
    },
    movePiece: function() {
        //console.log(this.id == game.currentPlayer.ident)        
        if(this.id === game.currentPlayer.ident) {
            //console.log('clicked piece')
            var $spaceId = $(this).parent().prop("id")
            //console.log("Space ID: " + $spaceId)
            var $newSpaceNo = Number($spaceId) + n
            //console.log("New space: " + $newSpaceNo)
            $('#' + $newSpaceNo).append(this)
            n = 0
            game.switchPlayer()
        }
        else {
            alert("Not your turn")
        }
    },
    turn: function() {
        $('.piece').on('click', game.movePiece)        
    }
}




game.currentPlayer = game.player[0]
var n = undefined

$('#startBtn').on('click', function() {
    //console.log('clicked start')
    $('#0').append(game.player[0].icon + game.player[1].icon)
    $('#startBtn').remove()
    var $roll = $('<button>').addClass('roll').text('Roll')
    $('.roll-bar').prepend($roll)
    //$('.roll').on('click', game.rollDice)
    $('.roll').on('click', game.rollDice)
})
              


