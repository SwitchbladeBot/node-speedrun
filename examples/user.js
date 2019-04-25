const SpeedrunClient = require('../lib/Client.js')
const speedrun = new SpeedrunClient()

// Get user details
speedrun.getUser('pj00k3jw').then(console.log)

// Get user personal bests
speedrun.getUserPersonalBests('pj00k3jw').then(console.log)
