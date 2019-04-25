const SpeedrunClient = require('../lib/Client.js')
const speedrun = new SpeedrunClient()

// Get region details
speedrun.regions.get('ypl25l47').then(console.log)
