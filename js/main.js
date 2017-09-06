var game = {
    // Variables
    player: [
        {
            name: "Player 1",
            score: 0,
            icon: '<img id="piece-1" class="piece smoothmove" src="https://lh3.googleusercontent.com/ez8pDFoxU2ZqDmyfeIjIba6dWisd8MY_6choHhZNpO0WwLhICu0v0s5eV2WHOhuhKw=w170">',
            ident: "piece-1" 
        },
        {
            name: "Player 2",
            score: 0,
            icon: '<img id="piece-2" class="piece smoothmove" src="https://clipartion.com/wp-content/uploads/2015/10/penguin-clip-art-for-kids-free-clipart-images-1024x1024.png">',
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
    gameOver: function() {
        if($('#52').html() !== '') {
            console.log("winner")
            $('.modal').css({"display": "initial"})
            $('h1').text('Winner!')
        }
        else{
            return false
        }
    },
    movePiece: function() {
        if(this.id === game.currentPlayer.ident && game.gameOver() == false) {
            
            var $this = $(this)
            //var $spaceId = $(this).parent().prop("id")
            var $currentSpaceNo = Number($this.parent().prop("id"))
            var $newSpaceNo = $currentSpaceNo + n
            var $newSpace = $('#' + $newSpaceNo)
            
            // Not working!

            /*
            console.log("current space num: " + $currentSpaceNo)
            console.log("new space num: " + $newSpaceNo)

            setTimeout(function() {
                for(var i = $currentSpaceNo; i <= $newSpaceNo; i += 1) {
                    var $spaceNo = $currentSpaceNo + i
                    console.log("space num: " + $spaceNo)
                    var $space = $('#' + $spaceNo)
                    $space.append($this)
                }
            }, 500)
            */




            $newSpace.append($this)
            n = 0
            counter = 0
            if($(this).parent().prop("class") == "square backward") {
                //$(this).parent().addClass("red")
                $(this).fadeOut(1000, function() {
                    //$(this).parent().addClass("gray")
                    $newSpaceNo -= 1
                    $('#' + $newSpaceNo).append($this)
                    $this.fadeIn(1000)
                })
            }
            else if($(this).parent().prop("class") == "square forward"){
                $(this).fadeOut(1000, function() {
                    $newSpaceNo += 1
                    $('#' + $newSpaceNo).append($this)
                    $this.fadeIn(1000)
                })
            }
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
              


