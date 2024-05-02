
/*****SearchBar*****/
export type fetchedData = {
  docs: [];
  numFound: number;
  numFoundExact: boolean;
  num_found: number;
  offset: any;
  q: string;
  start: number;
};


/*****SearchContext*****/

export type oneAuthor = {
    already_read_count: number,
    author_alternative_name: string[],
    author_facet: string[],
    author_key: string[],
    author_name: string[],
    contributor: string[],
    cover_edition_key: string,
    cover_i: number,
    currently_reading_count: number,
    ddc: string[],
    ddc_sort: string,
    ebook_access: string,
    ebook_count_i: number,
    edition_count: number,
    edition_key: string[],
    first_publish_year: number,
    first_sentence: string[],
    format: string[],
    has_fulltext: boolean,
    ia: string[],
    ia_box_id: string[],
    ia_collection: string[],
    ia_collection_s: string,
    id_amazon: string[],
    id_better_world_books: string[],
    id_goodreads: string[],
    id_librarything: string[],
    isbn: string[],
    key: string,
    language: string[],
    last_modified_i: number,
    lcc: string[],
    lcc_sort: string,
    lccn: string[],
    lending_edition_s: string,
    lending_identifier_s: string,
    number_of_pages_median: number,
    oclc: string[],
    osp_count: number,
    place: string[],
    place_facet: string[],
    place_key: string[],
    printdisabled_s: string,
    public_scan_b: boolean,
    publish_date: string[],
    publish_place: string[],
    publish_year: number[],
    publisher: string[],
    publisher_facet: string[],
    ratings_average: number,
    ratings_count: number,
    ratings_count_1: number,
    ratings_count_2: number,
    ratings_count_3: number,
    ratings_count_4: number,
    ratings_count_5: number,
    ratings_sortable: number,
    readinglog_count: number,
    seed: string[],
    subject: string[],
    subject_facet: string[],
    subject_key: string[],
    title: string,
    title_sort: string,
    title_suggest: string,
    type: string,
    want_to_read_count: number,
    _version_: number,
};

export type OneBook = {
    already_read_count: number;
    author_alternative_name: string[];
    author_facet: string[];
    author_key: string[];
    author_name: string[];
    contributor: string[];
    cover_edition_key: string;
    cover_i: number;
    currently_reading_count: number;
    ddc: string[];
    ddc_sort: string;
    ebook_access: string;
    ebook_count_i: number;
    edition_count: number;
    edition_key: string[];
    first_publish_year: number;
    first_sentence: string[];
    format: string[];
    has_fulltext: boolean;
    ia: string[];
    ia_box_id: string[];
    ia_collection: string[];
    ia_collection_s: string;
    id_alibris_id: string[];
    id_amazon: string[];
    id_amazon_ca_asin: string[];
    id_amazon_co_uk_asin: string[];
    id_amazon_de_asin: string[];
    id_amazon_it_asin: string[];
    id_bodleian__oxford_university: string[];
    id_canadian_national_library_archive: string[];
    id_depósito_legal: string[];
    id_goodreads: string[];
    id_google: string[];
    id_librarything: string[];
    id_overdrive: string[];
    id_paperback_swap: string[];
    id_wikidata: string[];
    isbn: string[];
    key: string;
    language: string[];
    last_modified_i: number;
    lcc: string[];
    lcc_sort: string;
    lccn: string[];
    lending_edition_s: string;
    lending_identifier_s: string;
    number_of_pages_median: number;
    oclc: string[];
    osp_count: number;
    person: string[];
    person_facet: string[];
    person_key: string[];
    place: string[];
    place_facet: string[];
    place_key: string[];
    printdisabled_s: string;
    public_scan_b: boolean;
    publish_date: string[];
    publish_place: string[];
    publish_year: number[];
    publisher: string[];
    publisher_facet: string[];
    ratings_average: number;
    ratings_count: number;
    ratings_count_1: number;
    ratings_count_2: number;
    ratings_count_3: number;
    ratings_count_4: number;
    ratings_count_5: number;
    ratings_sortable: number;
    readinglog_count: number;
    seed: string[];
    subject: string[];
    subject_facet: string[];
    subject_key: string[];
    title: string;
    title_sort: string;
    title_suggest: string;
    type: string;
    want_to_read_count: number;
    _version_: number;
  };

  export type GlobalSearchState = {
    authors: oneAuthor[];
    books: OneBook[];
  };

  export const initialSearchState: GlobalSearchState = {
    authors:[],
    books: [],
  };
  
