
    //var $grabGame = $('<h1>Collect All the Parts</h1><div class="field"><button class="go">Go</button></div>')
    //var $tictactoe = $('<h1>Tic Tac Toe Challenge</h1><div class="grid"><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div></div><div class="status-bar"></div>')
    
    // var $onePlayer = $('<button id="one-player">One Player</button>')
    // var $twoPlayer = $('<button id="two-player">Two Player</button>')
    
    // var $challengeQuestion = $('<div class="modal-paragraph"><p>Do you want a <button id="one-player">One Player</button> or <button id="two-player">Two Player</button> challenge?</p></div>')    

// Click One Player
$('#one-player').on('click', function() {
    console.log('clicked one player')
    $('.modal-question').css({"display": "none"})
    $('.go').css({"display": "block"})
    $('.modal-grab').css({"display": "block"})
    grab.playGame()
})

// Click Two Player
$('#two-player').on('click', function() {
    console.log('clicked two player')
    $('.modal-question').css({"display": "none"})
    $('.modal-tic').css({"display": "block"})
    $('.box').text('')
    tic.squaresFilled = 0
    $('#exit').remove()
    tic.playGame()
    $('.status-bar').text("It's " + tic.currentPlayer.name + "'s turn!")
})