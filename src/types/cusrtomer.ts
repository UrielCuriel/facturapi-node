import { Address } from "./address";
import { Base } from "./base";

export type Customer = {
  legal_name: string;
  tax_id: string;
  email: string;
  phone: string;
  address?: Partial<Address>;
} & Base;
