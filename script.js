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
    const _cells = document.querySelectorAll(".cell");
    const markBoard = function () {

        //for each element of board array if present, add h3 to div element with same index

        for (let i = 0; i < boardArray.length; i++) {
            if (boardArray[i]) {
                _cells[i].innerHTML = `<h3 class="mark">${boardArray[i]}</h3>`;
            }
        }
    };
    //clear board
    const resetBoard = function () {
        boardArray.fill("");
        console.log(boardArray);
        console.log(_cells)
        for (let i = 0; i < boardArray.length; i++) {
            _cells[i].innerHTML = "";
            // console.log(_cells[i].textContent)
        }
    };
    //show current board
    const markArray = function (mark, index) {
        boardArray[index] = mark;
    };

    const getArray = function() {
        return boardArray;
    }

    return {
        getArray,
        markBoard,
        resetBoard,
        markArray
    };
})();

const Player = function (name, mark) {
    //set element at index to mark
    const markSpace = function (mark, index) {
        gameboard.markArray(mark, index);
    }
    return { name, mark, markSpace }
}

const displayController = (function () {

    const checkForWin = function () {
        const { getArray } = gameboard;
        if (
            (getArray()[0] == "X" &&
               getArray()[1] == "X" &&
                getArray()[2] == "X") ||

            (getArray()[0] == "X" &&
                getArray()[4] == "X" &&
                getArray()[8] == "X") ||

            (getArray()[0] == "X" &&
                getArray()[3] == "X" &&
                getArray[6] == "X") ||

            (getArray()[2] == "X" &&
                getArray()[4] == "X" &&
                getArray()[6] == "X") ||

            (getArray()[1] == "X" &&
                getArray()[4] == "X" &&
                getArray()[7] == "X") ||

            (getArray()[2] == "X" &&
                getArray()[5] == "X" &&
                getArray()[8] == "X") ||

            (getArray()[3] == "X" &&
                getArray()[4] == "X" &&
                getArray()[5] == "X") ||

            (getArray()[6] == "X" &&
                getArray()[7] == "X" &&
                getArray()[8] == "X")
        ) {
            return player1.name;
        }
        if (
            (getArray()[0] == "O" &&
                getArray()[1] == "O" &&
                getArray()[2] == "O") ||

            (getArray()[0] == "O" &&
                getArray()[4] == "O" &&
                getArray()[8] == "O") ||

            (getArray()[0] == "O" &&
                getArray()[3] == "O" &&
                getArray()[6] == "O") ||

            (getArray()[2] == "O" &&
                getArray()[4] == "O" &&
                getArray()[6] == "O") ||

            (getArray()[1] == "O" &&
                getArray()[4] == "O" &&
                getArray()[7] == "O") ||

            (getArray()[2] == "O" &&
                getArray()[5] == "O" &&
                getArray()[8] == "O") ||

            (getArray()[3] == "O" &&
                getArray()[4] == "O" &&
                getArray()[5] == "O") ||

            (getArray()[6] == "O" &&
                getArray()[7] == "O" &&
                getArray()[8] == "O")
        ) {
            return player2.name;
        }
    };

    const playGame = function (e) {
        if (checkForWin() != player1.name && checkForWin() != player2.name) {
            console.log(`e.target.textContent: ${e.target.textContent}`)
            if (!e.target.textContent) {
                if (player1Turn) {
                    //mark clicked space if empty
                    player1.markSpace(player1.mark, e.target.dataset.location);
                }
                else {
                    player2.markSpace(player2.mark, e.target.dataset.location);
                }
                //update board
                gameboard.markBoard();
                player1Turn = !player1Turn;
            }
            else {
                alert("pick another spot!")
            }
        }
        else {
            //  let winner=player;
            winner.textContent = checkForWin() + " wins!";
        }
    };

    const playGameWrapper = function (e) {
        playGame(e)
    }
    const newGame = function () {
        gameboard.resetBoard();
        //create players
        player1 = Player(prompt("Enter your name, player 1!"), "X");
        player2 = Player(prompt("Enter your name, player 2!"), "O");
        player1Turn = true;
        winner.textContent = "";
        document.querySelector(".board").addEventListener('click', playGameWrapper, false);
    }

    let player1, player2;
    let player1Turn;
    let winner = document.querySelector(".winner");
    //listen for clicks
    document.querySelector(".new-game").addEventListener("click", newGame, false);

    document.querySelector(".reset").addEventListener("click", function () {
        gameboard.resetBoard();
        player1Turn = true;
    })

})();

