//Main Board Game

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
                $('#challengeModal').css({"display": "block"})
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
        //$p1: $('.p1'),
        //$p2: $('.p2'),    
        squaresFilled: 0,

        // Functions
        checkLine: function(a,b,c) {                                                // CHECK IF ANY LINE HAS MATCHING SYMBOLS
            if ($('.box')[a].innerText === $('.box')[b].innerText &&                    // if the inner text of box A is equal to the inner text of box B 
                $('.box')[a].innerText === $('.box')[c].innerText &&                    // AND the inner text of box A is equal to the inner text of box C
                $('.box')[a].innerText !== '') {                                        // AND the inner text of box A is not blank
                    return true                                                             // return true
            }
        }, 
        checkWinner: function() {                                                   // CHECK IF THE GAME HAS BEEN WON
            if(tic.checkLine(0,1,2) === true ||                                         // if running the checkLine function with the top row of squares is true
                tic.checkLine(3,4,5) === true ||                                        // OR running the checkLine function with the middle row of squares is true
                tic.checkLine(6,7,8) === true ||                                        // OR running the checkLine function with the bottom row of squares is true 
                tic.checkLine(0,3,6) === true ||                                        // OR running the checkLine function with the first column of squares is true 
                tic.checkLine(1,4,7) === true ||                                        // OR running the checkLine function with the second column of squares is true 
                tic.checkLine(2,5,8) === true ||                                        // OR running the checkLine function with the third column of squares is true 
                tic.checkLine(0,4,8) === true ||                                        // OR running the checkLine function with the L > R diagonal is true 
                tic.checkLine(2,4,6) === true) {                                        // OR running the checkLine function with the R > L diagonal is true
                    return true                                                             // return true
            }
        },
        draw: function() {                                                          // CHECK IF THE GAME WAS A DRAW
            if(tic.isFull() === true && tic.checkWinner() !== false) {                  // if the board is full but there is no winner
                $('.status-bar').text("It's a draw. " + tic.player[0].name + ", stay where you are.")          // update the status bar to announce there was no winner
                return true                                                                 // return true
            }
        },
        whoWinner: function() {                                                     // FIND OUT WHO THE WINNER IS
            if(tic.checkWinner() === true){                                             // if someone has won the game
                if(tic.currentPlayer === tic.player[0]) {                                   // and if the current player (thus the winner) is player 1
                    $('.status-bar').text(tic.currentPlayer.name + ", go forward 6 extra spaces!")  // update the status bar to show that player 1 won
                    x = 6
                }
                else if (tic.currentPlayer === tic.player[1]) {                             // but if the current player (thus the winner) is player 2
                    $('.status-bar').text(tic.player[0].name + ", you've been bumped back 5 spaces")  // update the status bar to show that player 2 won
                    x = -6
                }
                console.log(tic.currentPlayer.name)                                         // and console log the current player's name
            }
        },
        switchPlayer: function() {                                                  // SWITCH PLAYER
            if(tic.currentPlayer === tic.player[0]){                                    // if the current player is player 1
                tic.currentPlayer = tic.player[1]                                           // switch the current player to player 2
                //console.log("Player 2's turn")
            }
            else if(tic.currentPlayer === tic.player[1]) {                              // but if the current player is player 2
                tic.currentPlayer = tic.player[0]                                           // switch the current player to player 1
                //console.log("Player 1's turn")
            }
            $('.status-bar').text("It's " + tic.currentPlayer.name + "'s turn!")        // and update the status bar to announce the current player   
        },
        isFull: function() {                                                        // CHECK IF THE BOARD IS FULL
            if(tic.squaresFilled === 9){                                                // if the number of squares filled is 9
                return true                                                                 // return true
            }
        },
        gameOver: function() {                                                        // FINISH THE GAME
            $('.modal-content').append('<button id="exit">Exit</button>')               // 1. show a button to exit the modal
            $('#exit').on('click', function(){                                          // 2. on click of the button
                $('#challengeModal').css({"display": "none"})                                      // change the display of the modal to 'none'
                game.challengeBump()
            })
            if(tic.draw() === true) {                                                   // 3. if the game was a draw
                console.log('draw')                                                         // console log 'draw
            }
            else if(tic.checkWinner() === true){                                        // 4. but if there was a winner
                console.log('yes winner')                                                   // console log 'yes winner'
                tic.whoWinner()                                                             // and run whoWinner function
            }
        },
        playGame: function() {
            $('.box').on('click', function() {
                if(tic.isFull() !== true && tic.checkWinner() !== true){
                    if($(this).text() === ''){
                        $(this).text(tic.currentPlayer.symbol)
                        tic.squaresFilled += 1
                        if(tic.checkWinner() !== true && tic.isFull !== true) {
                            tic.switchPlayer()
                        }
                        else {
                            console.log('game over')
                            tic.gameOver()
                        }
                    }
                }
            })
        }
    }

    tic.currentPlayer = tic.player[0]
    var x = undefined


