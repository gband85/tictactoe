/*what is the problem?
play tictactoe

what is the interface?
graphic interface

what are the inputs?
player clicking on board

what is the output?
display on the page the marked spaces on the board,which player's turn it is, which player is x and o, and when a player wins

Given your inputs, what are the steps necessary to return the desired output? 

start game 
board created
while there is no winner:
when it's player 1's turn,
wait for click event
the player clicks the board where he wants to play.
 The board is marked Where the Player clicks. 
 program checks For a winner. 
when it is player 2's turn,
 player clicks the board where he wants
 board is marked where the player clicks. 
 program checks for winner
repeat until someone wins
display winner, wait for reset

*/
//board module
//what does it need to do?
//create board
//reset board
//return board state

//player factory
//what does it need to do?
//mark spots

//display module
//what does it need to do?
//handle input -- from clickevents
//update board
//check for win

//gameboard module
let gameboard = (function() {
    //create board
      let _boardArray=["X","X","O","X","O","O","X","O","X"];//Array(9).fill("");
      let _board=document.querySelectorAll(".cell");    
let _keys = _boardArray.keys();
    return {
          markBoard: function() {
              //for each index of board array, set text of elem 
           for (const key of _keys) {
_board[key].textContent=_boardArray[key];
            }

        },
        //clear board
       resetBoard: function()  {
_boardArray.fill("");
        },
        //show current board
        displayBoard: function() {
            console.log(_boardArray);
        }
    };
})();

