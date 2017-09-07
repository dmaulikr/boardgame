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
    challenge: function($piece) {
        if($piece.parent().prop("class") == "square challenge") {
            console.log('challenge')
            $('#myModal').css({"display": "block"})
            // var $onePlayer = $('<button id="one-player">One Player</button>')
            // var $twoPlayer = $('<button id="two-player">Two Player</button>')
            // var $ques = $('<p>Do you want a one- or two-player challenge?</p>')
            // $('.modal-content').append($ques, $onePlayer, $twoPlayer)
            $('.close').on('click', function() {
                $('#myModal').css({"display": "none"})
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
            game.challenge($(this))
        }         
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


// TIC TAC TOE

var tic = {
    player: [
        {
            name: game.currentPlayer.name,
            symbol: "X"
        },
        {
            name: "name",
            symbol: "O"
        }
    ],
    $box: $('.box'),
    $statusBar: $('.status-bar'),
    $p1: $('.p1'),
    $p2: $('.p2'),    
    squaresFilled: 0,
    checkLine: function(a,b,c) {
        if ($('.box')[a].innerText === $('.box')[b].innerText && 
            $('.box')[a].innerText === $('.box')[c].innerText && 
            $('.box')[a].innerText !== '') {
                return true
        }
    }, 
    checkWinner: function() {
        if(tic.checkLine(0,1,2) === true || 
            tic.checkLine(3,4,5) === true || 
            tic.checkLine(6,7,8) === true || 
            tic.checkLine(0,3,6) === true || 
            tic.checkLine(1,4,7) === true || 
            tic.checkLine(2,5,8) === true || 
            tic.checkLine(0,4,8) === true || 
            tic.checkLine(2,4,6) === true) {
                //console.log("Winner")
                return true
        }
    },
    // whoWinner: function() {
    //     if(tic.checkWinner() === true){
    //         if(tic.currentPlayer === tic.player[0]) {
    //             $('.status-bar').text(tic.currentPlayer.name + ", go forward 2 extra spaces!")
    //             console.log('forward') 
    //             return "forward"
    //         }
    //         else if (tic.currentPlayer === tic.player[1]) {
    //             $('.status-bar').text(tic.player[0].name + ", you've been bumped back two spaces")
    //             console.log('back')
    //             return "back"
    //         }
    //         console.log(tic.currentPlayer.name)
    //     }
    // },
    switchPlayer: function() {
        if(tic.currentPlayer === tic.player[0]){
            tic.currentPlayer = tic.player[1]
            //console.log("Player 2's turn")
        }
        else if(tic.currentPlayer === tic.player[1]) {
            tic.currentPlayer = tic.player[0]
            //console.log("Player 1's turn")
        }
        $('.status-bar').text("It's " + tic.currentPlayer.name + "'s turn!")        
    },
    isFull: function() {
        if(tic.squaresFilled === 9){
            return true
        }
        else {
            return false
        }
    },
    noWinner: function() {
        if(tic.isFull() === true && tic.checkWinner() === false) {
            $('.status-bar').text("It's a draw. " + tic.player[0].name + ", stay where you are.")                        
            console.log("draw")            
            return true
        }
        else {
            return false
        }
    },
    gameOver: function() {
        if(tic.isFull() === true || tic.checkWinner() === true){
            return true
            console.log('game ovs')
        }
        else {
            return false
        }
    }, 
    finish: function() {
        console.log('game over')
        $('.modal-content').append('<button id="exit">Exit</button>')
        $('#exit').on('click', function(){
            $('#myModal').css({"display": "none"})
        })
        if(tic.noWinner() === true) {
            console.log('draw')
        }
        else if(tic.checkWinner() === true){
            console.log('yes winner')
            tic.whoWinner()
            //console.log('forward')
        }
        // else if(tic.whoWinner() === "back") {
        //     console.log('back')
        // }  
    },
    playGame: function() {
        if(tic.gameOver() === false){
            $('.box').on('click', function() {
                if($(this).text() === ''){
                    $(this).text(tic.currentPlayer.symbol)
                    tic.switchPlayer()
                    tic.squaresFilled +=1
                    console.log(tic.gameOver())
                }
            })
        }
        else if (tic.gameOver() === true){
            tic.finish()
        }
    }
//     clickSquare: function() {
        
//             if( && tic.gameOver() !== true) {  
                
//                 // if(tic.gameOver() !== true) {
                    
//                 // }
//             }
//             else if(tic.gameOver() === true) {
//                 tic.finish()
//             }
//         })
//     }
}

tic.currentPlayer = tic.player[0]




$('#one-player').on('click', function() {
    $('.modal-paragraph').remove()
    // Add whack a mole

})

$('#two-player').on('click', function() {
    $('.modal-paragraph').remove()
    // add tic tac toe
    var $tictactoe = $('<h1>Tic Tac Toe Challenge</h1><div class="grid"><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div></div><div class="status-bar"></div>')
    $('.modal-content').append($tictactoe)
    tic.playGame()
    $('.status-bar').text("It's " + tic.currentPlayer.name + "'s turn!")
    //console.log(tic.currentPlayer.name)
})









// if(tic.gameOver() === true) {
//     $('.modal-content').append('<button id="exit">Exit</button>')
//     $('#exit').on('click', function(){
//         $('#myModal').css({"display": "none"})

//         if(tic.checkWinner() === "forward") {

//         }

//     })

// tic.noWinner()
// }