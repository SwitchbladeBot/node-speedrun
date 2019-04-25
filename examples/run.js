const SpeedrunClient = require('../lib/Client.js')
const speedrun = new SpeedrunClient()

// Get run details
speedrun.runs.get('0y6p1e1m').then(console.log)

// Get runs from a specific game
speedrun.runs.getFromGame('j1npme6p').then(console.log)

// Get runs from a specific user
speedrun.runs.getFromUser('pj00k3jw').then(console.log)

// Get runs from a specific region
speedrun.runs.getFromRegion('ypl25l47').then(console.log)

// Get runs from a specific level
speedrun.runs.getFromLevel('5928n796').then(console.log)

// Get runs from a specific platform
speedrun.runs.getFromPlatform('83exwk6l').then(console.log)

// Get runs from a specific category
speedrun.runs.getFromCategory('q25w6v2o').then(console.log)
