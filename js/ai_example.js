function Ai() {
    this.restart = function() {
        // This method is called when the game is reset.
    }

    this.step = function(grid) {
        // This method is called on every update.
        // Return one of these integers to move tiles on the grid:
        // 0: up, 1: right, 2: down, 3: left

        // Grid parameter contains the current state of the game on grid.cells.
        // If top left corner has 2, grid.cells[0][0].value == 2. Top right corner is grid[3][0].

        // Grid has 2 useful helper methods:
        // .copy()    - creates a copy of the grid and returns it.
        // .move(dir) - can be used to determine what is the next state of the grid going to be if moved to that direction.
        //              This changes the state of the grid object, so you should probably copy() the grid before using this.
        //              Naturally the modified state doesn't contain information about new tiles.
        //              Method returns true if you can move to that direction, false otherwise.

        // sample AI:
        if (typeof this.foo === 'undefined') this.foo = 0;
        return this.foo++ % 4;
    }
}
