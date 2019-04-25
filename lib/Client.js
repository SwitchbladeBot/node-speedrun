const fetch = require('node-fetch')
const path = require('path')
const fs = require('fs')

const EndpointStructure = require('./structures/Endpoint.js')

class Client {
  /**
   * @param {String} [userAgent] - User Agent to be used for every request
   * @param {String} [baseUrl] - Base URL for the API
   */
  constructor (userAgent = 'node-speedrun (https://npmjs.com/package/node-speedrun)', baseUrl = 'https://www.speedrun.com/api/v1') {
    this.userAgent = userAgent
    this.baseUrl = baseUrl

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
