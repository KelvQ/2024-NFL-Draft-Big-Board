var playerData = {
    "caleb_williams": {
        name: "Caleb Williams",
        image: "images/qb/caleb_williams.jpg",
        school: "USC",
        position: "RB"
    },
    "drake_maye": {
        name: "Drake Maye",
        image: "images/qb/drake_maye.jpg",
        school: "North Carolina",
        position: "QB"
    },
    "jayden_daniels": {
        name: "Jayden Daniels",
        image: "images/qb/jayden_daniels.jpg",
        school: "LSU",
        position: "RB"
    },
    "jj_mccarthy": {
        name: "J.J. McCarthy",
        image: "images/qb/jj_mccarthy.jpg",
        school: "Michigan",
        position: "QB"
    },
    "michael_penix": {
        name: "Micheal Penix",
        image: "images/qb/michael_penix.jpg",
        school: "Washington",
        position: "TE"
    },
    "spencer_rattler": {
        name: "Spencer Rattler",
        image: "images/qb/spencer_rattler.jpg",
        school: "South Carolina",
        position: "TE"
    },
    "bo_nix": {
        name: "Bo Nix",
        image: "images/qb/bo_nix.jpg",
        school: "Oregon",
        position: "QB"
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

