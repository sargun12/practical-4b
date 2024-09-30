function initGrid() {
    // Collect colors in an array
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }

    // Get the color container and the selected div
    var colorsDiv = document.getElementById('colors');
    var selectedDiv = document.getElementById('selected');

    // Create color tiles and append them to the colors div
    colors.forEach(function(color) {
        var colorTile = document.createElement('div');
        colorTile.className = 'color-tile';
        colorTile.style.backgroundColor = color;
        colorTile.dataset.color = color;
        colorsDiv.appendChild(colorTile);

        // Add click event listener to each color tile
        colorTile.addEventListener('click', function() {
            selectedDiv.textContent = colorTile.dataset.color;
            selectedDiv.style.backgroundColor = colorTile.dataset.color;
        });
    });
}

window.onload = function () {
    initGrid();
}
