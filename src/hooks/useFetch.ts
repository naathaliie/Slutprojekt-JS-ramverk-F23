import axios from "axios";
import { useEffect, useState } from "react";
import { fetchedData } from "../types/types";
import { useDispatch } from "react-redux";
import {
  setLoading,
  setSearchResult,
} from "../state/searchResults/searchResultsSlice";



export const useFetch = (searchTerm: string) => {
  const [foundBookData, setFoundBookData] = useState<fetchedData | null>(null);
  const [foundAuthorData, setFoundAuthorData] = useState<fetchedData | null>(
    null
  );

const bookAPI = `https://openlibrary.org/search.json?title=${searchTerm}&limit=10`;
const authorAPI = `https://openlibrary.org/search/authors.json?q=${searchTerm}&limit=10`;


  const dispatch = useDispatch();

  useEffect(() => {
    let ignore = false;
    dispatch(setLoading(true)); // Ger Loadern ett nytt state (true)

    const fetchData = async () => {

      try {
        const authorResponse = await axios.get(authorAPI);
        const authorData = authorResponse.data;

        const bookResponse = await axios.get(bookAPI);
        const bookData = bookResponse.data;

        if (!ignore) {

          setFoundBookData(bookData);
          setFoundAuthorData(authorData);

          dispatch(
            setSearchResult({
              authors: authorData.docs,
              books: bookData.docs,
            })
          );

          dispatch(setLoading(false)); // Ger Loadern ett nytt state (false)
        }
      } catch (error) {
        throw new Error("Blabla not working");
      }
    };

    //Säkerställer att fetchData inte körs om searchTerm är tom. Förhindrar även den första default körningen som useEffect annars gör
    if (searchTerm !== "") {
      fetchData();
    }

    //När komponenten avmonteras
    return () => {
      ignore = true;
    };
    //Dependenciesarrayen, lyssnar efter ändringar på searchTerm
  }, [searchTerm]);

  return { foundBookData, foundAuthorData };
};


