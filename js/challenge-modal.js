
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