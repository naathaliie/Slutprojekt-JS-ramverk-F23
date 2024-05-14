import "./HomePage.scss";
import library from "../../assets/library.jpg";
import oneBook from "../../assets/enBok.jpg";
import catBook from "../../assets/catBook.jpg";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="info-box">
        <h1>Mitt Bibliotek</h1>
        <p>
          Utforska världar, förvärva kunskap - Välkommen till ditt bibliotek
          utan gränser!
        </p>
      </div>
      <div className="img-box">
        <img src={library} alt="library" />
        <img src={catBook} alt="library" />
        <img src={oneBook} alt="library" />
      </div>
    </div>
  );
}

export default HomePage;
