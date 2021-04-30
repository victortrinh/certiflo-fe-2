import { Book } from './endpoints/book';

type Data = {
  isError: boolean;
};

export type ErrorData = Data & {
  response: string;
};

export type BookData = Data & {
  response: Book[];
};
