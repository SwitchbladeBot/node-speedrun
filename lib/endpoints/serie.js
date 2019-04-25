const Endpoint = require('../structures/Endpoint.js')

class Serie extends Endpoint {
  constructor (client) {
    super(client)
    this.name = 'series'
  }

  /**
   * Get serie details
   * @param {String} serieId - Serie ID you want to get details about
   * @returns {Promise} - Returned promise
   */
  get (serieId) {
    return this.client.get(`/series/${serieId}`)
  }

  /**
   * Get serie games
   * @param {String} serieId - Serie ID you want to get games from
   * @returns {Promise} - Returned promise
   */
  getGames (serieId) {
    return this.client.get(`/series/${serieId}/games`)
  }
}

module.exports = Serie
