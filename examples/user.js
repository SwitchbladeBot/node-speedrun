const SpeedrunClient = require('../lib/Client.js')
const speedrun = new SpeedrunClient()

// Get user details
speedrun.users.get('pj00k3jw').then(console.log)

// Get user personal bests
speedrun.users.getPersonalBests('pj00k3jw').then(console.log)
