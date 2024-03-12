var playerData = {
    "first_last": {
        name: "name",
        image: "images/position/first_last.jpg",
        school: "school",
        position: "position"
    },
    "caleb_williams": {
        name: "Caleb Williams",
        image: "images/qb/caleb_williams.jpg",
        school: "USC",
        position: "QB"
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
        position: "QB"
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
        position: "QB"
    },
    "spencer_rattler": {
        name: "Spencer Rattler",
        image: "images/qb/spencer_rattler.jpg",
        school: "South Carolina",
        position: "QB"
    },
    "bo_nix": {
        name: "Bo Nix",
        image: "images/qb/bo_nix.jpg",
        school: "Oregon",
        position: "QB"
    },
    "malik_nabers": {
        name: "Malik Nabers",
        image: "images/wr/malik_nabers.jpg",
        school: "LSU",
        position: "WR"
    },
    "marvin_harrison_jr": {
        name: "Marvin Harrison Jr.",
        image: "images/wr/marvin_harrison_jr.jpg",
        school: "Ohio State",
        position: "WR"
    },
    "rome_odunze": {
        name: "Rome Odunze",
        image: "images/wr/rome_odunze.jpg",
        school: "Washington",
        position: "WR"
    },
    "brock_bowers": {
        name: "Brock Bowers",
        image: "images/te/brock_bowers.jpg",
        school: "Georgia",
        position: "TE"
    },
    "javon_bullard": {
        name: "Javon Bullard",
        image: "images/s/javon_bullard.jpg",
        school: "Georgia",
        position: "S"
    },
    "kamren_kinchens": {
        name: "Kamren Kinchens",
        image: "images/s/kamren_kinchens.jpg",
        school: "Miami",
        position: "S"
    },
    "tyler_nubin": {
        name: "Tyler Nubin",
        image: "images/s/tyler_nubin.jpg",
        school: "Minnesota",
        position: "S"
    },
    "nate_wiggins": {
        name: "Nate Wiggins",
        image: "images/cb/nate_wiggins.jpg",
        school: "Clemson",
        position: "CB"
    },
    "quinyon_mitchell": {
        name: "Quinyon Mitchell",
        image: "images/cb/quinyon_mitchell.jpg",
        school: "Toledo",
        position: "CB"
    },
    "terrion_arnold": {
        name: "Terrion Arnold",
        image: "images/cb/terrion_arnold.jpg",
        school: "Alabama",
        position: "CB"
    },
    "cooper_dejean": {
        name: "Cooper DeJean",
        image: "images/cb/cooper_dejean.jpg",
        school: "Iowa",
        position: "CB"
    },
    "chop_robinson": {
        name: "Chop Robinson",
        image: "images/edge/chop_robinson.jpg",
        school: "Penn State",
        position: "EDGE"
    },
    "dallas_turner": {
        name: "Dallas Turner",
        image: "images/edge/dallas_turner.jpg",
        school: "Alabama",
        position: "EDGE"
    },
    "jared_verse": {
        name: "Jared Verse",
        image: "images/edge/jared_verse.jpg",
        school: "Florida State",
        position: "EDGE"
    },
    "byron_murphy": {
        name: "Byron Murphy II",
        image: "images/idl/byron_murphy.jpg",
        school: "Texas",
        position: "IDL"
    },
    "graham_barton": {
        name: "Graham Barton",
        image: "images/iol/graham_barton.jpg",
        school: "Duke",
        position: "IOL"
    },
    "jackson_powers-johnson": {
        name: "Jackson Powers-Johnson",
        image: "images/iol/jackson_powers-johnson.jpg",
        school: "Oregon",
        position: "IOL"
    },
    "zach_frazier": {
        name: "Zach Frazier",
        image: "images/iol/zach_frazier.jpg",
        school: "West Virginia",
        position: "IOL"
    },
    "edgerrin_cooper": {
        name: "Edgerrin Cooper",
        image: "images/lb/edgerrin_cooper.jpg",
        school: "Texas A&M",
        position: "LB"
    },
    "payton_wilson": {
        name: "Payton Wilson",
        image: "images/lb/payton_wilson.jpg",
        school: "North Carolina State",
        position: "LB"
    },
    "joe_alt": {
        name: "Joe Alt",
        image: "images/ot/joe_alt.jpg",
        school: "Notre Dame",
        position: "OT"
    },
    "olu_fashanu": {
        name: "Olu Fashanu",
        image: "images/ot/olu_fashanu.jpg",
        school: "Penn State",
        position: "OT"
    },
    "taliese_fuaga": {
        name: "Taliese Fuaga",
        image: "images/ot/taliese_fuaga.jpg",
        school: "Oregon State",
        position: "OT"
    },
    "troy_fautanu": {
        name: "Troy Fautanu",
        image: "images/ot/troy_fautanu.jpg",
        school: "Washington",
        position: "OT"
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

