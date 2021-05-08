import { Data, ErrorData } from '@/api/response';

import { getAxiosClient } from '@/api/axios-client-factory';

export type ModelData = Data & {
  response: any;
};

const client = getAxiosClient();

export class GenericApi<M extends ModelData, Model> {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get() {
    return this.perform('get', `${this.baseUrl}/all`);
  }

  async perform(method: any, resource: any, data: Model | null = null) {
    return client({
      method,
      url: resource,
      data,
    }).then(
      (resp: any): ModelData => ({ isError: false, response: resp.data } as M),
      (error: any): ErrorData => ({
        isError: true,
        response: error.response?.data?.message ?? 'Error with back-end',
      }),
    );
  }
}
