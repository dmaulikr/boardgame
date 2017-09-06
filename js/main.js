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
    n: undefined,
    counter: undefined,

    // Functions
    turn: function() {
        if(game.counter === undefined) {
            game.rollDice()
        }
        else if(game.counter === 0) {            
            game.switchPlayer()   
            game.rollDice()
        }
    }, 
    rollDice: function() {
        n = Math.ceil(Math.random() * 6)
        $('.dice-num').text("Dice Roll: " + n)
        $('.turn-bar').text("Turn: " + game.currentPlayer.name)
        game.counter += 1
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
    skipBack: function() {
        
    },
    skipForward: function() {

    },
    movePiece: function() {
        if(this.id === game.currentPlayer.ident) {
            var $this = $(this)
            var $newSpaceNo = Number($(this).parent().prop("id")) + n
            var $newSpace = $('#' + $newSpaceNo)
            var $parent = $this.parent()

            var x = $parent.offset().left
            console.log(x)
            var y = $parent.offset().top
            console.log(y)

            var xi = $newSpace.offset().left
            console.log(xi)
            var yi = $newSpace.offset().top
            console.log(yi)
            
            //$this.css({'left': 0}).css({'top': 0})
            $this.animate({left: xi, top: yi})
            console.log($this.offset().left)
            console.log($this.offset().top)
            // $this.each(function(index){
            //     var xi = $this.offset().left
            //     var yi = $this.offset().top
            //     $this.css('left', xi).css('top'.yi)
            //     $this.click(function(){
            //         $this.animate({left: x, top:y})
            //     })
            // })
            
            
            
            
            
            
            //$newSpace.append($this)
            n = 0
            game.counter = 0
            if($this.parent().prop("class") == "square backward") {
                $this.fadeOut(1000, function() {
                    $newSpaceNo -= 1
                    $('#' + $newSpaceNo).append($this)
                    $this.fadeIn(1000)
                })
            }
            else if($this.parent().prop("class") == "square forward"){
                $this.fadeOut(1000, function() {
                    $newSpaceNo += 1
                    $('#' + $newSpaceNo).append($this)
                    $this.fadeIn(1000)
                })
            }
        }
    }
}




game.currentPlayer = game.player[0]

$('#startBtn').on('click', function() {
    //console.log('clicked start')
    $('#0').append(game.player[0].icon + game.player[1].icon)
    $('#startBtn').remove()
    var $roll = $('<button>').addClass('roll').text('Roll')
    $('.roll-bar').prepend($roll)
    $('.roll').on('click', game.turn)
})
              


