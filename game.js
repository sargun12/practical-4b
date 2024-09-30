window.onload = function() {
    var labyrinth = new Labyrinth();

    // Print labyrinth to the console
    labyrinth.printConsole();

    // Draw labyrinth on the screen
    labyrinth.printDisplay('map');

    // Handle player movement
    window.addEventListener('keydown', function(event) {
        switch(event.key) {
            case 'ArrowUp':
                labyrinth.movePlayer(0, -1);
                break;
            case 'ArrowDown':
                labyrinth.movePlayer(0, 1);
                break;
            case 'ArrowLeft':
                labyrinth.movePlayer(-1, 0);
                break;
            case 'ArrowRight':
                labyrinth.movePlayer(1, 0);
                break;
        }
        labyrinth.printDisplay('map'); // Redraw labyrinth and player position
    });
};