// Grab Game
    var grab = {
        $planet: $('.planet'),
        count: 0,
        timer: 5,
        // $o1: $('#o1'),
        // $o2: $('#o2'),
        // $o3: $('#o3'),
        // $o4: $('#o4'),
        // $o5: $('#o5'),
        // $o6: $('#o6'),
        // $o7: $('#o7'),
        // $o8: $('#o8'),

        gameOver: function() {                                                        // FINISH THE GAME
            $('.modal-content').append('<button id="exit">Exit</button>')               // 1. show a button to exit the modal
            $('#exit').on('click', function(){                                          // 2. on click of the button
                $('#challengeModal').css({"display": "none"})                                      // change the display of the modal to 'none'
                game.grabBump()
            })
        },

        playGame: function() {
            $(".go").on('click', function() {
                $('.field').append('<div id="o1" class="planet"></div><div id="o2" class="planet"></div><div id="o3" class="planet"></div><div id="o4" class="planet"></div><div id="o5" class="planet"></div><div id="o6" class="planet"></div><div id="o7" class="planet"></div><div id="o8" class="planet"></div><div class="time-bar">Time left: 6 seconds</div><div class="count-bar"</div>')
                $('.go').remove()
                function fn(){
                    $('.time-bar').text("Time left: " + grab.timer + " seconds")
                    grab.timer = grab.timer - 1
                    if (grab.timer < 0){
                        clearInterval(timerInterval)
                        $('.planet').remove()
                        grab.gameOver()
                        }
                    }
                var timerInterval = setInterval(fn, 1000)

                setInterval(function(){
                    $('#o1').animate({
                    left: Math.random() * 600, 
                    top: Math.random() * 600,
                    }, 1000)
                })
            
                setInterval(function(){
                    $('#o2').animate({
                    left: Math.random() * 600, 
                    top: Math.random() * 600,
                    }, 950)
                })
            
                setInterval(function(){
                    $('#o3').animate({
                    left: Math.random() * 600, 
                    top: Math.random() * 600,
                    }, 900)
                })
            
                setInterval(function(){
                    $('#o4').animate({
                    left: Math.random() * 600, 
                    top: Math.random() * 600,
                    }, 850)
                })
            
                setInterval(function(){
                    $('#o5').animate({
                    left: Math.random() * 600, 
                    top: Math.random() * 600,
                    }, 800)
                })
            
                setInterval(function(){
                    $('#o6').animate({
                    left: Math.random() * 600, 
                    top: Math.random() * 600,
                    }, 750)
                })
            
                setInterval(function(){
                    $('#o7').animate({
                    left: Math.random() * 600, 
                    top: Math.random() * 600,
                    }, 700)
                })
            
                setInterval(function(){
                    $('#o8').animate({
                    left: Math.random() * 600, 
                    top: Math.random() * 600,
                    }, 650)
                })
            
                setInterval(function(){
                    $('#o9').animate({
                    left: Math.random() * 600, 
                    top: Math.random() * 600,
                    }, 600)
                })
            
                $(".planet").on('click', function() {
                    grab.count += 1
                    console.log('grab count' + grab.count)
                    $(this).remove()
                    $('.count-bar').text("You've caught " + grab.count + " pieces!")
                })
            })
            
        }
    }


// Challenge Modal

    $('#one-player').on('click', function() {
        $('.modal-paragraph').remove()
        var $grabGame = $('<h1>Collect All the Parts</h1><div class="field"><button class="go">Go</button></div>')
        $('.modal-content').append($grabGame)
        grab.playGame()
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