import { enums } from "./enums";
import { Wrapper } from "./wrapper";
import { Customers } from "./customers";
import { Products } from "./products";
import { Organizations } from "./organizations";
import { Invoices } from "./invoices";

/**
 * Get an instance of the Facturapi library
 * @class
 * @param {string} apiKey Test or Live key.
 * @returns {Facturapi} Instance of this library
 */
export class Facturapi {
  public customers: Customers;
  public products: Products;
  public invoices: Invoices;
  public organizations: Organizations;

  static get TaxType() {
    return enums.TaxType;
  }
  static get PaymentForm() {
    return enums.PaymentForm;
  }
  static get PaymentMethod() {
    return enums.PaymentMethod;
  }
  static get InvoiceType() {
    return enums.InvoiceType;
  }
  static get InvoiceUse() {
    return enums.InvoiceUse;
  }
  static get InvoiceRelation() {
    return enums.InvoiceRelation;
  }
  static get TaxSystem() {
    return enums.TaxSystem;
  }
  constructor(apiKey: string) {
    const wrapper = new Wrapper(apiKey);
    this.customers = new Customers(wrapper);
    this.products = new Products(wrapper);
    this.invoices = new Invoices(wrapper);
    this.organizations = new Organizations(wrapper);
  }
}

export default { Facturapi };
