const SpeedrunClient = require('../lib/Client.js')
const speedrun = new SpeedrunClient()

// Get level details
speedrun.levels.get('owo7e5v9').then(console.log)

// Get level categories
speedrun.levels.getCategories('owo7e5v9').then(console.log)

// Get level variables
speedrun.levels.getVariables('owo7e5v9').then(console.log)

// Get level records
speedrun.levels.getRecords('owo7e5v9').then(console.log)
