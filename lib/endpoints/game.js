const Endpoint = require('../structures/Endpoint.js')

class Game extends Endpoint {
  constructor (client) {
    super(client)
    this.name = 'games'
  }

  /**
   * Get game details
   * @param {String} game - Game abbreviation or ID you want to get details about
   * @returns {Promise} - Returned promise
   */
  get (game) {
    return this.client.get(`/games/${game}`)
  }

  /**
   * Get game levels
   * @param {String} gameId - Game ID you want to get levels from
   * @returns {Promise} - Returned promise
   */
  getLevels (gameId) {
    return this.client.get(`/games/${gameId}/levels`)
  }

  /**
   * Gets games by region
   * @param {String} region - Region ID you want to get games from
   * @returns {Promise} - Returned promise
   */
  getByRegion (region) {
    return this.client.get(`/games`, { qs: { region } })
  }

  /**
   * Gets games by platform
   * @param {String} platform - Platform ID you want to get games from
   * @returns {Promise} - Returned promise
   */
  getByPlatform (platform) {
    return this.client.get(`/games`, { qs: { platform } })
  }

  /**
   * Get derived games
   * @param {String} game - Game abbreviation or ID you want to get derived games from
   * @returns {Promise} - Returned promise
   */
  getDerivedGames (game) {
    return this.client.get(`/games/${game}/derived-games`)
  }

  /**
   * Get game leaderboard
   * @param {String} gameId - Game ID you want to get the leaderboard from
   * @param {String} categoryId - Category ID you want to get the leaderboard from
   * @returns {Promise} - Returned promise
   */
  getLeaderboard (gameId, categoryId) {
    return this.client.get(`/leaderboards/${gameId}/category/${categoryId}`)
  }
}

module.exports = Game