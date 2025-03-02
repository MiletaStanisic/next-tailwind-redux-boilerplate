export interface QueryParams {
  [key: string]:
    | string
    | number
    | boolean
    | Array<string | number>
    | undefined
    | unknown;
}

export interface Meta {
  limit: number;
  offset: number;
  total: number;
}

export interface Paginated<T> {
  result: T;
  meta: Meta;
}

export interface APIError extends Error {
  status: number;
  message: string;
}
