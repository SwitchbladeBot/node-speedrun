const SpeedrunClient = require('../lib/Client.js')
const speedrun = new SpeedrunClient()

// Get run details
speedrun.getRun('0y6p1e1m').then(console.log)

// Get runs from a specific game
speedrun.getRunsByGame('j1npme6p').then(console.log)

// Get runs from a specific user
speedrun.getRunsByUser('pj00k3jw').then(console.log)

// Get runs by region
speedrun.getRunsByRegion('ypl25l47').then(console.log)

// Get runs by level
speedrun.getRunsByLevel('5928n796').then(console.log)

// Get runs by platform
speedrun.getRunsByPlatform('83exwk6l').then(console.log)

// Get runs by category
speedrun.getRunsByCategory('q25w6v2o').then(console.log)
