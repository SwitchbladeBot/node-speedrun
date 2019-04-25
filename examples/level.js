const SpeedrunClient = require('../lib/Client.js')
const speedrun = new SpeedrunClient()

// Get level details
speedrun.getLevel('j1npme6p').then(console.log)

// Get level categories
speedrun.getLevelCategories('j1npme6p').then(console.log)

// Get level variables
speedrun.getLevelVariables('j1npme6p').then(console.log)

// Get level records
speedrun.getLevelRecords('j1npme6p').then(console.log)
