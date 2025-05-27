// Dovrete utilizzare lo stato e useEffect per gestire il filtraggio dinamico.
// Per oggi diamo priorità alla logica e alla gestione dello stato. Una volta funzionante, possiamo pensare allo stile!
// Note
// Il filtro deve funzionare dinamicamente quando l'utente seleziona un genere dalla select.
// Se non viene selezionato alcun genere, devono essere mostrati tutti i film.
import movies from "./data/movies";

export default function App() {
  return (
    <>
      <div className="container">
        <select className="form-select" aria-label="Default select example">
          <option>Filtra per genere</option>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </select>
        {movies.map(function (currentMovie, index) {
          return (
            <div className="card text-center" key={index}>
              <div className="card-body">
                <h5 className="card-title">{currentMovie.title}</h5>
                <p className="card-text">{currentMovie.genre}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
