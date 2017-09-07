
// Click One Player
$('#one-player').on('click', function() {
    $('.modal-paragraph').remove()
    var $grabGame = $('<h1>Collect All the Parts</h1><div class="field"><button class="go">Go</button></div>')
    $('.modal-content').append($grabGame)
    grab.playGame()
})

// Click Two Player
$('#two-player').on('click', function() {
    $('.modal-paragraph').remove()
    var $tictactoe = $('<h1>Tic Tac Toe Challenge</h1><div class="grid"><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div></div><div class="status-bar"></div>')
    $('.modal-content').append($tictactoe)
    tic.playGame()
    $('.status-bar').text("It's " + tic.currentPlayer.name + "'s turn!")
})