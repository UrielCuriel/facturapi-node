import Wrapper from "./wrapper";
import { Customer } from "./types/cusrtomer";
import { Query, QueryResponse } from "./types/query";

class Customers {
  constructor (public wrapper: Wrapper) {}
  create (data: Customer): Promise<Customer> {
    return this.wrapper.createCustomer(data);
  }
  list (params: Query): Promise<QueryResponse<Customer>> {
    return this.wrapper.listCustomers(params);
  }
  retrieve (id: string): Promise<Customer> {
    return this.wrapper.retrieveCustomer(id);
  }
  update (id: string, data: Customers): Promise<Customer> {
    return this.wrapper.updateCustomer(id, data);
  }
  del (id: string): Promise<Customer> {
    return this.wrapper.removeCustomer(id);
  }
}

export default Customers;
