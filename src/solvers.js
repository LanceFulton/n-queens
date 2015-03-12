/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({n:n});
  var solution = board.rows();
  var rookCount = n;
  var colIndex = 0;

  console.log("board: ", board);
  console.log("solution: " + solution);


  var recurse = function(colIndex){
      if (rookCount === 0){
        return;
      }
      debugger;
    // iterate through column
    for (var row = 0 ; row < n ; row++){
      var boardRow = board.get(row);
      // place rook in cell
      boardRow[colIndex] = 1;
      console.log("boardRow[colIndex]: " + boardRow[colIndex]);
      // check for conflicts
      // if( board.hasRowConflictAt(boardRow) )
      if( board.hasRowConflictAt(row) ){
        console.log( board.hasRowConflictAt(row) );
        console.log('conflict');
        // if conflicts, erase rook
        boardRow[colIndex] = 0;
      } else {
        console.log("rookCount: " + rookCount);
        rookCount--;
      }
      colIndex++;
      recurse(colIndex);
    }
  };

  recurse(colIndex);

  // create conflict count
  // insert rook at 0,0
  // decrement rook count
  // recurse into second column
    // if conflict
      //increment conflict count
      //move down one row
    // if no conflict, insert rook


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
