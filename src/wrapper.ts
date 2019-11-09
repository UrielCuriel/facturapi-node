import axios from "axios";
import constants from "./constants";
const FormData = require("form-data");

axios.defaults.baseURL = constants.BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";
var responseInterceptor = function (response: { data: any }) {
  return response.data;
};
var errorInterceptor = function (error: {
  response: { data: { message: string | undefined } };
}) {
  return Promise.reject(new Error(error.response.data.message));
};

function encodeStringToBase64 (text: string | ArrayBuffer | SharedArrayBuffer) {
  // Make sure text is a string
  text = text.toString();
  return Buffer.from(text).toString("base64");
}
class Wrapper {
  public client: any;
  public t: any;

  constructor (apiKey: string) {
    this.client = axios.create();
    this.client.interceptors.response.use(
      responseInterceptor,
      errorInterceptor
    );
    this.t = 23;
    this.client.defaults.headers.common["Authorization"] =
      "Basic " + encodeStringToBase64(apiKey + ":");
  }

  listCustomers (params: {}) {
    if (!params) params = {};
    return this.client.get("/customers", { params: params });
  }

  /**
   * Gets a single customer object
   * @param {string} id
   */
  retrieveCustomer (id: string) {
    if (!id) return Promise.reject(new Error("id is required"));
    return this.client.get("/customers/" + id);
  }

  /**
   * Creates a new customer in your organization
   * @param {Object} data
   */
  createCustomer (data: any) {
    return this.client.post("/customers", data);
  }

  /**
   * Updates a customer
   * @param {string} id
   * @param {Object} data
   */
  updateCustomer (id: string, data: any) {
    return this.client.put("/customers/" + id, data);
  }

  /**
   * Permanently removes a customer from your organization.
   * @param {string} id
   */
  removeCustomer (id: string) {
    return this.client.delete("/customers/" + id);
  }

  /**
   * Gets a paginated list of products that belong to your organization
   * @param {Object} params
   */
  listProducts (params: {}) {
    if (!params) params = {};
    return this.client.get("/products", { params: params });
  }

  /**
   * Gets a single product object
   * @param {string} id
   */
  retrieveProduct (id: string) {
    if (!id) return Promise.reject(new Error("id is required"));
    return this.client.get("/products/" + id);
  }

  /**
   * Creates a new product in your organization
   * @param {Object} data
   */
  createProduct (data: any) {
    return this.client.post("/products", data);
  }

  /**
   * Updates a product
   * @param {string} id
   * @param {object} data
   */
  updateProduct (id: string, data: any) {
    return this.client.put("/products/" + id, data);
  }

  /**
   * Permanently removes a product from your organization
   * @param {string} id
   */
  removeProduct (id: string) {
    return this.client.delete("/products/" + id);
  }

  /**
   * Searches product keys by criteria "q"
   * @param {string} q
   */
  keys (q: any) {
    return this.client.get("/products/keys", { q: q });
  }

  /**
   * Searches product units by criteria "q"
   * @param {string} q
   */
  units (q: any) {
    return this.client.get("/products/units", { q: q });
  }

  /**
   * Gets a paginated list of invoices created by your organization
   * @param {Object} params
   */
  listInvoices (params: {}) {
    if (!params) params = {};
    return this.client.get("/invoices", { params: params });
  }

  /**
   * Gets a single invoice object
   * @param {string} id
   * @returns {Promise<Object>} Invoice object
   */
  retrieveInvoice (id: string) {
    if (!id) return Promise.reject(new Error("id is required"));
    return this.client.get("/invoices/" + id);
  }

  /**
   * Creates a new valid invoice (CFDI).
   * @param {Object} data
   */
  createInvoice (data: any) {
    return this.client.post("/invoices", data);
  }

  /**
   * Cancels an invoice. The invoice will not be valid anymore and will change its status to canceled.
   * @param {string} id
   */
  cancelInvoice (id: string) {
    return this.client.delete("/invoices/" + id);
  }

  /**
   * Sends the invoice to the customer's email
   * @param {string} id Invoice Id
   * @param {Object} data
   * @param {string} data.email Email address to send the invoice to
   */
  sendInvoiceByEmail (id: string, data: any) {
    return this.client.post("/invoices/" + id + "/email", data);
  }

  /**
   * Downloads the specified invoice in PDF format
   * @param {string} id Invoice Id
   * @returns {Promise<ReadStream>} PDF file in a stream
   */
  downloadPdf (id: string) {
    return this.client.get("/invoices/" + id + "/pdf", {
      responseType: "stream"
    });
  }

  /**
   * Downloads the specified invoice in XML format
   * @param {string} id Invoice Id
   * @returns {Promise<ReadStream>} XML file in a stream
   */
  downloadXml (id: string) {
    return this.client.get("/invoices/" + id + "/xml", {
      responseType: "stream"
    });
  }

  /**
   * Downloads the specified invoice in a ZIP package containing both PDF and XML files
   * @param {string} id Invoice Id
   * @returns {Promise<ReadStream>} ZIP file in a stream
   */
  downloadZip (id: string) {
    return this.client.get("/invoices/" + id + "/zip", {
      responseType: "stream"
    });
  }

  /**
   * Creates a new organization in your account
   * @param {Object} data
   */
  createOrganization (data: any) {
    return this.client.post("/organizations", data);
  }

  /**
   * Gets a paginated list of organizations that belong to your account
   * @param {Object} params
   */
  listOrganizations (params: {}) {
    if (!params) params = {};
    return this.client.get("/organizations", { params: params });
  }

  /**
   * Gets a single organization object
   * @param {string} id
   */
  retrieveOrganization (id: string) {
    if (!id) return Promise.reject(new Error("id is required"));
    return this.client.get("/organizations/" + id);
  }

  /**
   * Gets the api keys for an organization
   * @param {string} id
   */
  getOrganizationApiKeys (id: string) {
    if (!id) return Promise.reject(new Error("id is required"));
    return this.client.get("/organizations/" + id + "/apikeys");
  }

  /**
   * Permanently removes an organization from your account.
   * @param {string} id
   */
  removeOrganization (id: string) {
    if (!id) return Promise.reject(new Error("id is required"));
    return this.client.delete("/organizations/" + id);
  }

  /**
   * Updates the organization's legal information
   * @param {string} id
   * @param {object} data
   */
  updateOrganizationLegal (id: string, data: any) {
    if (!id) return Promise.reject(new Error("id is required"));
    return this.client.put("/organizations/" + id + "/legal", data);
  }

  /**
   * Updates the organization's customization information
   * @param {string} id
   * @param {object} data
   */
  updateOrganizationCustomization (id: string, data: any) {
    return this.client.put("/organizations/" + id + "/customization", data);
  }

  /**
   * Uploads the organization's logo
   * @param {string} id
   * @param {ReadableStream} file
   */
  uploadOrganizationLogo (id: string, file: any) {
    const formData = new FormData();
    formData.append("file", file);
    return this.client.put("/organizations/" + id + "/logo", formData, {
      headers: formData.getHeaders()
    });
  }

  /**
   * Uploads the organization's certificate (CSD)
   * @param {string} id
   * @param {ReadableStream} cerFile
   * @param {ReadableStream} keyFile
   * @param {string} password
   */
  uploadOrganizationCertificate (
    id: string,
    cerFile: any,
    keyFile: any,
    password: any
  ) {
    const formData = new FormData();
    formData.append("cer", cerFile);
    formData.append("key", keyFile);
    formData.append("password", password);
    return this.client.put("/organizations/" + id + "/certificate", formData, {
      headers: formData.getHeaders()
    });
  }
}

export default Wrapper;
