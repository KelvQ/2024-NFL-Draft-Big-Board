var playerData = [
    {
        name: "Caleb Williams",
        image: "images/qb/caleb_williams.jpg",
        school: "USC",
        position: "RB"
    },
    {
        name: "Drake Maye",
        image: "images/qb/drake_maye.jpg",
        school: "North Carolina",
        position: "QB"
    },
    {
        name: "Jayden Daniels",
        image: "images/qb/jayden_daniels.jpg",
        school: "LSU",
        position: "RB"
    },
    {
        name: "J.J. McCarthy",
        image: "images/qb/jj_mccarthy.jpg",
        school: "Michigan",
        position: "QB"
    },
    {
        name: "Micheal Penix",
        image: "images/qb/michael_penix.jpg",
        school: "Washington",
        position: "TE"
    },
    {
        name: "Spencer Rattler",
        image: "images/qb/spencer_rattler.jpg",
        school: "South Carolina",
        position: "TE"
    },
    {
        name: "Bo Nix",
        image: "images/qb/bo_nix.jpg",
        school: "Oregon",
        position: "QB"
    },


];

// Calculate overallRank and positionRank
playerData.forEach(function (player, index) {
    player.rankings = {
        overallRank: index + 1,
        positionRank: playerData.filter(p => p.position === player.position).indexOf(player) + 1
    };
});