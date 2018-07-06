# farkle

After getting my feet wet in JavaScript and jQuery, I decided to test my knowledge by building a functioning game. I wanted to spend my time coding rather than thinking of game rules, so I decided to clone an existing game. I chose the game Farkle because it is fun to play and has some complex scoring logic that I wanted to work through.

My user stories were as follows: 

1. Player 1 and Player 2 displayed as text on screen
2. Switch between players each turn
3. Highlight which player's turn it is
4. Roll dice function for 6 dice (Math.random)
5. Click on a die to select it for hand
6. Re-click on a die to de-select it for hand
7. "Next Roll" button - player ends current roll and moves score to tempScore
8. Check if out of dice (allow hot hands? nice to have?) - this ended up being a nice to have that I didn't get to
9. Check for farkle
10. Remove hand die from dice available to roll next roll
11. Evaluate hand for score
12. Display handScore, tempScore, realScore
13. Store tempScore at end of each roll
14. Button for banking tempScore to realScore
15. Check for winner at end of each turn - other player then gets one last turn

I used JavaScript to calculate many of my functions, and then used jQuery to manipulate how those items displayed on the page. My approach was to work down my user story list in order and to also think of the order in which game play would proceed in real life. I had a physical copy of Farkle at my desk to help me out!

To play the game, just open the index.html file in your browser. No intallation of other tools needed!

Some unsolved problems I have:

1. If you click on a die to select it, then click it again to de-select it, you can no longer select it.
2. In the real Farkle game, if you are able to score with all 6 dice, you can re-roll all 6 dice - also known as "hot-hands".

Wireframe - To come later when I figure out how to upload a scanned image to a markdown file