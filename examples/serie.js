const SpeedrunClient = require('../lib/Client.js')
const speedrun = new SpeedrunClient()

// Get serie details
speedrun.getSerie('8nwjpj7y').then(console.log)

// Get serie games
speedrun.getSerieGames('8nwjpj7y').then(console.log)
