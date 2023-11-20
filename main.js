const firebaseConfig = {
    apiKey: "AIzaSyBFwrNNgLWCZSkUGgKaDXeOY5Vem13uQfg",
    databaseURL: "https://aflfantasypod-default-rtdb.firebaseio.com",
    projectId: "aflfantasypod",
    appId: "1:141895384483:web:565271ffa59bb56b45ae16"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Global variables to store user inputs
let numPlayersPerTeam;
let chosenConfig;
let numTeams;
let userDraftPosition;
let draftType;
let userTeam;
let pickLog = '';
let currentPickNumber = 0;
let ADP = new Array;
let computerTeams = new Array;
let availablePlayers = new Array;
let allTeams = new Array;

// Function to start the draft simulation
class Player {
    constructor(id, name, positions, rank, fantasy_average, team) {
        this.player_id = id;
        this.name = name;
        this.positions = positions;
        this.rank = rank;
        this.fantasy_average = fantasy_average;
        this.team = team; // The team the player belongs to
        this.currentPosition = positions[0]; // Default to the first position
    }
}
    
class Team {
    constructor(teamSize, config) {
        this.teamSize = teamSize;
        this.config = config;
        this.maxPlayers = {
            'Ruck': this.config['ruck'],
            'Midfielder': this.config['midfielders'],
            'Defender': this.config['defenders'],
            'Forward': this.config['forwards'],
            'Bench': Infinity // Represents float('inf') in Python
        };

        // Initialize the players dictionary with empty arrays for each position
        this.players = {
            'Ruck': [],
            'Midfielder': [],
            'Defender': [],
            'Forward': [],
            'Bench': []
        };
    }
    
    addPlayer(player, position) {
        // Check if team is full
        const totalPlayers = Object.values(this.players).flat().length;
        if (totalPlayers >= this.teamSize) {
            console.log("DEBUG: Team is considered full by size.");
            return false;
        }

        // Check if the player is already in the team
        for (const positionPlayers of Object.values(this.players)) {
            if (positionPlayers.includes(player)) {
                console.log(`DEBUG: ${player.name} is already in the team.`);
                return false;
            }
        }

        // Determine available positions for the player
        const availablePositions = player.positions.filter(position => this.players[position].length < this.maxPlayers[position]);
        const availablePositionsSrting = availablePositions.toString();
        const chosenPosition = position;

        if (availablePositions.length === 1 && availablePositionsSrting !== chosenPosition) {
            showAlertModal(`${chosenPosition} position is full, adding ${player.name} to ${availablePositionsSrting}`);
            this.players[availablePositionsSrting].push(player);
            displayAllFinalTeams();
            console.log(`DEBUG: ${player.name} added to ${availablePositionsSrting}.`);
            return true;
        } else if (availablePositions.length > 0) {
            this.players[chosenPosition].push(player);
            displayAllFinalTeams();
            console.log(`DEBUG: ${player.name} added to ${chosenPosition}.`);
            return true;
        } else {
            showAlertModal(`${chosenPosition} position is full, adding ${player.name} to Bench`);
            this.players['Bench'].push(player);
            displayAllFinalTeams();
            console.log(`DEBUG: ${player.name} added to Bench.`);
            return true;
        }
    }

    // Add a player to the bench if there is space and they are not already on the team
    addPlayerToBench(player) {
        const isPlayerInTeam = Object.values(this.players).some(playerList => playerList.includes(player));
        if (isPlayerInTeam) {
            return false; // Player is already in the team, don't add to the bench
        }
        if (this.players['Bench'].length < this.maxPlayers['Bench']) {
            this.players['Bench'].push(player);
            return true;
        }
        return false;
    }

    totalPlayers() {
        return Object.values(this.players).reduce((total, playerList) => total + playerList.length, 0);
    }
    
    // Calculate the maximum number of players allowed in the team
    totalMaxPlayers() {
        return Object.values(this.maxPlayers).reduce((total, max) => total + max, 0);
    }
    
    // Calculate the total number of players needed for the team
    totalPlayersNeeded() {
        return Object.entries(this.maxPlayers).reduce((needed, [position, max]) => {
            return needed + (max - this.players[position].length);
        }, 0);
    }
    
    // Check if the team is full
    isFull() {
        const totalPlayers = this.totalPlayers();
        return totalPlayers >= this.teamSize;
    }
}

async function startDraftSimulation() {
    const players = await setupDraft();
    createSelectPlayerTable(players);
    displayAllFinalTeams();
    proceedToNextDraftRound(0); // Start with round 0
    document.getElementById('showPickLogButton').style.display = 'block';
}

// Set the number of players per team
function setNumPlayersPerTeam() {
    numPlayersPerTeam = document.getElementById('numPlayersPerTeam').value;
    console.log(document.getElementById('numPlayersPerTeam').value)
    console.log(`Number of players per team is set to: ${numPlayersPerTeam}`);
    document.getElementById('numTeamsSection').style.display = 'block';
    checkAllInputsSet();
}

// Set the chosen configuration
function selectConfiguration(configNumber, minPlayers) {
    console.log("selectConfiguration called with configNumber:", configNumber);

    const positionConfigurations = {
        1: { defenders: 2, midfielders: 3, ruck: 1, forwards: 2 },
        2: { defenders: 5, midfielders: 7, ruck: 1, forwards: 5 },
        3: { defenders: 6, midfielders: 8, ruck: 2, forwards: 6 }
    };

    chosenConfig = positionConfigurations[configNumber];
    console.log("Chosen configuration:", chosenConfig);

    document.getElementById('numPlayersPerTeam').min = minPlayers;
    document.getElementById('numPlayersPerTeam').value = minPlayers;
    document.getElementById('numPlayersPerTeamSection').style.display = 'block';
    console.log("numPlayersPerTeamSection display set to block");

    checkAllInputsSet();
}

// Set the number of teams
function setNumTeams() {
    numTeams = document.getElementById('numTeams').value;
    document.getElementById('userDraftPositionSection').style.display = 'block';
    checkAllInputsSet();
}

// Set the user's draft position
function setUserDraftPosition() {
    userDraftPosition = document.getElementById('userDraftPosition').value;
    document.getElementById('draftTypeSection').style.display = 'block';

    // Initialize the user team with the chosen configuration
    userTeam = new Team(numPlayersPerTeam, chosenConfig);

    // Initialize computer teams. We'll assume 'numTeams' includes the user team.
    for (let i = 0; i < numTeams - 1; i++) {
        computerTeams.push(new Team(numPlayersPerTeam, chosenConfig));
    }

    // Create an array of all teams and insert the user team at the specified draft position
    for (let i = 0; i < numTeams; i++) {
        if (i === userDraftPosition - 1) {
            allTeams.push(userTeam);
        } else {
            allTeams.push(computerTeams.shift());
        }
    }

    checkAllInputsSet();
}

// Function to set the draft type
function setDraftType() {
    if (document.getElementById('snake').checked) {
        draftType = 'snake';
    } else if (document.getElementById('linear').checked) {
        draftType = 'linear';
    } else {
        return showAlertModal('Please select a draft type.')
    }

    checkAllInputsSet();
}

// Check if all inputs are set
function checkAllInputsSet() {
    if (numPlayersPerTeam && chosenConfig && numTeams && userDraftPosition && draftType) {
        console.log(`All inputs set. Enabling start draft button. 
            Chosen configuration: ${JSON.stringify(chosenConfig)},
            Players per team: ${numPlayersPerTeam},
            Number of teams: ${numTeams},
            User draft position: ${userDraftPosition},
            Draft type: ${draftType}`);
        document.getElementById('startDraftButton').disabled = false;
        document.getElementById('draftSetup').style.display = 'none';
    } else {
        console.log('Not all inputs are set. Start draft button remains disabled.');
        document.getElementById('startDraftButton').disabled = true;
    }
}

async function setupDraft() {
    const res = await getADP(true);

    function calculatePercentileRank(value, array) {
        const sortedArray = array.slice().sort((a, b) => a - b);
        const index = sortedArray.indexOf(value);
        return index / (sortedArray.length - 1);
    }
    
    const playersByADP = players.map(player => {
        const correspondingRes = res.find(resPlayer => resPlayer.player_id === player.player_id);
        if (correspondingRes) {
            const percentileRank = calculatePercentileRank(correspondingRes.adp, res.map(p => p.adp));
            player.rank = Math.ceil(percentileRank * 100);
        }
        return player;
    });

    const playerObjects = await Promise.all(playersByADP.map(async (playerData) => {
        return new Player(
            playerData.player_id,
            playerData.name,
            playerData.positions,
            playerData.rank,
            playerData.fantasy_average,
            playerData.team
        );
    }));

    availablePlayers = playerObjects;
    return playerObjects;
}

async function createSelectPlayerTable(availablePlayers, flag) {
    document.getElementById('playerListContainer').style.display = 'block';
    const selectPlayerTable = $('#selectPlayerTable').DataTable({
        retrieve: true,
        sort: false,
        searching: true,
        paging: false,
        lengthChange: false,
        info: false,
        columnDefs: [
            { targets: [0], title: "Players" },
            { targets: [1], title: "Position(s)" },
            { targets: [2], title: "PlayerId", visible: false },
        ],
    });

    selectPlayerTable.clear();

    availablePlayers.forEach(player => {
        selectPlayerTable.row.add([player.name, player.positions.join(', '), player.player_id]);
    });

    selectPlayerTable.draw();

    if (flag) {
        return null;
    } else {
        return new Promise((resolve) => {
            $('#selectPlayerTable tbody').on('click', 'tr', function () {
                const rowData = selectPlayerTable.row(this).data();
                const playerId = rowData[2];
                const selectedPlayer = availablePlayers.find(player => player.player_id === playerId);
                resolve(selectedPlayer);
            });
        });
    }
}

async function proceedToNextDraftRound(roundNumber) {
    // Check if the draft is over
    if (roundNumber >= numPlayersPerTeam) {
        createSelectPlayerTable(availablePlayers, true);
        displayAllFinalTeams();
        writeADP();

        document.getElementById('restartDraftButton').style.display = 'block';
        return document.getElementById('currentPickSelection').textContent = `Draft is complete`;
    }

    let user = false;
    let picksCompleted = 0;
    
    for (let i = 0; i < allTeams.length; i++) {
        let teamIndex = (draftType === 'snake' && roundNumber % 2 === 1) ? allTeams.length - 1 - i : i;
        let draftingTeam = allTeams[teamIndex];

        if (draftingTeam === userTeam) {
            document.getElementById('currentPickSelection').textContent = `CURRENT PICK: Pick ${currentPickNumber + 1}`;
            console.log("User's turn to pick.");

            while (!user) {
                const selectedPlayer = await createSelectPlayerTable(availablePlayers);
                await userPickPlayer(selectedPlayer);
                removeFromAvailablePlayers(availablePlayers, selectedPlayer);

                pickLog += `Pick ${currentPickNumber} - ${selectedPlayer.name}\n`;
                updateDisplayArea(pickLog);
                addToADP(selectedPlayer, currentPickNumber);
                
                user = true;
                picksCompleted++;
            }
        } else {
            // Computer's turn to pick
            const selectedPlayer = draftComputerPlayer(availablePlayers, draftingTeam);
            if (selectedPlayer.player) {
                removeFromAvailablePlayers(availablePlayers, selectedPlayer.player);

                pickLog += `Pick ${currentPickNumber} - ${selectedPlayer.player.name}\n`;
                updateDisplayArea(pickLog);
                addToADP(selectedPlayer.player, currentPickNumber);
                displayAllFinalTeams();
                picksCompleted++;

                console.log(`Team ${teamIndex + 1} (computer) picked ${selectedPlayer.player.name}.`);
            }
        }
    };
    
    await waitForAllPicks();
    proceedToNextDraftRound(roundNumber + 1);
    
    function waitForAllPicks() {
        return new Promise(resolve => {
            const checkPicksCompleted = () => {
                if (picksCompleted === allTeams.length) {
                    resolve();
                } else {
                    setTimeout(checkPicksCompleted, 100);
                }
            };
            checkPicksCompleted();
        });
    }

    function addToADP(player, pick) {
        const newPlayerObject = {
            "player_id": player.player_id,
            "name": player.name,
            "positions": player.positions,
            "pick": pick,
        };
          
        ADP.push(newPlayerObject);
    }

    function removeFromAvailablePlayers(availablePlayers, player) {
        const index = availablePlayers.indexOf(player);

        if (index > -1) {
            availablePlayers.splice(index, 1);
            currentPickNumber++
        }
    }
    
    async function userPickPlayer(player) {
        return new Promise(resolve => {
            const options = player.positions;
    
            if (options.length > 1) {
                document.getElementById("positionSelectionModal").style.display = 'block';
                const selectPlayerPosition = document.getElementById("selectPlayerPosition");
                selectPlayerPosition.innerHTML = `Select Position - ${player.name}`;
    
                const positionButtons = document.getElementById("positionButtons");
                positionButtons.innerHTML = '';
    
                options.forEach(option => {
                    const button = document.createElement("button");
                    button.textContent = option;
                    button.classList.add("button-1");
                    button.addEventListener("click", function () {
                        if (options.includes(option)) {
                            document.getElementById("positionSelectionModal").style.display = 'none';
                            const addedToTeam = userTeam.addPlayer(player, option);
    
                            if (addedToTeam) {
                                console.log(`${player.name} has been drafted to your team at position ${option}.`);
                                resolve(player);
                            } else {
                                showAlertModal(`Unable to draft ${player.name}. Your team may be full.`);
                                userPickPlayer(player).then(resolve);
                            }
                        }
                    });
    
                    positionButtons.appendChild(button);
                });
            } else {
                const addedToTeam = userTeam.addPlayer(player, player.positions[0]);
    
                if (addedToTeam) {
                    console.log(`${player.name} has been drafted to your team at position ${player.positions[0]}.`);
                    resolve(player);
                } else {
                    showAlertModal(`Unable to draft ${player.name}. Your team may be full.`);
                    userPickPlayer(player).then(resolve);
                }
            }
        });
    }

    function writeADP() {
        const adpRef = firebase.database().ref('X-ADP');
        const newDraftId = adpRef.push().key;
        const adpData = {
          [newDraftId]: ADP,
        };
      
        adpRef.update(adpData)
        .then(() => {
            console.log(`ADP array written to X-ADP with draftId: ${newDraftId}`);
        })
        .catch((error) => {
            console.error('Error writing ADP array:', error);
        });
    }
}

function draftComputerPlayer(availablePlayers, team) {
    console.log("Computer is making a draft pick...");

    let positionNeeds = {};
    for (const position in team.maxPlayers) {
        positionNeeds[position] = team.maxPlayers[position] - team.players[position].length;
    }

    // Exclude bench for now to fill on-field positions first
    let unfilledPositions = {};
    for (const position in positionNeeds) {
        if (position !== 'Bench' && positionNeeds[position] > 0) {
            unfilledPositions[position] = positionNeeds[position];
        }
    }

    let playerScores = [];
    availablePlayers.forEach(player => {
        let preferredPosition = null;

        // Check for dual-position players
        if (player.positions.length > 1 && player.positions.includes('Midfielder')) {
            for (const position of player.positions) {
                if (position !== 'Midfielder' && unfilledPositions[position]) {
                    preferredPosition = position;
                    break;
                }
            }
        }

        // Calculate score
        (preferredPosition ? [preferredPosition] : player.positions).forEach(position => {
            if (unfilledPositions[position]) {
                const rankScore = (1 / player.rank) * 0.6;
                const positionalNeedScore = (unfilledPositions[position] / team.maxPlayers[position]) * 0.4;
                const score = rankScore + positionalNeedScore;
                playerScores.push({ score, player, position });
            }
        });
    });

    // Sort players by score & randomize the order if scores are equal
    playerScores.sort((a, b) => {
        if (b.score === a.score) {
            return Math.random() - 0.5;
        }

        return b.score - a.score;
    });
    
    // Try to draft the best player based on the calculated score
    for (const { score, player, position } of playerScores) {
        if (positionNeeds[position] > 0) {
            player.currentPosition = position;
            team.players[position].push(player);
            console.log(`${player.name} has been drafted as a ${position}`);
            return { player, position };
        }
    }

    // Consider the bench
    if (positionNeeds['Bench'] > 0) {
        const bestBenchPlayer = availablePlayers.reduce((best, current) => 
            (1 / current.rank) > (1 / best.rank) ? current : best
        );
        bestBenchPlayer.currentPosition = 'Bench';
        team.players['Bench'].push(bestBenchPlayer);
        console.log(`${bestBenchPlayer.name} has been added to the bench`);
        return { player: bestBenchPlayer, position: 'Bench' };
    }

    return { player: null, position: null };
}

function displayAllFinalTeams() {
    document.getElementById("allTeamsContainer").style.display = 'block';

    var userIndex = Number(userDraftPosition);
    var positions = ['Defender', 'Midfielder', 'Forward', 'Ruck', 'Bench'];
    var tempTeams = [[]].concat(allTeams);
    var headerObjects = [];

    tempTeams.forEach((team, index) => {
        const headerObj = {
            targets: [index],
            title: index === 0 ? '' : (index === userIndex ? 'User Team' : `CPU Team ${index}`),
        };

        headerObjects.push(headerObj);
    });
 
    const allTeamsTable = $('#allTeamsTable').DataTable({
        retrieve: true,
        sort: false,
        searching: false,
        paging: false,
        lengthChange: false,
        info: false,
        columnDefs: headerObjects,
    });

    allTeamsTable.clear();

    positions.forEach((position) => {
        var row = [position];

        tempTeams.forEach((team, index) => {
            if (index === 0) {
                return; // Skip the first row
            }

            // Add player data based on positions
            const playersInPosition = team.players[position];
            const playerNames = playersInPosition.map(player => player.name).join('<br>');
            row.push(playerNames);
        });

        allTeamsTable.row.add(row);
    });

    allTeamsTable.draw();
}

function updateDisplayArea(log) {
    const title = "Pick Log:";
    log = log.replace(/\n/g, "<br>");

    const container = document.getElementById("pickLogModalContainer");
    container.innerHTML = `<span class="close margin-top-10" onclick="closePickLogModal()">&times;</span>${title}<br>${log}`;
}

function showAlertModal(message) {
    const alertModal = document.getElementById('alertModal');
    const alertModalText = document.getElementsByClassName('alertModalText')[0];

    alertModalText.textContent = message;
    alertModal.style.display = 'block';

    const button = document.getElementById('alertButtonOk');
    button.addEventListener('click', function() {
        alertModal.style.display = 'none';
    });
}

function showPickLog() {
    document.getElementById('pickLogModal').style.display = 'block';
}

function closePickLogModal() {
    document.getElementById('pickLogModal').style.display = 'none';
}

function restartApp() {
    numPlayersPerTeam, chosenConfig, numTeams, userDraftPosition, draftType, userTeam, pickLog = '';
    currentPickNumber = 0;
    ADP, computerTeams, availablePlayers, allTeams = [];
    
    updateDisplayArea(pickLog);
    document.getElementById('currentPickSelection').textContent = '';

    document.getElementById('allTeamsContainer').style.display = 'none';
    document.getElementById('restartDraftButton').style.display = 'none';
    document.getElementById('showPickLogButton').style.display = 'none';
    document.getElementById('playerListContainer').style.display = 'none';
    document.getElementById('automatedTest').style.display = 'block';
    document.getElementById('draftSetup').style.display = 'block';
    document.getElementById('showADPContainer').style.display = 'block';
    document.getElementById('configChoiceSection').style.display = 'block';
    document.getElementById('startDraftButton').style.display = 'block';
    document.getElementById('startDraftButton').disabled = true;

    getADP();
}

/*********************************************/
//TODO REMOVE THIS FOR PROD ONLY FOR TESTING
async function getADP(flag) {
    const adpData = await firebase.database().ref('X-ADP').limitToLast(100).once('value');
    const data = adpData.val();

    return showADP(data)
        .then((data) => {
            if (flag) {
                return data;
            } else {
                return showADPTable(data);
            }
        })
        .catch((error) => {
            return console.error('Error showing ADP array:', error);
        });

    async function showADP(data) {
        const allPlayers = Object.values(data).flat();
        
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
                player_id, averagePick: parseFloat(averagePick.toFixed(2)) 
            };
        });
        
        const finalArray = averagedPlayers.map(averagedPlayer => {
            const originalPlayer = allPlayers.find(player => player.player_id === averagedPlayer.player_id);

            return {
                name: originalPlayer.name,
                adp: averagedPlayer.averagePick,
                player_id: originalPlayer.player_id,
            };
        });
        
        finalArray.sort((a, b) => a.adp - b.adp);
        return finalArray;
    }

    function showADPTable(data) {
        const adpTable = $('#ADPTable').DataTable({
            retrieve: true,
            sort: false,
            searching: false,
            paging: false,
            lengthChange: false,
            info: false,
            columnDefs: [
                { targets: [0], title: "Rank" },
                { targets: [1], title: "Players" },
                { targets: [2], title: "ADP" },
            ],
        });

        adpTable.clear();

        data.forEach((player, i) => {
            adpTable.row.add([i + 1, player.name, player.adp]);
        });

        adpTable.draw();
    }
}

