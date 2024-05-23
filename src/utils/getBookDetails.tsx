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
  const bookDetails: Partial<TheBookDetails> = { key: abook.key };

  if (abook.cover_i) {
    bookDetails.cover_i = `https://covers.openlibrary.org/b/id/${abook.cover_i}-M.jpg`;
  } else {
    bookDetails.cover_i = `${noImg}`;
  }

  if (abook.title) {
    bookDetails.title = abook.title;
  } else {
    bookDetails.title = "-";
  }

  if (abook.author_name) {
    bookDetails.author = abook.author_name;
  } else {
    bookDetails.author = "-";
  }

  if (abook.first_sentence) {
    bookDetails.first_sentence = abook.first_sentence[0];
  } else {
    bookDetails.first_sentence = "-";
  }

  if (abook.person) {
    bookDetails.persons = abook.person.join(", ");
  } else {
    bookDetails.persons = "-";
  }

  if (abook.place) {
    bookDetails.place = abook.place.join(", ");
  } else {
    bookDetails.place = "-";
  }

  if (abook.language) {
    bookDetails.language = abook.language.join(", ");
  } else {
    bookDetails.place = "-";
  }

  if (abook.subject) {
    bookDetails.genre = abook.subject.slice(0, 4).join(", ");
  } else {
    bookDetails.genre = "-";
  }

  if (abook.number_of_pages_median) {
    bookDetails.numb_of_pages = abook.number_of_pages_median;
  } else {
    bookDetails.numb_of_pages = "-";
  }

  return bookDetails;
};

export default getBookDetails;
