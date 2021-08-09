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
    let _boardArray = Array(9).fill("");
    let board = document.querySelector(".board");
    let _cells = document.querySelectorAll(".cell")
    return {
        board,
        _boardArray,
        markBoard: function () {
            //for each element of board array, set text of div element with same index equal to it 
            for (let i = 0; i < _boardArray.length; i++) {
                _cells[i].textContent = _boardArray[i];
            }
        },
        //clear board
        resetBoard: function () {
            _boardArray.fill("");
        },
        //show current board
        markArray: function (mark, index) {
            _boardArray[index] = mark;
        },
        checkForWin: function () {
            if (
                (gameboard._boardArray[0] &&
                    gameboard._boardArray[1] &&
                    gameboard._boardArray[2]) == "X" ||

                (gameboard._boardArray[0] &&
                    gameboard._boardArray[4] &&
                    gameboard._boardArray[8]) == "X" ||

                (gameboard._boardArray[0] &&
                    gameboard._boardArray[3] &&
                    gameboard._boardArray[6]) == "X" ||

                (gameboard._boardArray[2] &&
                    gameboard._boardArray[4] &&
                    gameboard._boardArray[6]) == "X" ||

                (gameboard._boardArray[1] &&
                    gameboard._boardArray[4] &&
                    gameboard._boardArray[7]) == "X" ||

                (gameboard._boardArray[2] &&
                    gameboard._boardArray[5] &&
                    gameboard._boardArray[8]) == "X" ||

                (gameboard._boardArray[3] &&
                    gameboard._boardArray[4] &&
                    gameboard._boardArray[5]) == "X" ||

                (gameboard._boardArray[6] &&
                    gameboard._boardArray[7] &&
                    gameboard._boardArray[8]) == "X"
            ) {
console.log("Winner!");
            }
        }
        
    };
})();

const Player = function (name, playerMark) {
    //set player's mark
    const mark = playerMark;
    //set element at index to mark
    const markSpace = function (mark, index) {
        gameboard.markArray(mark, index);
    }
    return { name, mark, markSpace }
}

const displayController = (function () {

    gameboard.markBoard()
    //create player
    const player1 = Player("player1", "X");
    const player2 = Player("player2", "O");
    
        gameboard.board.addEventListener('click', (e) => {

            //mark clicked space if empty
            if (!e.target.textContent) {

                player1.markSpace(player1.mark, e.target.dataset.location);
            }
            //update board
            gameboard.markBoard();
            //check for win
            displayController.checkForWin();
        })
    
})();
    
