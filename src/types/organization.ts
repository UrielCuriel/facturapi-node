import { Address } from "./address";
import { Base } from "./base";
import { enums } from "./enums";

export type Organization = {
  is_production_ready: boolean;
  pending_steps: Pendingstep[];
  legal: Legal;
  customization: Customization;
  certificate: Certificate;
} & Base;

export type Certificate = {
  expires_at?: any;
  updated_at?: any;
  has_certificate: boolean;
};

export type Customization = {
  has_logo: boolean;
  color: string;
  pdf_extra: Pdfextra;
};

export type Pdfextra = {
  codes: boolean;
  product_key: boolean;
};

export type Legal = {
  name: string;
  legal_name: string;
  tax_id: string;
  tax_system: enums.TaxSystem|string;
  address: Address;
  phone?: string;
  website?: string;
};

export type Pendingstep = {
  type: string;
  description: string;
};

export type Keys = {
  live_key: string;
  test_key: string;
};
