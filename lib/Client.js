const fetch = require('node-fetch')

module.exports = class Client {
  /**
   * @param {String} [userAgent] - User Agent to be used for every request
   * @param {String} [baseUrl] - Base URL for the API
   */
  constructor (userAgent = 'node-speedrun (https://npmjs.com/package/node-speedrun)', baseUrl = 'https://www.speedrun.com/api/v1') {
    this.userAgent = userAgent
    this.baseUrl = baseUrl
  }

  /**
   * Performs a GET request to an endpoint on the API
   * @param {String} endpoint - Endpoint to perform the request to
   * @returns {Promise} - Returned promise
   */
  get (endpoint) {
    return fetch(`${this.baseUrl}${endpoint}`, {
      headers: { 'User-Agent': this.userAgent }
    }).then(res => res.json())
  }

  // Game

  /**
   * Get game details
   * @param {String} game - Game abbreviation or ID you want to get details about
   * @returns {Promise} - Returned promise
   */
  getGame (game) {
    return this.get(`/games/${game}`)
  }

  /**
   * Get derived games
   * @param {String} game - Game abbreviation or ID you want to get derived games from
   * @returns {Promise} - Returned promise
   */
  getDerivedGames (game) {
    return this.get(`/games/${game}/derived-games`)
  }

  /**
   * Get game levels
   * @param {String} gameId - Game ID you want to get levels from
   * @returns {Promise} - Returned promise
   */
  getGameLevels (gameId) {
    return this.get(`/games/${gameId}/levels`)
  }

  /**
   * Gets games by region
   * @param {String} region - Region ID you want to get games from
   * @returns {Promise} - Returned promise
   */
  getGamesByRegion (region) {
    return this.get(`/games`, {
      qs: { region }
    })
  }

  /**
   * Gets games by platform
   * @param {String} platform - Platform ID you want to get games from
   * @returns {Promise} - Returned promise
   */
  getGamesByPlatform (platform) {
    return this.get(`/games`, {
      qs: { platform }
    })
  }

  /**
   * Get game leaderboard
   * @param {String} gameId - Game ID you want to get the leaderboard from
   * @param {String} categoryId - Category ID you want to get the leaderboard from
   * @returns {Promise} - Returned promise
   */
  getGameLeaderboard (gameId, categoryId) {
    return this.get(`/leaderboards/${gameId}/category/${categoryId}`)
  }

  // Runs

  /**
   * Get run details
   * @param {String} runId - Run ID you want to get details about
   * @returns {Promise} - Returned promise
   */
  getRun (runId) {
    return this.get(`/runs/${runId}`)
  }

  /**
   * Get runs from a specific game
   * @param {String} gameId - Game ID you want to get runs from
   * @returns {Promise} - Returned promise
   */
  getRunsByGame (gameId) {
    return this.get(`/runs`, {
      qs: { game: gameId }
    })
  }

  /**
   * Get runs from a specific user
   * @param {String} userId - User ID you want to get runs from
   * @returns {Promise} - Returned promise
   */
  getRunsByUser (userId) {
    return this.get(`/runs`, {
      qs: { user: userId }
    })
  }

  /**
   * Get runs by region
   * @param {String} region - Region ID you want to get runs from
   * @returns {Promise} - Returned promise
   */
  getRunsByRegion (region) {
    return this.get(`/runs`, {
      qs: { region }
    })
  }

  /**
   * Get runs by level
   * @param {String} level - Level ID you want to get runs from
   * @returns {Promise} - Returned promise
   */
  getRunsByLevel (level) {
    return this.get(`/runs`, {
      qs: { level }
    })
  }

  /**
   * Get runs by platform
   * @param {String} platform - Platform ID you want to get runs from
   * @returns {Promise} - Returned promise
   */
  getRunsByPlatform (platform) {
    return this.get(`/runs`, {
      qs: { platform }
    })
  }

  /**
   * Get runs by category
   * @param {String} category - Category ID you want to get runs from
   * @returns {Promise} - Returned promise
   */
  getRunsByCategory (category) {
    return this.get(`/runs`, {
      qs: { category }
    })
  }

  // User

  /**
   * Get user details
   * @param {String} user - User name or ID you want to get details about
   * @returns {Promise} - Returned promise
   */
  getUser (user) {
    return this.get(`/users/${user}`)
  }

  /**
   * Get user's personal bests
   * @param {String} user - User name or ID you want to get personal bests from
   * @returns {Promise} - Returned promise
   */
  getUserPersonalBests (user) {
    return this.get(`/users/${user}/personal-bests`)
  }

  // Platform

  /**
   * Get platform details
   * @param {String} platformId - Platform ID you want to get details about
   * @returns {Promise} - Returned promise
   */
  getPlatform (platformId) {
    return this.get(`/platforms/${platformId}`)
  }

  // Region

  /**
   * Get region details
   * @param {String} regionId - Region ID you want to get details about
   * @returns {Promise} - Returned promise
   */
  getRegion (regionId) {
    return this.get(`/regions/${regionId}`)
  }

  // Level

  /**
   * Get level details
   * @param {String} levelId - Level ID you want to get details about
   * @returns {Promise} - Returned promise
   */
  getLevel (levelId) {
    return this.get(`/levels/${levelId}`)
  }

  /**
   * Get level categories
   * @param {String} levelId - Level ID you want to get categories from
   * @returns {Promise} - Returned promise
   */
  getLevelCategories (levelId) {
    return this.get(`/levels/${levelId}/categories`)
  }

  /**
   * Get level variables
   * @param {String} levelId - Level ID you want to get variables from
   * @returns {Promise} - Returned promise
   */
  getLevelVariables (levelId) {
    return this.get(`/levels/${levelId}/variables`)
  }

  /**
   * Get level records
   * @param {String} levelId - Level ID you want to get records from
   * @returns {Promise} - Returned promise
   */
  getLevelRecords (levelId) {
    return this.get(`/levels/${levelId}/records`)
  }

  // Serie

  /**
   * Get serie details
   * @param {String} serieId - Serie ID you want to get details about
   * @returns {Promise} - Returned promise
   */
  getSerie (serieId) {
    return this.get(`/series/${serieId}`)
  }

  /**
   * Get serie games
   * @param {String} serieId - Serie ID you want to get games from
   * @returns {Promise} - Returned promise
   */
  getSerieGames (serieId) {
    return this.get(`/series/${serieId}/games`)
  }

  // Category

  /**
   * Get category details
   * @param {String} categoryId - Category ID you want to get details about
   * @returns {Promise} - Returned promise
   */
  getCategory (categoryId) {
    return this.get(`/categories/${categoryId}`)
  }

  /**
   * Get category variables
   * @param {String} categoryId - Category ID you want to get variables from
   * @returns {Promise} - Returned promise
   */
  getCategoryVariables (categoryId) {
    return this.get(`/categories/${categoryId}/variables`)
  }

  /**
   * Get category records
   * @param {String} categoryId - Category ID you want to get records from
   * @returns {Promise} - Returned promise
   */
  getCategoryRecords (categoryId) {
    return this.get(`/categories/${categoryId}/records`)
  }
}
