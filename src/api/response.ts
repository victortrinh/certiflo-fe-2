export type Data = {
  isError: boolean;
};

export type ErrorData = Data & {
  response: string;
};
