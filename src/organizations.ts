import { Wrapper } from "./wrapper";

export class Organizations {
  public wrapper: Wrapper;

  /**
   * @param {Wrapper} wrapper
   */
  constructor (wrapper: Wrapper) {
    this.wrapper = wrapper;
  }

  /**
   * Creates a new organization for your account
   * @param {Object} data
   * @returns {Promise}
   */
  create (data: any) {
    return this.wrapper.createOrganization(data);
  }

  /**
   * Gets a paginated list of organizations that belong to your account
   * @param {[Object]} params - Search parameters
   * @returns {Promise}
   */
  list (params: {}) {
    return this.wrapper.listOrganizations(params);
  }

  /**
   * Gets a single organization object
   * @param {string} id
   * @returns {Promise}
   */
  retrieve (id: string) {
    return this.wrapper.retrieveOrganization(id);
  }

  /**
   * Updates the organization's legal information
   * @param {string} id
   * @param {Object} data
   * @returns {Promise}
   */
  updateLegal (id: string, data: any) {
    return this.wrapper.updateOrganizationLegal(id, data);
  }

  /**
   * Updates the organization's customization information
   * @param {string} id
   * @param {Object} data
   * @returns {Promise}
   */
  updateCustomization (id: string, data: any) {
    return this.wrapper.updateOrganizationCustomization(id, data);
  }

  /**
   * Uploads the organization's logo
   * @param {string} id
   * @param {ReadableStream} file
   * @returns {Promise}
   */
  uploadLogo (id: string, file: any) {
    return this.wrapper.uploadOrganizationLogo(id, file);
  }

  /**
   * Uploads the organization's certificate (CSD)
   * @param {string} id
   * @param {ReadableStream} cerFile
   * @param {ReadableStream} keyFile
   * @param {string} password
   * @returns {Promise}
   */
  uploadCertificate (id: string, cerFile: any, keyFile: any, password: any) {
    return this.wrapper.uploadOrganizationCertificate(
      id,
      cerFile,
      keyFile,
      password
    );
  }

  /**
   * Permanently removes a organization from your account.
   * @param {string} id
   * @returns {Promise}
   */
  del (id: string) {
    return this.wrapper.removeOrganization(id);
  }

  /**
   * Gets the api keys for an organization
   * @param {string} id
   * @returns {Promise}
   */
  getApiKeys (id: string) {
    return this.wrapper.getOrganizationApiKeys(id);
  }
}
