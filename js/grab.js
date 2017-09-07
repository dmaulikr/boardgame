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

    reset: function() {
        grab.count = 0
        $('.count-bar').text("")
        grab.timer = 5
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
        })
    },

    playGame: function() {
        $(".go").on('click', function() {
            $('.field').append('<div id="o1" class="planet"></div><div id="o2" class="planet"></div><div id="o3" class="planet"></div><div id="o4" class="planet"></div><div id="o5" class="planet"></div><div id="o6" class="planet"></div><div id="o7" class="planet"></div><div id="o8" class="planet"></div>')
            // $('.timer-bar').css({"display": "block"})
            // $('.count-bar').css({"display": "block"})
            $('.go').css({"display": "none"})
            function fn(){
                $('.time-bar').text("Time left: " + grab.timer + " seconds")
                grab.timer = grab.timer - 1
                if (grab.timer <= 0){ 
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