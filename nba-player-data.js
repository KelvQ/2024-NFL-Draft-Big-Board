var playerData = {
    "alex_sarr": {
        name: "Alex Sarr",
        image: "images/NBA/c/alex_sarr.jpg",
        school: "NBL-Perth Wildcats",
        position: "C"
    },
    "cody_williams": {
        name: "Cody Williams",
        image: "images/NBA/sf/cody_williams.jpg",
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

