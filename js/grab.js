// Grab Game
var grab = {
    $screw: $('.screw'),
    count: 0,
    timer: 5,

    grabBump: function() {
        var cPiece = undefined
        if(game.currentPlayer.iden == 'piece-1') {
            cPiece = game.player[1].icon
            var $curSqNu = Number($("#piece-2").parent().prop("id"))
            var $newSqNum = $curSqNu + grab.count
            var $newSq = $("#" + $newSqNum)
            var challengeForwardSound = new Audio('file:///Users/katiegoines/WDI_51/W03/project_01_game/sounds/powerup2.wav')
            challengeForwardSound.play()
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
            var challengeForwardSound = new Audio('file:///Users/katiegoines/WDI_51/W03/project_01_game/sounds/powerup2.wav')
            challengeForwardSound.play()
            $("#piece-1").fadeOut(1000,function() {
                $newSq.append($("#piece-1"))
                $('#piece-1').fadeIn(1000)
            })
        }
    },
    reset: function() {
        grab.count = 0
        $('.count-bar').text("")
        grab.timer = 6
        $('.time-bar').text("Time left: " + grab.timer + " seconds")
        $('.screw'). remove()
        $('#exitG').remove()
    },
    gameOver: function() {                                                        // FINISH THE GAME
        $('.modal-grab').append('<button id="exitG">Exit</button>')               // 1. show a button to exit the modal
        $('#exitG').on('click', function(){                                          // 2. on click of the button
            $('#challengeModal').css({"display": "none"})                                      // change the display of the modal to 'none'
            $('.modal-grab').css({"display": "none"})  
            grab.grabBump()
            grab.reset()
            // $('#one-player').remove()
        })
    },

    playGame: function() {
        $(".go").on('click', function() {
            $('.field').append('<div id="o1" class="screw"></div><div id="o2" class="screw"></div><div id="o3" class="screw"></div><div id="o4" class="screw"></div><div id="o5" class="screw"></div><div id="o6" class="screw"></div><div id="o7" class="screw"></div><div id="o8" class="screw"></div>')
            $('.go').css({"display": "none"})
            function fn(){
                $('.time-bar').text("Time left: " + grab.timer + " seconds")
                grab.timer = grab.timer - 1
                if (grab.timer < 0){ 
                    clearInterval(timerInterval)
                    $('.screw').remove()
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
        
            $(".screw").on('click', function() {
                grab.count += 1
                console.log('grab count' + grab.count)
                $(this).remove()
                var catchSound = new Audio('file:///Users/katiegoines/WDI_51/W03/project_01_game/sounds/fryingpan.wav')
                catchSound.play()
                $('.count-bar').text("You've caught " + grab.count + " pieces!")
            })
        })
        
    }
}