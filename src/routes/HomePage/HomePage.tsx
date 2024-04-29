import { useEffect } from "react";
import "./HomePage.scss";
import axios from "axios";

function HomePage() {
  //The API to get all the books (/books)
  const API_url =
    "https://openlibrary.org/search.json?q=/the-lord-of-the-rings";
  const SWAPI = "https://swapi.py4e.com/api/people/";

  //get API
  useEffect(() => {
    let ignore = false; // Variable to handle component unmounting
    console.log("Fetching data...");

    const fetchAPI = async () => {
      try {
        axios.get(API_url).then((response) => {
          const data = response.data;
          console.log("data received: ", data);
        });
      } catch (error) {
        throw new Error("Blabla det fungerar inte");
      }
    };

    fetchAPI();

    return () => {
      ignore = true; // Signal that the component has been unmounted.
    };
  }, []); //Can be left empty IF useEffect is meant to run only once, for example when fetching from an API once.

  return (
    <div className="HomePage">
      <h1>THE LIBRARY, HomePage</h1>
    </div>
  );
}

export default HomePage;
