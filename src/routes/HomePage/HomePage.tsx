import "./HomePage.scss";
import { useFetch } from "../../hooks/useFetch";

function HomePage() {
  const fetchedData = useFetch<any>(
    "https://openlibrary.org/search.json?q=/the"
  );

  return (
    <div className="HomePage">
      <h1>THE LIBRARY, HomePage</h1>
    </div>
  );
}

export default HomePage;
