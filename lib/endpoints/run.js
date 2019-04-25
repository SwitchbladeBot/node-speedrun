const Endpoint = require('../structures/Endpoint.js')

class Run extends Endpoint {
  constructor (client) {
    super(client)
    this.name = 'runs'
  }

  /**
   * Get run details
   * @param {String} runId - Run ID you want to get details about
   * @returns {Promise} - Returned promise
   */
  get (runId) {
    return this.client.get(`/runs/${runId}`)
  }

  /**
   * Get runs from a specific game
   * @param {String} gameId - Game ID you want to get runs from
   * @returns {Promise} - Returned promise
   */
  getFromGame (gameId) {
    return this.client.get(`/runs`, { qs: { game: gameId } })
  }

  /**
   * Get runs from a specific user
   * @param {String} userId - User ID you want to get runs from
   * @returns {Promise} - Returned promise
   */
  getFromUser (userId) {
    return this.client.get(`/runs`, { qs: { user: userId } })
  }

  /**
   * Get runs from a specific region
   * @param {String} regionId - Region ID you want to get runs from
   * @returns {Promise} - Returned promise
   */
  getFromRegion (regionId) {
    return this.client.get(`/runs`, { qs: { region: regionId } })
  }

  /**
   * Get runs from a specific level
   * @param {String} levelId - Level ID you want to get runs from
   * @returns {Promise} - Returned promise
   */
  getFromLevel (levelId) {
    return this.client.get(`/runs`, { qs: { level: levelId } })
  }

  /**
   * Get runs from a specific platform
   * @param {String} platformId - Platform ID you want to get runs from
   * @returns {Promise} - Returned promise
   */
  getFromPlatform (platformId) {
    return this.client.get(`/runs`, { qs: { platform: platformId } })
  }

  /**
   * Get runs from a specific category
   * @param {String} categoryId - Category ID you want to get runs from
   * @returns {Promise} - Returned promise
   */
  getFromCategory (categoryId) {
    return this.client.get(`/runs`, { qs: { category: categoryId } })
  }
}

module.exports = Run