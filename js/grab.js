// Grab Game
var grab = {
    $planet: $('.planet'),
    count: 0,
    timer: 5,

    reset: function() {
        grab.count = 0
        $('.count-bar').text("")
        grab.timer = 6
        $('.time-bar').text("Time left: " + grab.timer + " seconds")
        $('.planet'). remove()
        $('#exitG').remove()
    },
    gameOver: function() {                                                        // FINISH THE GAME
        $('.modal-grab').append('<button id="exitG">Exit</button>')               // 1. show a button to exit the modal
        $('#exitG').on('click', function(){                                          // 2. on click of the button
            $('#challengeModal').css({"display": "none"})                                      // change the display of the modal to 'none'
            $('.modal-grab').css({"display": "none"})  
            game.grabBump()
            grab.reset()
            $('#one-player').remove()
        })
    },

    playGame: function() {
        $(".go").on('click', function() {
            $('.field').append('<div id="o1" class="planet"></div><div id="o2" class="planet"></div><div id="o3" class="planet"></div><div id="o4" class="planet"></div><div id="o5" class="planet"></div><div id="o6" class="planet"></div><div id="o7" class="planet"></div><div id="o8" class="planet"></div>')
            $('.go').css({"display": "none"})
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
                top: Math.random() * 400,
                }, 1000)
            })
        
            setInterval(function(){
                $('#o2').animate({
                left: Math.random() * 600, 
                top: Math.random() * 400,
                }, 950)
            })
        
            setInterval(function(){
                $('#o3').animate({
                left: Math.random() * 600, 
                top: Math.random() * 400,
                }, 900)
            })
        
            setInterval(function(){
                $('#o4').animate({
                left: Math.random() * 600, 
                top: Math.random() * 400,
                }, 850)
            })
        
            setInterval(function(){
                $('#o5').animate({
                left: Math.random() * 600, 
                top: Math.random() * 400,
                }, 800)
            })
        
            setInterval(function(){
                $('#o6').animate({
                left: Math.random() * 600, 
                top: Math.random() * 400,
                }, 750)
            })
        
            setInterval(function(){
                $('#o7').animate({
                left: Math.random() * 600, 
                top: Math.random() * 400,
                }, 700)
            })
        
            setInterval(function(){
                $('#o8').animate({
                left: Math.random() * 600, 
                top: Math.random() * 400,
                }, 650)
            })
        
            setInterval(function(){
                $('#o9').animate({
                left: Math.random() * 600, 
                top: Math.random() * 400,
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