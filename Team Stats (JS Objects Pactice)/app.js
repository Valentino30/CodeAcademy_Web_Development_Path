const team = {
    _players: [
        {
            firstName: 'Tomas',
            lastName: 'Tommasi',
            age: 25
          },
          {
            firstName: 'Paco',
            lastName: 'Pacuzzi',
            age: 29
          },
          {
            firstName: 'Vale',
            lastName: 'Valentini',
            age: 31
          }
    ],
    _games: [
        {
            opponent: 'Tomasolli',
            teamPoints: 42,
            opponentPoints: 27
          },
          {
            opponent: 'Paculli',
            teamPoints: 55,
            opponentPoints: 66
          },
          {
            opponent: 'Vallelli',
            teamPoints: 33,
            opponentPoints: 47
          }
    ],
    get players () {
        return this._players;
    },
    get games () {
        return this._games;
    },
    addPlayer (firstName, lastName, age) {
        const player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this._players.push(player);
    },
    addGame (opponent, teamPoints, opponentPoints) {
        const game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        }
        this._games.push(game);
    }
};

team.addPlayer ('Steph', 'Curry', 28); 
team.addPlayer ('Lisa', 'Leslie', 44); 
team.addPlayer ('Bugs', 'Bunny', 76);

console.log(team._players);

team.addGame ('Tomasozzi', 55, 46); 
team.addGame ('Pacuzzi', 88, 77); 
team.addGame ('Valuzzi', 99, 66);

console.log(team._games);