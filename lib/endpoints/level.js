const Endpoint = require('../structures/Endpoint.js')

class Level extends Endpoint {
  constructor (client) {
    super(client)
    this.name = 'levels'
  }

  /**
   * Get level details
   * @param {String} levelId - Level ID you want to get details about
   * @returns {Promise} - Returned promise
   */
  get (levelId) {
    return this.client.get(`/levels/${levelId}`)
  }

  /**
   * Get level categories
   * @param {String} levelId - Level ID you want to get categories from
   * @returns {Promise} - Returned promise
   */
  getCategories (levelId) {
    return this.client.get(`/levels/${levelId}/categories`)
  }

  /**
   * Get level variables
   * @param {String} levelId - Level ID you want to get variables from
   * @returns {Promise} - Returned promise
   */
  getVariables (levelId) {
    return this.client.get(`/levels/${levelId}/variables`)
  }

  /**
   * Get level records
   * @param {String} levelId - Level ID you want to get records from
   * @returns {Promise} - Returned promise
   */
  getRecords (levelId) {
    return this.client.get(`/levels/${levelId}/records`)
  }
}

module.exports = Level
