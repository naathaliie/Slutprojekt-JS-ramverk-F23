
export type fetchedData = {
  docs: (OneBook | oneAuthor)[];
  numFound: number;
  numFoundExact: boolean;
  num_found: number;
  offset: any;
  q: string;
  start: number;
};

/*****SearchContext*****/

export type oneAuthor = {
  key: string;
  name: string;
  top_work: string;
  type: string;
  work_count: number;
};

export type OneBook = {
  author_facet: string[];
  author_name: string,
  author_key: string[];
  cover_edition_key: string;
  cover_i: number;
  first_sentence: string[];
  language: string[];
  key: string;
  isbn: string[];
  person: string[];
  title: string;
};

export type GlobalSearchState = {
  authors: oneAuthor[];
  books: OneBook[];
};


/*****Lagt till i searchResultSlice, ta bort här?*****/
export const initialSearchState: GlobalSearchState = {
  authors: [],
  books: [],
};

export type GlobalMyPageState = {
  myFavorites: {
    favoriteBooks: OneBook[];
    favoriteAuthors: oneAuthor[];
  };
  myReadBooksInfo: OneReadBook[];
};

export type OneReadBook = {
  title: string;
  pages: number;
  likes: number /* ?!?!?!?!? */;
  review: string;
};

