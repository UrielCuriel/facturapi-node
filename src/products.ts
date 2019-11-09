import { Wrapper } from "./wrapper";

export class Products {
  public wrapper: Wrapper;

  /**
   * @param {Wrapper} wrapper
   */
  constructor (wrapper: Wrapper) {
    this.wrapper = wrapper;
  }

  /**
   * Creates a new product in your organization
   * @param {Object} data
   * @returns {Promise}
   */
  create (data: object): Promise<any> {
    return this.wrapper.createProduct(data);
  }

  /**
   * Gets a paginated list of products that belong to your organization
   * @param {[Object]} params - Search parameters
   * @returns {Promise}
   */
  list (params: [object]): Promise<any> {
    return this.wrapper.listProducts(params);
  }

  /**
   * Gets a single product object
   * @param {string} id
   * @returns {Promise}
   */
  retrieve (id: string): Promise<any> {
    return this.wrapper.retrieveProduct(id);
  }

  /**
   * Updates a product
   * @param {string} id
   * @param {Object} data
   * @returns {Promise}
   */
  update (id: string, data: object): Promise<any> {
    return this.wrapper.updateProduct(id, data);
  }

  /**
   * Permanently removes a product from your organization.
   * @param {string} id
   * @returns {Promise}
   */
  del (id: string): Promise<any> {
    return this.wrapper.removeProduct(id);
  }

  /**
   * Searches product keys by criteria
   * @param {string} criteria
   * @returns {Promise}
   */
  keys (criteria: string): Promise<any> {
    return this.wrapper.keys(criteria);
  }

  /**
   * Searches products units by criteria
   * @param {string} criteria
   * @returns {Promise}
   */
  units (criteria: string): Promise<any> {
    return this.wrapper.units(criteria);
  }
}
