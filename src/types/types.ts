export type oneBook = {};

export type oneAuthor = {
  num_found: number;
  start: number;
  numFoundExact: boolean;
  docs: [];
};

export type fetchedData = {
  docs: [];
  numFound: number;
  numFoundExact: boolean;
  num_found: number;
  offset: any;
  q: string;
  start: number;
};
