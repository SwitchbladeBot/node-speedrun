const SpeedrunClient = require('../lib/Client.js')
const speedrun = new SpeedrunClient()

// Get serie details
speedrun.series.get('8nwjpj7y').then(console.log)

// Get serie games
speedrun.series.getGames('8nwjpj7y').then(console.log)
