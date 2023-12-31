import { Row } from "./Row";
import { Banner } from "./Banner";
import { requests } from "./request";
import "./App.css";
import { Nav } from "./Nav";

const App = () => {
  return (
    <div className="App">
      <Banner />
      <Nav />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.feactTopRated} />
      <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.feactRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.feactDocumentMovies} />
    </div>
  );
};

export default App;
