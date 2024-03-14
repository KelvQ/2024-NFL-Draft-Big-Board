var playerData = {
    "alex_sarr": {
        name: "Alex Sarr",
        image: "images/wr/marvin_harrison_jr.jpg",
        school: "NBL",
        position: "C"
    },
    "cody_williams": {
        name: "Cody Williams",
        image: "images/qb/caleb_williams.jpg",
        school: "Colorado",
        position: "SF"
    },
};

// Iterate over keys of playerData and calculate overallRank and positionRank
playerRankings.forEach(function (key, index) {
    var player = playerData[key];
    player.rankings = {
        overallRank: index + 1,
        positionRank: playerRankings.filter(function (playerKey) {
            return playerData[playerKey].position === player.position;
        }).indexOf(key) + 1
    };
});

