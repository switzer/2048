function Ai() {
    this.init = function() {
        // This method is called when AI is first initialized.
    }

    this.restart = function() {
        // This method is called when the game is reset.
    }

    this.step = function(grid) {
        // This method is called on every update.
        // Return one of these integers to move tiles on the grid:
        // 0: up, 1: right, 2: down, 3: left

        // Parameter grid contains current state of the game as Tile objects stored in grid.cells.
        // Top left corner is at grid.cells[0][0], top right: grid.cells[3][0], bottom left: grid.cells[0][3], bottom right: grid.cells[3][3].
        // Tile objects have .value property which contains the value of the tile. If top left corner has tile with 2, grid.cells[0][0].value == 2.
        // Array will contain null if there is no tile in the slot (e.g. grid.cells[0][3] == null if bottom left corner doesn't have a tile).

        // Grid has 2 useful helper methods:
        // .copy()    - creates a copy of the grid and returns it.
        // .move(dir) - can be used to determine what is the next state of the grid going to be if moved to that direction.
        //              This changes the state of the grid object, so you should probably copy() the grid before using this.
        //              Naturally the modified state doesn't contain information about new tiles.
        //              Method returns true if you can move to that direction, false otherwise.

        // sample AI:
        var best = 0;
        var m = 0;
        for (var move = 0; move < 4; move++) {
          var g = grid.copy();
          if (g.move(move)) {
            var s = this.score(g);
            if (s >= best) {
              s = best;
              m = move;
            }
          }
        }
        return m;
    }
    // 3 points for each blank space
    // 1 points for same tiles next to each other (really 2 because both tiles are going to count)
    // 1 point for tiles 1 down from each other
    this.score = function(grid) {
      var score = 0;
      for (var col = 0; col < 4; col++) {
        for (row = 0; row < 4; row++) {
          if (grid.cells[col][row] == null) {
            score += 4;
          } else {
            // ABOVE
            if (row != 0 && grid.cells[col][row-1]) {
              if (grid.cells[col][row-1].value == grid.cells[col][row].value) score+=2;
              //if (grid.cells[col][row-1].value == grid.cells[col][row].value/2) score++;
            }
            // BELOW
            if (row != 3 && grid.cells[col][row+1]) {
              if (grid.cells[col][row+1].value == grid.cells[col][row].value) score+=2;
              //if (grid.cells[col][row+1].value == grid.cells[col][row].value/2) score++;
            }
            // LEFT
            if (col != 0 && grid.cells[col-1][row]) {
              if (grid.cells[col-1][row].value == grid.cells[col][row].value) score+=2;
              //if (grid.cells[col-1][row].value == grid.cells[col][row].value/2) score++;
            }
            // RIGHT
            if (col != 3 && grid.cells[col+1][row]) {
              if (grid.cells[col+1][row].value == grid.cells[col][row].value) score+=2;
              //if (grid.cells[col+1][row].value == grid.cells[col][row].value/2) score++;
            }
          }
        }
      }
      return score;
    }
}
