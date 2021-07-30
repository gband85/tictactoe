//gameboard module
let gameboard = (function() {
    'use strict'
    //create board
      let _boardArray=Array(9).fill("");    

    return {
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