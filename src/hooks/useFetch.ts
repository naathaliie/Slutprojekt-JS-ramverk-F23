import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = <T>(API:string) => {
//Save and set the Data given from fetchData()
const [apiData, setApiData] = useState<T[]>([]);


  useEffect(() => {
    let ignore = false; // Variable to handle component unmounting
    console.log("Fetching data...");

    const fetchData = async () => {
      try {
        const response = await axios.get(API);
        const data = response.data;
        setApiData(data);
        console.log("data received: ", data);
      } catch (error) {
        throw new Error("Blabla det fungerar inte");
      }
    };

    fetchData();

    return () => {
      ignore = true; // Signal that the component has been unmounted.
    };
  }, [API]); //Can be left empty IF useEffect is meant to run only once, for example when fetching from an API once.

  return apiData;
};


{/* const fetchedData = useFetch<T>("https://openlibrary.org/search.json?q=/the-lord-of-the-rings");
 */}
