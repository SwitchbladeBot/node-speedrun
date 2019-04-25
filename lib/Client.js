const fetch = require('node-fetch')
const path = require('path')
const fs = require('fs')

const EndpointStructure = require('./structures/Endpoint.js')

class Client {
  /**
   * @param {Object} [options] - Options of Client
   * @param {String} [options.userAgent] - User Agent to be used for every request
   * @param {String} [options.baseUrl] - Base URL for the API
   */
  constructor (options = {}) {
    this.userAgent = options.userAgent || 'node-speedrun (https://npmjs.com/package/node-speedrun)'
    this.baseUrl = options.baseUrl || 'https://www.speedrun.com/api/v1'

    this.arrangeEndpoints()
  }

  /**
   * Performs a GET request to an endpoint on the API
   * @param {String} endpoint - Endpoint to perform the request to
   * @returns {Promise} - Returned promise
   */
  get (endpoint) {
    return fetch(`${this.baseUrl}${endpoint}`, {
      headers: { 'User-Agent': this.userAgent }
    }).then(data => data.json())
  }

  async arrangeEndpoints (dirName = '/endpoints') {
    const files = await fs.readdirSync(path.join(__dirname, dirName))
    for (var i in files) {
      const Endpoint = require(`${path.join(__dirname, dirName)}/${files[i]}`)
      const endpoint = new Endpoint(this)

      if (!(endpoint.prototype instanceof EndpointStructure)) return
      else this[endpoint.name] = endpoint
    }
  }
}

module.exports = Client
