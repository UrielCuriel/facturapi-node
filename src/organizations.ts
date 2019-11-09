import Wrapper from "./wrapper";
import { Organization, Legal, Customization, Keys } from "./types/organization";
import { Query, QueryResponse } from "./types/query";

class Organizations {
  constructor (public wrapper: Wrapper) {}

  create (data: { name: string }): Promise<Organization> {
    return this.wrapper.createOrganization(data);
  }

  list (params: Query): Promise<QueryResponse<Organization>> {
    return this.wrapper.listOrganizations(params);
  }

  retrieve (id: string): Promise<Organization> {
    return this.wrapper.retrieveOrganization(id);
  }

  updateLegal (id: string, data: Legal): Promise<Organization> {
    return this.wrapper.updateOrganizationLegal(id, data);
  }

  updateCustomization (id: string, data: Customization): Promise<Organization> {
    return this.wrapper.updateOrganizationCustomization(id, data);
  }

  uploadLogo (id: string, file: any): Promise<Organization> {
    return this.wrapper.uploadOrganizationLogo(id, file);
  }
  uploadCertificate (
    id: string,
    cerFile: any,
    keyFile: any,
    password: any
  ): Promise<Organization> {
    return this.wrapper.uploadOrganizationCertificate(
      id,
      cerFile,
      keyFile,
      password
    );
  }

  del (id: string): Promise<Organization> {
    return this.wrapper.removeOrganization(id);
  }

  getApiKeys (id: string): Promise<Keys> {
    return this.wrapper.getOrganizationApiKeys(id);
  }
}

export default Organizations;
