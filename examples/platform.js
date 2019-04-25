const SpeedrunClient = require('../lib/Client.js')
const speedrun = new SpeedrunClient()

// Get platform details
speedrun.getPlatform('83exwk6l').then(console.log)
