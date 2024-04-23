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
    "reed_sheppard": {
        name: "Reed Sheppard",
        image: "images/NBA/sg/reed_sheppard.jpg",
        school: "Kentucky",
        position: "SG"
    },
    "zaccharie_risacher": {
        name: "Zaccharie Risacher",
        image: "images/NBA/pf/zaccharie_risacher.jpg",
        school: "JL Bourg",
        position: "PF"
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

