var CELL_SIZE = 40;
var START = { x: 0, y: 0 }; // Starting position
var END = { x: 5, y: 4 }; // End position

function Labyrinth() {
    this.map = [
        [0, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0]
    ];
    this.playerPos = { ...START };
}

Labyrinth.prototype.printConsole = function() {
    this.map.forEach(row => {
        console.log(row.map(cell => (cell === 1 ? '*' : ' ')).join(''));
    });
};

Labyrinth.prototype.printDisplay = function(id) {
    var container = document.getElementById(id);
    container.style.position = 'relative';
    container.style.width = this.map[0].length * CELL_SIZE + 'px';
    container.style.height = this.map.length * CELL_SIZE + 'px';
    container.style.border = '2px solid black';

    // Clear previous contents
    container.innerHTML = '';

    this.map.forEach((row, y) => {
        row.forEach((cell, x) => {
            var cellDiv = document.createElement('div');
            cellDiv.style.position = 'absolute';
            cellDiv.style.width = CELL_SIZE + 'px';
            cellDiv.style.height = CELL_SIZE + 'px';
            cellDiv.style.left = x * CELL_SIZE + 'px';
            cellDiv.style.top = y * CELL_SIZE + 'px';
            cellDiv.style.backgroundColor = cell === 1 ? 'grey' : 'white';

            // Highlight the end position
            if (x === END.x && y === END.y) {
                cellDiv.style.backgroundColor = 'yellow';
            }

            container.appendChild(cellDiv);
        });
    });

    // Draw player
    var playerDiv = document.createElement('div');
    playerDiv.style.position = 'absolute';
    playerDiv.style.width = CELL_SIZE + 'px';
    playerDiv.style.height = CELL_SIZE + 'px';
    playerDiv.style.left = this.playerPos.x * CELL_SIZE + 'px';
    playerDiv.style.top = this.playerPos.y * CELL_SIZE + 'px';
    playerDiv.style.backgroundColor = 'blue';
    container.appendChild(playerDiv);
};

Labyrinth.prototype.movePlayer = function(dx, dy) {
    var newX = this.playerPos.x + dx;
    var newY = this.playerPos.y + dy;

    // Check bounds and walls
    if (newX >= 0 && newX < this.map[0].length && newY >= 0 && newY < this.map.length && this.map[newY][newX] === 0) {
        this.playerPos = { x: newX, y: newY };
    }

    // Check for win condition
    if (this.playerPos.x === END.x && this.playerPos.y === END.y) {
        alert('Congratulations!');
    }
};
