const Endpoint = require('../structures/Endpoint.js')

class Category extends Endpoint {
  constructor (client) {
    super(client)
    this.name = 'categories'
  }

  /**
   * Get category details
   * @param {String} categoryId - Category ID you want to get details about
   * @returns {Promise} - Returned promise
   */
  get (categoryId) {
    return this.client.get(`/categories/${categoryId}`)
  }

  /**
   * Get category variables
   * @param {String} categoryId - Category ID you want to get variables from
   * @returns {Promise} - Returned promise
   */
  getVariables (categoryId) {
    return this.client.get(`/categories/${categoryId}/variables`)
  }

  /**
   * Get category records
   * @param {String} categoryId - Category ID you want to get records from
   * @returns {Promise} - Returned promise
   */
  getRecords (categoryId) {
    return this.client.get(`/categories/${categoryId}/records`)
  }
}

module.exports = Category
