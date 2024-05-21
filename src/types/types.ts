
export type fetchedData = {
  docs: (OneBook | oneAuthor)[];
  numFound: number;
  numFoundExact: boolean;
  num_found: number;
  offset: any;
  q: string;
  start: number;
};



export type oneAuthor = {
  key: string;
  name: string;
  top_work: string;
  type: string;
  work_count: number;
  birth_date?: string;
  death_date?: string;
  top_subjects: string[];

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
  place: string[];
  title: string;
  subject: string[];
  format: string[];
  number_of_pages_median: number
};

export type GlobalSearchState = {
  authors: oneAuthor[];
  books: OneBook[];
  loading?: boolean | null;
};


export type GlobalMyPageState = {
  myFavorites: {
    favoriteBooks: OneBook[];
    favoriteAuthors: oneAuthor[];
  };
  myReadBooksInfo: OneReadBook[];
};

export type OneReadBook = {
  key: string;
  title: string;
  pages: number;
  likes: "inte min grej"|"helt ok"|"bästa jag läst"|"";
  review: string;
};

