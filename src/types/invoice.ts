import { Base } from "./base";
import { Customer } from "./cusrtomer";
import { Product } from "./product";
import { enums } from "./enums";

export type Invoice = {
  status?: string;
  customer: string | Partial<Customer>;
  payment_form: enums.PaymentForm | string;
  total: number;
  uuid: string;
  folio_number: number;
  series: string;
  related?: string[];
  relation?: enums.InvoiceRelation;
  currency: string;
  exchange: number;
  cancellation_status?: enums.cancelationStatus;
  items: Item[];
} & Base;

type Item = {
  quantity: number;
  discount: number;
  product: string | Product;
};
