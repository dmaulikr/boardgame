# Race Through Space

## A two-player, space themed board game.

Two players have landed on some-orange-planet-far-far-away and will race to get home to Earth. Why? Because this is a game. While players traverse through space, they will encounter different types of votexes - ones that shoot them forward, ones that shoot them backward, and ones that pose a challenge. The goal of Race Through Space is to be the first player to reach Earth.

<img width="988" alt="screenshot" src="https://user-images.githubusercontent.com/30757403/30215602-5674ee2c-9465-11e7-8831-dbb40b3f9b25.png">





### To Play

Taking turns, two players "roll dice" to move their spaceships on the board.

This is mostly a game of luck, dependent heavily on a roll of the dice, but if players land on a "challenge" space, they can try to get ahead by beating their opponent at tic-tac-toe or catching screws flying around.

To start, 

1. Enter player 1 and player 2's names (or name your spaceships!)
2. Click 'Go' to start the game
3. Click 'Roll'
4. Click on your spaceship game piece to move it forward

### Technology Used

HMTL, CSS, JavaScript, jQuery

The game boards were created and styled using HTML and CSS, and the game's interactivity was developed with JavaScript and jQuery.

### User Stories

As a player, I can enter my player name for easier tracking of turns.

As a player, I click a button to stand-in for dice-rolling, to find out what spot I will move to.

As a player, my game piece moves forward or backward depending on the action assigned to each space and the number I "rolled".

As a player, I can play a sub game if I land on a "challenge" space, so the game is more interesting.

As a player, I know when I've won because it is announced clearly.

### Approach

First I listed a backlog in Trello (but later sort of abandoned it, which is why it's not linked here. Shouldn't have worked without a plan on some features, as I kept realizing I'd missed scenarios to account for).

Then I planned out my board [here](https://docs.google.com/spreadsheets/d/1omj6Uuwytwop5jVp8NGy315w4UICILinf9a8YGMPBf8/edit?usp=sharing).

Then I built the game in phases:

1. Structure of the board using HTML and CSS.
2. Logic for progression through the board.
3. Logic for special squares
4. Tic Tac Toe bonus game
5. Grab The Screws bonus game
6. Styling

### Outstanding Challenges

The tic-tac-toe board and the catching challenge code needs to be refactored. This code is not DRY. But these are bonus games, so..

When a player lands on a "challenge" space, the intention was to allow them to choose whether they want to play a one- or two-player game. I broke the code, though, and neither supplementary game is resetting correctly after the first time it's played. Until this can be figured out, this has been detoured around and commented out.

When the challenge has already been played. I want there to be a message saying that the player doesn't have to do the challenge since it's been done. It's not working for the Grab the Screws challenge, so it's commented out.

### Future Work

As a player, I want additional challenge games for more excitement.

As a player, I want to choose my own avatar.

As a player, I want my piece to "fly" to it's next spot.

As a player, I want additional animations.

### Acknowledgements

### Fonts
- Google Fonts [[1]](https://fonts.google.com/specimen/Patrick+Hand+SC) [[2]](https://fonts.google.com/specimen/Josefin+Sans)

#### Images
- [Page Background](http://anywalls.com/pic/201305/1920x1080/anywalls.com-66430.jpg)
- [Start Space](https://www.codecademy.com/en/forum_questions/5486150176b8fe6889000a7f)
- [Forward Space](http://www.guoguiyan.com/data/out/209/69778101-vortex-wallpapers.jpg)
- [Backward Space](https://img09.deviantart.net/d31b/i/2006/039/9/4/swirl_vortex_by_acidburnt.jpg)
- [Challenge Space](https://i.ytimg.com/vi.XGPQLV2uz7k/maxresdefault.jpg)
- [Last Space](https://commons.wikimedia.org/wiki/File:The_Earth_seen_from_Apollo_17_with_transparent_background.png)
- [Player 1 Piece](http://keywordsuggest.org/content/205800-orange-rocket-clip-art.html)
- [Player 2 Piece](http://biezumd.com/clipart/clipart-spaceship.html) 
- [Tic Tac Toe Challenge Background](https://i.stack.imgur.com/aa8Dw.jpg)
- [Tic Tac Toe Challenge Player 2 Piece](https://pbs.twimg.com/profile_images/3627005607/2aae0e25c02fe03e8b22437d69d6802c_400x400.png)
- [Grab Challenge Piece](https://images-na.ssl-images-amazon.com/images/I/71NUDOyznBL._SL1497_.jpg)
- [Winner Gif](https://lh5.googleusercontent.com/-mvpIxrtlkAA/Tndmi1sf6zI/AAAAAAAAD1E/I2vwpRqn1z8/s500/FlyEarth500_Micael_Reynaud.gif)



#### Sounds
[[1]](http://soundbible.com/472-Laser-Blasts.html)
[[2]](http://soundbible.com/1636-Power-Up-Ray.html)
[[3]](http://soundbible.com/1610-Power-Failure.html)
[[4]](http://soundbible.com/1639-Power-Up.html)
[[5]](http://soundbible.com/1769-Laser-Gun.html)
[[7]](http://soundbible.com/1919-Shotgun-Blast.html)
[[8]](http://soundbible.com/1807-Explosion-Ultra-Bass.html)
[[9]](http://soundbible.com/1141-Comet.html)
[[10]](http://soundbible.com/182-Shake-And-Roll-Dice.html)
[[11]](http://soundbible.com/1004-Frying-Pan-Hit.html)
[[12]](http://soundbible.com/1522-Balloon-Popping.html)
[[13]](http://soundbible.com/308-Large-Thump-Or-Bump.html)

All images and sounds are borrowed without permission.

### Note

This game is by no means scientifically accurate. Obviously.