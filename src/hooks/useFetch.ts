import axios from "axios";
import { useEffect, useState } from "react";
import { fetchedData } from "../types/types";
import { useDispatch } from "react-redux";
import { setSearchResult } from "../state/searchResults/searchResultsSlice";

const bookAPI = "https://openlibrary.org/search.json?title=";
const authorAPI = "https://openlibrary.org/search/authors.json?q=";


export const useFetch = (searchTerm:string) => {
  const [foundBookData, setFoundBookData] = useState<fetchedData | null>(null);
  const [foundAuthorData, setFoundAuthorData] = useState<fetchedData | null>(
    null
  ); // ÄNDRA

const dispatch = useDispatch();

useEffect(() => {
  let ignore = false;

  const fetchData = async () => {
    /*  console.log("searchTerm ändrades, du sökte på = ", searchTerm); */

    try {
      const authorResponse = await axios.get(
        `${authorAPI}${searchTerm}&limit=10`
      );
      const authorData = authorResponse.data;

      const bookResponse = await axios.get(
        `${bookAPI}${searchTerm}&limit=10`
      );
      const bookData = bookResponse.data;

      if (!ignore) {
        setFoundBookData(bookData);
        setFoundAuthorData(authorData);
        dispatch(
          setSearchResult({ authors: authorData.docs, books: bookData.docs })
        );
      }
    } catch (error) {
      throw new Error("Blabla not working");
    }
  };

  if (searchTerm !== "") {
    fetchData();
  }

  return () => {
    ignore = true;
  };
}, [searchTerm]);

  return {foundBookData, foundAuthorData};
};


{/* const fetchedData = useFetch<T>("https://openlibrary.org/search.json?q=/the-lord-of-the-rings");
 */}
