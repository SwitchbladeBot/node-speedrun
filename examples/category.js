const SpeedrunClient = require('../lib/Client.js')
const speedrun = new SpeedrunClient()

// Get category details
speedrun.getCategory('j1npme6p').then(console.log)

// Get category variables
speedrun.getCategoryVariables('j1npme6p').then(console.log)

// Get category records
speedrun.getCategoryRecords('j1npme6p').then(console.log)
