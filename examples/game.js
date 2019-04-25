const SpeedrunClient = require('../lib/Client.js')
const speedrun = new SpeedrunClient()

// Get game details
speedrun.getGame('j1npme6p').then(console.log)

// Get derived games
speedrun.getDerivedGames('j1npme6p').then(console.log)

// Get game levels
speedrun.getGameLevels('j1npme6p').then(console.log)

// Get games by region
speedrun.getGamesByRegion('ypl25l47').then(console.log)

// Get games by platform
speedrun.getGamesByPlatform('83exwk6l').then(console.log)

// Get game leaderboard
speedrun.getGameLeaderboard('v1pjk418', 'q25w6v2o').then(console.log)
