const Endpoint = require('../structures/Endpoint.js')

class Region extends Endpoint {
  constructor (client) {
    super(client)
    this.name = 'regions'
  }

  /**
   * Get region details
   * @param {String} regionId - Region ID you want to get details about
   * @returns {Promise} - Returned promise
   */
  get (regionId) {
    return this.client.get(`/regions/${regionId}`)
  }
}

module.exports = Region