import Wrapper from "./wrapper";
import { Product } from "./types/product";
import { Query, QueryResponse } from "./types/query";

class Products {
  constructor (public wrapper: Wrapper) {}

  create (data: Partial<Product>): Promise<Product> {
    return this.wrapper.createProduct(data);
  }

  list (params: Query): Promise<QueryResponse<Product>> {
    return this.wrapper.listProducts(params);
  }

  retrieve (id: string): Promise<Product> {
    return this.wrapper.retrieveProduct(id);
  }

  update (id: string, data: Partial<Product>): Promise<Product> {
    return this.wrapper.updateProduct(id, data);
  }

  del (id: string): Promise<Product> {
    return this.wrapper.removeProduct(id);
  }

  keys (criteria: string): Promise<any> {
    return this.wrapper.keys(criteria);
  }

  units (criteria: string): Promise<any> {
    return this.wrapper.units(criteria);
  }
}

export default Products;
