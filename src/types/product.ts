import { enums } from "./enums";
import { Base } from "./base";

export type Product = {
  description: string;
  product_key: string;
  price: number;
  sku?: string;
  unit_name?: string;
  unit_key?: string;
  tax_included?: boolean;
  taxes?: Tax[];
  local_taxes?: LocalTax[];
} & Base;

export type Tax = {
  withholding: boolean;
  type: enums.TaxType;
  rate: number;
};

export type LocalTax = {
  withholding: boolean;
  type: string;
  rate: number;
};
