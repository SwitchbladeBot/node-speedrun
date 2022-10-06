const axios = require('axios')

const { Category, Game, Level, Platform, Region, Run, Serie, User } = require('./index')

class Client {
  /**
   * @param {Object} [options] - Options of Client
   * @param {String} [options.userAgent] - User Agent to be used for every request
   * @param {String} [options.baseUrl] - Base URL for the API
   */
  constructor (options = {}) {
    this.userAgent = options.userAgent || 'node-speedrun (https://npmjs.com/package/node-speedrun)'
    this.baseUrl = options.baseUrl || 'https://www.speedrun.com/api/v1'

    this.categories = new Category(this)
    this.games = new Game(this)
    this.levels = new Level(this)
    this.platforms = new Platform(this)
    this.regions = new Region(this)
    this.runs = new Run(this)
    this.series = new Serie(this)
    this.users = new User(this)
  }

  /**
   * Performs a GET request to an endpoint on the API
   * @param {String} endpoint - Endpoint to perform the request to
   * @returns {Promise} - Returned promise
   */
  get (endpoint) {
    return axios.get(`${this.baseUrl}${endpoint}`, {
      headers: { 'User-Agent': this.userAgent }
    }).then(res => res.data)
  }
}

module.exports = Client
