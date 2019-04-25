const SpeedrunClient = require('../lib/Client.js')
const speedrun = new SpeedrunClient()

// Get category details
speedrun.categories.get('j1npme6p').then(console.log)

// Get category variables
speedrun.categories.getVariables('j1npme6p').then(console.log)

// Get category records
speedrun.categories.getRecords('j1npme6p').then(console.log)
