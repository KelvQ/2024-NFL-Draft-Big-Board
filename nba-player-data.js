var playerData = {
    "alex_sarr": {
        name: "Alex Sarr",
        image: "images/NBA/c/alex_sarr.jpg",
        school: "Perth Wildcats (NBL)",
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
        school: "JL Bourg (France)",
        position: "PF"
    },
    "donovan_clingan": {
        name: "Donovan Clingan",
        image: "images/NBA/c/donovan_clingan.jpg",
        school: "UConn",
        position: "C"
    },
    "kyle_filipowski": {
        name: "Kyle Filipowski",
        image: "images/NBA/c/kyle_filipowski.jpg",
        school: "Duke",
        position: "C"
    },
    "matas_buzelis": {
        name: "Matas Buzelis",
        image: "images/NBA/pf/matas_buzelis.jpg",
        school: "G-League Ignite",
        position: "PF"
    },
    "tidjane_salaun": {
        name: "Tidjane Salaun",
        image: "images/NBA/pf/tidjane_salaun.jpg",
        school: "Cholet Basket (France)",
        position: "PF"
    },
    "jared_mccain": {
        name: "Jared McCain",
        image: "images/NBA/pg/jared_mccain.jpg",
        school: "Duke",
        position: "PG"
    },
    "nikola_topic": {
        name: "Nikola Topic",
        image: "images/NBA/pg/nikola_topic.jpg",
        school: "Red Star (Serbia)",
        position: "PG"
    },
    "rob_dillingham": {
        name: "Rob Dillingham",
        image: "images/NBA/pg/rob_dillingham.jpg",
        school: "Kentucky",
        position: "PG"
    },
    "dalton_knecht": {
        name: "Dalton Knecht",
        image: "images/NBA/sf/dalton_knecht.jpg",
        school: "Tennessee",
        position: "SF"
    },
    "ron_holland": {
        name: "Ron Holland",
        image: "images/NBA/sf/ron_holland.jpg",
        school: "G-League Ignite",
        position: "SF"
    },
    "stephon_castle": {
        name: "Stephon Castle",
        image: "images/NBA/sg/stephon_castle.jpg",
        school: "UConn",
        position: "SG"
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

