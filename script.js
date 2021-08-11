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
    const _boardArray = Array(9).fill("");
    const board = document.querySelector(".board");
    const _cells = document.querySelectorAll(".cell")

    const markBoard = function () {
        //for each element of board array, set text of div element with same index equal to it 
        for (let i = 0; i < _boardArray.length; i++) {
            _cells[i].textContent = _boardArray[i];
        }
    };
    //clear board
    const resetBoard = function () {
        _boardArray.fill("");
    };
    //show current board
    const markArray = function (mark, index) {
        _boardArray[index] = mark;
    };
    const checkForWin = function () {
        if (
            (gameboard._boardArray[0] == "X" &&
                gameboard._boardArray[1] == "X" &&
                gameboard._boardArray[2]) == "X" ||

            (gameboard._boardArray[0] == "X" &&
                gameboard._boardArray[4] == "X" &&
                gameboard._boardArray[8]) == "X" ||

            (gameboard._boardArray[0] == "X" &&
                gameboard._boardArray[3] == "X" &&
                gameboard._boardArray[6]) == "X" ||

            (gameboard._boardArray[2] == "X" &&
                gameboard._boardArray[4] == "X" &&
                gameboard._boardArray[6]) == "X" ||

            (gameboard._boardArray[1] == "X" &&
                gameboard._boardArray[4] == "X" &&
                gameboard._boardArray[7]) == "X" ||

            (gameboard._boardArray[2] == "X" &&
                gameboard._boardArray[5] == "X" &&
                gameboard._boardArray[8]) == "X" ||

            (gameboard._boardArray[3] == "X" &&
                gameboard._boardArray[4] == "X" &&
                gameboard._boardArray[5]) == "X" ||

            (gameboard._boardArray[6] == "X" &&
                gameboard._boardArray[7] == "X" &&
                gameboard._boardArray[8]) == "X"
        ) {
            return true;
        }
    };
    return {
        board,
        _boardArray,
        markBoard,
        resetBoard,
        markArray,
        checkForWin
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
    //create player
    let player1 = Player("player1", "X");
    let player2 = Player("player2", "O");
    let player1Turn = true;

    const updateBoard = function (e) {
        if (!gameboard.checkForWin()) {
            if (player1Turn) {
                //mark clicked space if empty
                if (!e.target.textContent) {

                    player1.markSpace(player1.mark, e.target.dataset.location);
                    player1Turn = !player1Turn;
                }
                else {
                    console.log("pick another spot!")
                }
            }
            else {
                if (!e.target.textContent) {

                    player2.markSpace(player2.mark, e.target.dataset.location);
                    player1Turn = !player1Turn;
                }
                else {
                    console.log("pick another spot!")
                }
            }
            //update board
            gameboard.markBoard();
            //check for win
            //gameboard.checkForWin();
        }
        else {
            console.log("Winner!")
        }
    };

    gameboard.board.addEventListener('click', function (e) {
        updateBoard(e);
    })

    return {
        updateBoard
    }
})();

