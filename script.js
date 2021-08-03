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
//--------------
//array of 9 empty elements

//mark board
//---------------
 //for each element of board array, set text of div element with same index equal to it

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
const gameboard = (function () {
    //create board
    let boardArray = ["X", "X", "O", "X", "O", "O", "X", "O", "X"];//Array(9).fill("");
    let board = document.querySelector(".board");
    let cells=document.querySelectorAll(".cell")
    return {
        boardArray,
        board,
        cells,
        markBoard: function () {
            //for each element of board array, set text of div element with same index equal to it 
            for (let i = 0; i < boardArray.length; i++) {
                cells[i].textContent = boardArray[i];
            }
        },
        //clear board
        resetBoard: function () {
            boardArray.fill("");
        },
        //show current board
        displayBoard: function () {
            console.log(boardArray);
        }
    };
})();

const Player = function(name) {
    const markSpace = function(mark,index) {
gameboard.boardArray[index] = mark;
    }
    return {name,markSpace}
}

const displayController = (function() {

})();

// gameboard._board.forEach((el)=>{
// el.addEventListener('click',(e)=>{
//     console.log(e)
// })
// })
const player1 = Player("player1");
gameboard.board.addEventListener('click',(e)=>{
    

    console.log(e.target.dataset.location);
    player1.markSpace("X",e.target.dataset.location)
    gameboard.markBoard();
})