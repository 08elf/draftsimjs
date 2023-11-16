// Global variables to store user inputs
let numPlayersPerTeam;
let chosenConfig;
let numTeams;
let userDraftPosition;
let draftType;
let userTeam;
let pickLog = '';
let currentPickNumber = 0;
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
            alert(`${chosenPosition} position is full, adding ${player.name} to ${availablePositionsSrting}`);

            this.players[availablePositionsSrting].push(player);
            console.log(`DEBUG: ${player.name} added to ${availablePositionsSrting}.`);
            return true;
        } else if (availablePositions.length > 0) {
            this.players[chosenPosition].push(player);
            console.log(`DEBUG: ${player.name} added to ${chosenPosition}.`);
            return true;
        } else {
            // Add to bench without limit
            alert(`${chosenPosition} position is full, adding ${player.name} to Bench`);

            this.players['Bench'].push(player);
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

function startDraftSimulation() {
    // Initialize the draft simulation here
    // This should only set up the draft and start the first turn
    setupDraft();
    proceedToNextDraftRound(0); // Start with round 0
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
        alert('Please select a draft type.');
        return;
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

function setupDraft() {
    // Use the imported players as the available players for the draft
    availablePlayers = players.map(playerData => new Player(
        playerData.player_id,
        playerData.name,
        playerData.positions,
        playerData.rank,
        playerData.fantasy_average, // Ensure this matches the property in your Player class
        playerData.team
    ));
}

async function proceedToNextDraftRound(roundNumber) {
    // Check if the draft is over
    if (roundNumber >= numPlayersPerTeam) {
        console.log("Draft is complete");
        document.getElementById('displayArea').style.display = 'block';
        return displayAllFinalTeams();;
    }

    // Iterate through all teams for the current round
    let user = false;
    for (let i = 0; i < allTeams.length; i++) {
        let teamIndex = (draftType === 'snake' && roundNumber % 2 === 1) ? allTeams.length - 1 - i : i;
        let draftingTeam = allTeams[teamIndex];
    
        if (draftingTeam === userTeam) {
            console.log("User's turn to pick.");
            while (!user) {
                const container = document.getElementById('playerListContainer');
                container.style.display = 'block';
                container.innerHTML = '';
            
                const list = document.createElement('ul');
                container.appendChild(list);
        
                const selectedPlayer = await new Promise(resolve => {
                    availablePlayers.forEach((player) => {
                        const listItem = document.createElement('li');
                        listItem.textContent = `${player.name} (${player.positions.join(', ')})`;
                
                        listItem.addEventListener('click', function() {
                            userPickPlayer(player);
                            user = true;
                            resolve(player);
                        });
                
                        list.appendChild(listItem);
                    });
                });

                removeFromAvailablePlayers(availablePlayers, selectedPlayer);
                displayUserTeam(selectedPlayer);
                pickLog += `Pick ${currentPickNumber} - ${selectedPlayer.name}\n`;
                updateDisplayArea(pickLog);
            }
        } else {
            // Computer's turn to pick
            let pickResult = draftComputerPlayer(availablePlayers, draftingTeam);
            if (pickResult.player) {
                removeFromAvailablePlayers(availablePlayers, pickResult.player);
                pickLog += `Pick ${currentPickNumber} - ${pickResult.player.name}\n`;
                updateDisplayArea(pickLog);

                console.log(`Team ${teamIndex + 1} (computer) picked ${pickResult.player.name}.`);
            }
        }
    };
    
    // Continue to the next round
    proceedToNextDraftRound(roundNumber + 1);
    
    function removeFromAvailablePlayers(availablePlayers, player) {
        const index = availablePlayers.indexOf(player);

        if (index > -1) {
            availablePlayers.splice(index, 1);
            currentPickNumber++
        }
    }
    
    async function userPickPlayer(player) {
        const options = player.positions;
   
        if (options.length > 1) {
            document.getElementById("positionSelectionModal").style.display = 'block';
            const positionButtons = document.getElementById("positionButtons");
            positionButtons.innerHTML = '';

            options.forEach(option => {
                const button = document.createElement("button");
                button.textContent = option;
                button.classList.add("button-1")
                button.addEventListener("click", function () {
                    if (options.includes(option)) {
                        document.getElementById("positionSelectionModal").style.display = 'none';
                        const addedToTeam = userTeam.addPlayer(player, option);

                        if (addedToTeam) {
                            console.log(`${player.name} has been drafted to your team at position ${option}.`);
                            return player;
                        } else {
                            alert(`Unable to draft ${player.name}. Your team may be full.`);
                            userPickPlayer(player);
                        }
                    }
                });

                positionButtons.appendChild(button);
            });
        } else {
            const addedToTeam = userTeam.addPlayer(player, player.positions[0]);
            
            if (addedToTeam) {
                console.log(`${player.name} has been drafted to your team at position ${player.positions[0]}.`);
                return player;
            } else {
                alert(`Unable to draft ${player.name}. Your team may be full.`);
                userPickPlayer(player);
            }
        }
    }

    function displayUserTeam(player) {
        var userTeamPlayerContainer = document.getElementById('userTeamPlayerContainer');
        var playerElement = document.createElement('div');
        playerElement.textContent = `${player.name} (${player.positions.join(', ')}) - Pick ${currentPickNumber}`;
        userTeamPlayerContainer.appendChild(playerElement);
    }

    function updateDisplayArea(log) {
        const title = "Pick Log:";
        log = log.replace(/\n/g, "<br>");
        document.getElementById("displayArea").innerHTML = title + '<br>' + log;
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

    // Sort players by score
    playerScores.sort((a, b) => b.score - a.score);

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
    var userIndex = Number(userDraftPosition);
    var headersRow = document.getElementById('teamHeaders');
    var positions = ['Defender', 'Midfielder', 'Forward', 'Ruck', 'Bench'];
    
    allTeams.unshift([]);
    allTeams.forEach((team, index) => {
        const headerCell = document.createElement('th');

        if (index === 0) {
            headerCell.textContent = ``;
        } else if (index === userIndex) {
            headerCell.textContent = 'User Team';
        } else if (index < userIndex) {
            headerCell.textContent = `CPU Team ${index + 1}`;
        } else {
            headerCell.textContent = `CPU Team ${index}`;
        }

        headersRow.appendChild(headerCell);
    });

    positions.forEach(position => {
        const row = document.querySelector(`.${position}`);

        if (row) {
            const cell = document.createElement('td');
            cell.textContent = position;
            row.appendChild(cell);
        } else {
            console.error(`Row with class '${position}' not found.`);
        }
    });

    positions.forEach(position => {
        const row = document.querySelector(`.${position}`);
        
        if (row) {
            allTeams.forEach((team, index) => {
                if (index === 0) {
                    return;
                }
    
                const playersInPosition = team.players[position];
                const cell = document.createElement('td');
    
                if (position === 'Position') {
                    cell.textContent = position;
                } else {
                    const playerDivs = playersInPosition.map(player => {
                        const playerDiv = document.createElement('div');
                        playerDiv.textContent = player.name;
                        return playerDiv;
                    });
    
                    playerDivs.forEach(playerDiv => cell.appendChild(playerDiv));
                }
    
                row.appendChild(cell);
            });
        } else {
            console.error(`Row with class '${position}' not found.`);
        }
    });

    document.getElementById('userTeamPlayerContainer').style.display = 'none';
    document.getElementById('playerListContainer').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.configButton').forEach(button => {
        button.addEventListener('click', () => {
            const minPlayersForSelection = button.getAttribute('data-min');
            const configNumber = button.getAttribute('data-config');
            selectConfiguration(parseInt(configNumber, 10), minPlayersForSelection);
        });
    });
    
    document.getElementById('setNumPlayersPerTeamButton').addEventListener('click', setNumPlayersPerTeam);
    document.getElementById('setNumTeamsButton').addEventListener('click', setNumTeams);
    document.getElementById('setUserDraftPositionButton').addEventListener('click', setUserDraftPosition);
    document.getElementById('setDraftTypeButton').addEventListener('click', setDraftType);
    document.getElementById('startDraftButton').addEventListener('click', () => {
        document.getElementById('startDraftButton').style.display = 'none';
        document.getElementById('userTeamPlayerContainer').style.display = 'block';
        startDraftSimulation();
    });
});