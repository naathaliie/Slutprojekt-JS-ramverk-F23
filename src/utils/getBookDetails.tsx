import { OneBook } from "../types/types";
import noImg from "../assets/noImg.png";
type TheBookDetails = {
  key: string;
  cover_i?: string;
  title?: string;
  author?: string;
  first_sentence?: string;
  persons?: string;
  place?: string;
  language?: string;
  genre?: string;
  numb_of_pages?: number | string;
};

const getBookDetails = (abook: OneBook) => {
  //Skapar upp ett objekt med det som skall renderas. Key finns alltid och sätts till i början
  const bookDetails: TheBookDetails = { key: abook.key };

  bookDetails.cover_i = abook.cover_i
    ? `https://covers.openlibrary.org/b/id/${abook.cover_i}-M.jpg`
    : noImg;

  bookDetails.title = abook.title ? abook.title : "-";

  bookDetails.author = abook.author_name ? abook.author_name : "-";

  bookDetails.first_sentence = abook.first_sentence
    ? abook.first_sentence[0]
    : "-";

  bookDetails.persons = abook.person ? abook.person.join(", ") : "-";

  bookDetails.place = abook.place ? abook.place.join(", ") : "-";

  bookDetails.language = abook.language ? abook.language.join(", ") : "-";

  bookDetails.genre = abook.subject
    ? abook.subject.slice(0, 4).join(", ")
    : "-";

  bookDetails.numb_of_pages = abook.number_of_pages_median
    ? abook.number_of_pages_median
    : "-";

  return bookDetails;
};

export default getBookDetails;
