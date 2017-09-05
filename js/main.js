var game = {
    // Variables
    player: [
        {
            name: "Player 1",
            score: 0,
            icon: '<img id="piece-1" class="piece" src="https://lh3.googleusercontent.com/ez8pDFoxU2ZqDmyfeIjIba6dWisd8MY_6choHhZNpO0WwLhICu0v0s5eV2WHOhuhKw=w170">',
        },
        {
            name: "Player 2",
            score: 0,
            icon: '<img id="piece-2" class="piece" src="https://clipartion.com/wp-content/uploads/2015/10/penguin-clip-art-for-kids-free-clipart-images-1024x1024.png">',
        }
    ],
    //$start: $('#start')


    // Functions

}

game.currentPlayer = game.player[0]

$('#start').on('click', function() {
    $('#1').html(game.player[0].icon + game.player[1].icon)
    $('#start').remove()
})

// $('.piece').on('click', function() {
//     $(this).appendTo()
// })

