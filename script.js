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
    const boardArray = Array(9).fill("");
    const board = document.querySelector(".board");
    const _cells = document.querySelectorAll(".cell")

    const markBoard = function () {
        //for each element of board array, set text of div element with same index equal to it 
        for (let i = 0; i < boardArray.length; i++) {
            _cells[i].textContent = boardArray[i];
        }
    };
    //clear board
    const resetBoard = function () {
        boardArray.fill("");
    };
    //show current board
    const markArray = function (mark, index) {
        boardArray[index] = mark;
    };

    return {
        board,
        boardArray,
        markBoard,
        resetBoard,
        markArray
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
let player1,player2;
let player1Turn;
let winner=document.querySelector(".winner");

gameboard.resetBoard();
gameboard.markBoard();

        //listen for clicks
     document.querySelector(".new-game").addEventListener("click", function() {

                //create player
         player1 = Player(prompt("Enter your name, player 1!"), "X");
         player2 = Player(prompt("Enter your name, player 2!"), "O");
        player1Turn = true;

               gameboard.board.addEventListener('click', function (e) {
            playGame(e);
        })

    })

    const checkForWin = function () {
        const { boardArray } = gameboard;
         if (
            (boardArray[0] == "X" &&
                boardArray[1] == "X" &&
                boardArray[2] == "X") ||

            (boardArray[0] == "X" &&
                boardArray[4] == "X" &&
                boardArray[8] == "X") ||

            (boardArray[0] == "X" &&
                boardArray[3] == "X" &&
                boardArray[6] == "X") ||

            (boardArray[2] == "X" &&
                boardArray[4] == "X" &&
                boardArray[6] == "X") ||

            (boardArray[1] == "X" &&
                boardArray[4] == "X" &&
                boardArray[7] == "X") ||

            (boardArray[2] == "X" &&
                boardArray[5] == "X" &&
                boardArray[8] == "X") ||

            (boardArray[3] == "X" &&
                boardArray[4] == "X" &&
                boardArray[5] == "X") ||

            (boardArray[6] == "X" &&
                boardArray[7] == "X" &&
                boardArray[8] == "X")
        ) {
return player1.name;
        }
         if (
            (boardArray[0] == "O" &&
            boardArray[1] == "O" &&
            boardArray[2] == "O") ||

        (boardArray[0] == "O" &&
            boardArray[4] == "O" &&
            boardArray[8] == "O") ||

        (boardArray[0] == "O" &&
            boardArray[3] == "O" &&
            boardArray[6] == "O") ||

        (boardArray[2] == "O" &&
            boardArray[4] == "O" &&
            boardArray[6] == "O") ||

        (boardArray[1] == "O" &&
            boardArray[4] == "O" &&
            boardArray[7] == "O") ||

        (boardArray[2] == "O" &&
            boardArray[5] == "O" &&
            boardArray[8] == "O") ||

        (boardArray[3] == "O" &&
            boardArray[4] == "O" &&
            boardArray[5] == "O") ||

        (boardArray[6] == "O" &&
            boardArray[7] == "O" &&
            boardArray[8] == "O")
         )
          {
            return player2.name;
        }
    };


    const playGame = function (e) {
        if (checkForWin()!=player1.name && checkForWin()!=player2.name) {
            if (player1Turn) {
                //mark clicked space if empty
                if (!e.target.textContent) {

                    player1.markSpace(player1.mark, e.target.dataset.location);
                    player1Turn = !player1Turn;
                }
                else {
                    alert("pick another spot!")
                }
            }
            else {
                if (!e.target.textContent) {

                    player2.markSpace(player2.mark, e.target.dataset.location);
                    player1Turn = !player1Turn;
                }
                else {
                    alert("pick another spot!")
                }
            }
            //update board
            gameboard.markBoard();
            //check for win
            //gameboard.checkForWin();
        }
        else {
          //  let winner=player;
         winner.textContent =checkForWin() + " wins!";
            gameboard.resetBoard();
            gameboard.markBoard();
            player1Turn=true;
        }
    };


document.querySelector(".reset").addEventListener("click", function() {
    gameboard.resetBoard();
    gameboard.markBoard();
    player1Turn=true;
})


})();

