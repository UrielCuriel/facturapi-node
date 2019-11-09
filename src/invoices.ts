import Wrapper from "./wrapper";
import { ReadStream } from "fs";
import { Invoice } from "./types/invoice";
import { Query, QueryResponse } from "./types/query";

class Invoices {
  constructor (public wrapper: Wrapper) {}

  create (data: Partial<Invoice>): Promise<Invoice> {
    return this.wrapper.createInvoice(data);
  }

  list (params: Query & { customer: string }): Promise<QueryResponse<Invoice>> {
    return this.wrapper.listInvoices(params);
  }

  retrieve (id: string): Promise<Invoice> {
    return this.wrapper.retrieveInvoice(id);
  }

  cancel (id: string): Promise<Invoice> {
    return this.wrapper.cancelInvoice(id);
  }

  sendByEmail (id: string, data: { email: string }): Promise<Invoice> {
    return this.wrapper.sendInvoiceByEmail(id, data);
  }

  downloadPdf (id: string): Promise<ReadStream> {
    return this.wrapper.downloadPdf(id);
  }

  downloadXml (id: string): Promise<ReadStream> {
    return this.wrapper.downloadXml(id);
  }

  downloadZip (id: string): Promise<ReadStream> {
    return this.wrapper.downloadZip(id);
  }
}
export default Invoices;
