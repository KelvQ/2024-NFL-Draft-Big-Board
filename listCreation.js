// Function to create and append list items to the player list
function createPlayerItems(data) {
    var playerList = document.querySelector('.player-list');
    playerList.innerHTML = ""; // Clear previous list items

    data.forEach(function (player, i) {
        var originalIndex = playerData.findIndex(function (item) {
            return item === player;
        });

        var listItem = document.createElement('li');
        listItem.classList.add('player-item');

        var html = `
            <div class="player-rank">${originalIndex + 1}</div>
            <div class="player-image" style="background-image: url('${player.image}')"></div>
            <div class="player-details">
                <div class="player-name">${player.name}</div>
                <div class="player-school">${player.school}</div>
                <div class="player-position">${player.position}</div>
            </div>
            <div class="player-stats">
                <div class="player-overall-rank">Overall Rank: ${player.ranks.overallRank}</div>
                <div class="player-position-rank">Position Rank: ${player.ranks.positionRank}</div>
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
createPlayerItems(playerData);

// Function to filter player list based on position
function filterByPosition(position) {
    var filteredData;

    if (position === 'all') {
        filteredData = playerData;
    } else {
        filteredData = playerData.filter(function (player) {
            return player.position === position;
        });
    }

    // Update the position title
    var positionTitle = document.getElementById('position-title');
    positionTitle.textContent = position === 'all' ? '2024 Overall NFL Draft Big Board' : '2024 ' + position + ' NFL Draft Big Board';

    createPlayerItems(filteredData);

    // Clear search input
    document.getElementById('searchInput').value = '';
}


// Add event listeners to position-selection items to filter by position
document.querySelectorAll('.position-selection li a').forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        var position = this.getAttribute('data-position');
        filterByPosition(position);

        // Highlight selected item
        document.querySelectorAll('.position-selection li a').forEach(function (item) {
            item.classList.remove('selected'); // Remove selected class from all items
        });
        this.classList.add('selected'); // Add selected class to clicked item
    });
});

function filterPlayersBySearch(query) {
    var filteredData = playerData.filter(function (player) {
        return player.name.toLowerCase().includes(query.toLowerCase());
    });
    createPlayerItems(filteredData);
}

document.getElementById('searchInput').addEventListener('input', function () {
    var query = this.value;
    filterPlayersBySearch(query);
});
