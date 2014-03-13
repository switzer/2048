function Ai() {
    var foo = 0;
    
    this.restart = function() { }

    this.step = function(grid) {
        // Return one of these:
        // 0: up, 1: right, 2:down, 3: left

        // Grid parameter contains the current state of the game on grid.cells.
        // If top left corner has 2, grid.cells[0][0].value == 2. Top right corner is grid[3][0].
        
        // Grid has .move(dir) method, which can be used to determine what is the next state of the board going to be if moved to that direction.
        // This of course doesn't have the information about new tiles. Method returns true if you can move to that direction, false otherwise.

        return foo++ % 4;
    }
}