/*********************************************/

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.configButton').forEach(button => {
        button.addEventListener('click', () => {
            const minPlayersForSelection = button.getAttribute('data-min');
            const configNumber = button.getAttribute('data-config');
            selectConfiguration(parseInt(configNumber, 10), minPlayersForSelection);
        });
    });
    
    /*********************************************/
    //TODO REMOVE THIS FOR PROD ONLY FOR TESTING
    document.querySelectorAll('.test').forEach(button => {
        button.addEventListener('click', () => {
            const clickedId = button.id;
    
            if (clickedId === 'test1') {
                chosenConfig = {
                    "defenders": 2,
                    "midfielders": 3,
                    "ruck": 1,
                    "forwards": 2
                };
                numPlayersPerTeam = 8;
            } else if (clickedId === 'test2') {
                chosenConfig = {
                    "defenders": 5,
                    "midfielders": 7,
                    "ruck": 1,
                    "forwards": 5
                };
                numPlayersPerTeam = 18;
            } else {
                chosenConfig = {
                    "defenders": 6,
                    "midfielders": 8,
                    "ruck": 2,
                    "forwards": 6
                };
                numPlayersPerTeam = 22;
            }

            numTeams = 2;
            userDraftPosition = 1;
            document.getElementById('userDraftPosition').value = 1;
            
            setUserDraftPosition();

            document.getElementById('automatedTest').style.display = 'none';
            document.getElementById('configChoiceSection').style.display = 'none';
            document.getElementById('draftTypeSection').style.display = 'none';

            draftType = 'snake';

            checkAllInputsSet();
        });
    });

    getADP();

    const showADPButton = document.getElementById('showADPButton');
    const showADPTable = document.getElementById('ADPTable');
    const automatedTestContainer = document.getElementById('automatedTest');
    const draftSetupContainer = document.getElementById('draftSetup');
    const configChoiceContainer = document.getElementById('configChoiceSection'); 
    const startDraftButton = document.getElementById('startDraftButton');
    const restartDraftButton = document.getElementById('restartDraftButton');

    showADPButton.addEventListener('click', function () {
        if (showADPButton.textContent === 'Show ADP') {
            showADPTable.style.display = 'block';
            automatedTestContainer.style.display = 'none';
            draftSetupContainer.style.display = 'none';
            configChoiceContainer.style.display = 'none';
            startDraftButton.style.display = 'none';
            showADPButton.textContent = 'Hide ADP';
        } else {
            showADPTable.style.display = 'none';
            automatedTestContainer.style.display = 'block';
            draftSetupContainer.style.display = 'block';
            configChoiceContainer.style.display = 'block';
            startDraftButton.style.display = 'block';
            showADPButton.textContent = 'Show ADP';
        }
    });

    /*********************************************/

    document.getElementById('showPickLogButton').addEventListener('click', showPickLog);
    document.getElementById('setNumPlayersPerTeamButton').addEventListener('click', setNumPlayersPerTeam);
    document.getElementById('setNumTeamsButton').addEventListener('click', setNumTeams);
    document.getElementById('setUserDraftPositionButton').addEventListener('click', setUserDraftPosition);
    document.getElementById('setDraftTypeButton').addEventListener('click', setDraftType);
    
    startDraftButton.addEventListener('click', () => {
        automatedTestContainer.style.display = 'none';
        document.getElementById('showADPContainer').style.display = 'none';
        document.getElementById('automatedTest').style.display = 'none';
        document.getElementById('startDraftButton').style.display = 'none';
        startDraftSimulation();
    });

    restartDraftButton.addEventListener('click', () => {
        restartApp();
    });
});