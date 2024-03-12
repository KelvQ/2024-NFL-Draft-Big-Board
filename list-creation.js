var mode = "";

// Function to create and append list items to the player list
function createPlayerItems(keys) {
    var playerList = document.querySelector('.player-list');
    playerList.innerHTML = ""; // Clear previous list items

    keys.forEach(function (key) {
        var player = playerData[key]; // Fetch player data using the key
        var listItem = document.createElement('li');
        listItem.classList.add('player-item');

        var html = `
            <div class="player-rank">${player.rankings.overallRank}</div>
            <div class="player-image" style="background-image: url('${player.image}')"></div>
            <div class="player-details">
                <div class="player-name">${player.name}</div>
                <div class="player-school">${player.school}</div>
                <div class="player-position">${player.position}</div>
            </div>
            <div class="player-stats">
                <div class="player-overall-rank">Overall Rank: ${player.rankings.overallRank}</div>
                <div class="player-position-rank">Position Rank: ${player.rankings.positionRank}</div>
            </div>
        `;
        listItem.innerHTML = html;
        playerList.appendChild(listItem);

        // Add event listener to each list item
        listItem.addEventListener('click', function () {
            listItem.classList.toggle('expanded');
        });
    });
}

// Call the function initially to create and append list items
createPlayerItems(playerRankings);

// Function to filter player list based on position
function filterByPosition(position) {
    var filteredKeys;

    if (position === 'all') {
        filteredKeys = playerRankings;
    } else {
        filteredKeys = playerRankings.filter(function (key) {
            return playerData[key].position === position;
        });
    }

    // Clear search input
    document.getElementById('searchInput').value = '';

    // Update the position title
    var positionTitle = document.getElementById('position-title');
    positionTitle.textContent = position === 'all' ? '2024 Overall NFL Draft Big Board' : '2024 ' + position + ' NFL Draft Big Board';

    createPlayerItems(filteredKeys);

    // Update dropdown selection
    updateDropdownSelection(position);
}

// Function to update the selected option in the dropdown
function updateDropdownSelection(position) {
    var dropdown = document.querySelector('.position-selection-dropdown');
    dropdown.value = position; // Update dropdown value
}

// Add event listeners to position-selection items to highlight selection for larger screens
document.querySelectorAll('.position-selection li a').forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        var position = this.getAttribute('data-position');
        mode = "list";
        filterByPosition(position);

        // Highlight selected item
        document.querySelectorAll('.position-selection li a').forEach(function (item) {
            item.classList.remove('selected'); // Remove selected class from all items
        });
        this.classList.add('selected'); // Add selected class to clicked item

        // Update dropdown selection
        updateDropdownSelection(position);
    });
});

// Event listener for dropdown change
document.querySelector('.position-selection-dropdown').addEventListener('change', function () {
    var selectedOption = this.options[this.selectedIndex];
    var position = selectedOption.getAttribute('data-position');
    filterByPosition(position);
    mode = "menu";

    // Highlight selected item
    document.querySelectorAll('.position-selection li a').forEach(function (item) {
        item.classList.remove('selected'); // Remove selected class from all items
    });
    var listItem = document.querySelector('.position-selection li a[data-position="' + position + '"]');
    if (listItem) {
        listItem.classList.add('selected'); // Add selected class to corresponding list item
    }
});

// Function to filter players by search query and position
function filterPlayersBySearchAndPosition(query, position) {
    var filteredKeys;

    if (position === 'all') {
        // Filter by name only if position is set to 'all'
        filteredKeys = playerRankings.filter(function (key) {
            return playerData[key].name.toLowerCase().includes(query.toLowerCase());
        });
    } else {
        // Filter by both name and position
        filteredKeys = playerRankings.filter(function (key) {
            var player = playerData[key];
            return player.name.toLowerCase().includes(query.toLowerCase()) && player.position === position;
        });
    }

    createPlayerItems(filteredKeys);
}

// Function to filter players by search query
function filterPlayersBySearch(query) {
    var position = document.querySelector('.position-selection li a.selected').getAttribute('data-position');
    filterPlayersBySearchAndPosition(query, position);
}

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', function () {
    if (mode === "menu") {
        var query = this.value;
        var position = document.querySelector('.position-selection-dropdown').value; // Get the selected position
        filterPlayersBySearchAndPosition(query, position); // Pass both query and position to the filtering function
    } else {
        var query = this.value;
        filterPlayersBySearch(query);
    }
});
