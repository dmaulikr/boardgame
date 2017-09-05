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
        n = Math.ceil(Math.random() * 6)                                 // return random number between 1 and 6
        console.log(n)
    }, 
    
}

game.currentPlayer = game.player[0]
var n = undefined

$('#startBtn').on('click', function() {                                        // on click of start button, perform a function
    console.log('clicked start')                                            // console log to confirm the click is working
    $('#0').html(game.player[0].icon + game.player[1].icon)                 // to ID #1, add inner HTML of player icons
    $('#startBtn').remove()                                                    // remove start button 
    var $roll = $('<button>').addClass('roll').text('Roll')                 // create roll button
    $('.roll-bar').append($roll)                                            // add roll button to roll-bar div
    $('.roll').on('click', function () {                                    // on click of start button, perform a function
        game.rollDice()
        $('.piece').on('click', function() {
            console.log(this.id == game.currentPlayer.ident)        
            if(this.id === game.currentPlayer.ident) {
                console.log('clicked piece')
                var $spaceId = $(this).parent().prop("id")
                console.log("Space ID: " + $spaceId)
                var $newSpaceNo = Number($spaceId) + n
                console.log("New space: " + $newSpaceNo)
                $('#' + $newSpaceNo).append(this)
                n = 0
            }  
        })
    })                                     
    

    
    
})
              

// $('.piece').on('click', function() {
//     $(this).appendTo()
// })

