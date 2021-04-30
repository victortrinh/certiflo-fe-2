import { BookData, ErrorData } from '../response';

import { getAxiosClient } from '../axiosClientFactory';

const client = getAxiosClient();

export type Book = {
  Id: string;
  Name: string;
  Price: number;
  Category: string;
  Author: string;
};

const baseAuthURL = '/api/books';

export class BooksApi {
  async get() {
    return this.perform('get', `${baseAuthURL}`);
  }

  async perform(method: any, resource: any, data: Book | null = null) {
    return client({
      method,
      url: resource,
      data,
    }).then(
      (resp: any): BookData => ({ isError: false, response: resp.data }),
      (error: any): ErrorData => ({
        isError: true,
        response: error.response?.data?.message ?? 'Error with back-end',
      }),
    );
  }
}

export const booksApi = new BooksApi();
