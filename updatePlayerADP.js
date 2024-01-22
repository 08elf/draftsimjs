//1. Open your webpage either on your site on locally
//doesn't matter as long as it can connect to the firebase database

//2. Copy and run this in the console of the webpage
//3. In the cosole copy the object that is created
//4. Paste this into the players.js file and it should now have updated ADP
//5. Deploy your site udpates per normal and it will pickup the new ADPs

async function updateADP() {
    const adpDataSnapshot = await firebase.database().ref('X-ADP').limitToLast(10).once('value');
    const adpData = adpDataSnapshot.val();
    const allPlayers = Object.values(adpData).flat();
    
    const groupedPlayers = allPlayers.reduce((acc, player) => {
        if (!acc[player.player_id]) {
            acc[player.player_id] = { totalPick: 0, count: 0 };
        }
        
        acc[player.player_id].totalPick += player.pick;
        acc[player.player_id].count += 1;
        
        return acc;
    }, {});
    
    const averagedPlayers = Object.keys(groupedPlayers).map(player_id => {
        const { totalPick, count } = groupedPlayers[player_id];
        const averagePick = totalPick / count;
        
        return { 
            player_id, rankADP: parseFloat(averagePick.toFixed(2)) 
        };
    });

    const resetPlayers = players.map(({ rankADP, ...rest }) => {
        return rest;
    });

    const playersWithADP = resetPlayers.map(player => {
        const correspondingPlayer = averagedPlayers.find(averagedPlayer => averagedPlayer.player_id === player.player_id);

        if (correspondingPlayer) {
            return { ...player, rankADP: correspondingPlayer.rankADP };
        } else {
            return { ...player, rankADP: 999 };
        }
    });
    
    console.log(playersWithADP);
}

updateADP();