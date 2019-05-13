const Endpoint = require('../structures/Endpoint.js')

class User extends Endpoint {
  constructor (client) {
    super(client)
    this.name = 'users'
  }

  /**
   * Get user details
   * @param {String} user - User name or ID you want to get details about
   * @returns {Promise} - Returned promise
   */
  get (user) {
    return this.client.get(`/users/${user}`)
  }

  /**
   * Get user's personal bests
   * @param {String} user - User name or ID you want to get personal bests from
   * @returns {Promise} - Returned promise
   */
  getPersonalBests (user) {
    return this.client.get(`/users/${user}/personal-bests`)
  }
}

module.exports = User
