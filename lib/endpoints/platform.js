const Endpoint = require('../structures/Endpoint.js')

class Platform extends Endpoint {
  constructor (client) {
    super(client)
    this.name = 'platforms'
  }

  /**
   * Get platform details
   * @param {String} platformId - Platform ID you want to get details about
   * @returns {Promise} - Returned promise
   */
  get (platformId) {
    return this.client.get(`/platforms/${platformId}`)
  }
}

module.exports = Platform
