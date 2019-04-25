const SpeedrunClient = require('../lib/Client.js')
const speedrun = new SpeedrunClient()

// Get game details
speedrun.games.get('j1npme6p').then(console.log)

// Get game levels
speedrun.games.getLevels('j1npme6p').then(console.log)

// Get games by region
speedrun.games.getByRegion('ypl25l47').then(console.log)

// Get games by platform
speedrun.games.getByPlatform('83exwk6l').then(console.log)

// Get derived games
speedrun.games.getDerivedGames('j1npme6p').then(console.log)

// Get game leaderboard
speedrun.games.getLeaderboard('v1pjk418', 'q25w6v2o').then(console.log)
