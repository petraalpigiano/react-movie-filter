// Dovrete utilizzare lo stato e useEffect per gestire il filtraggio dinamico.
// Per oggi diamo priorità alla logica e alla gestione dello stato. Una volta funzionante, possiamo pensare allo stile!
// Note
// Il filtro deve funzionare dinamicamente quando l'utente seleziona un genere dalla select.
// Se non viene selezionato alcun genere, devono essere mostrati tutti i film.
import movies from "./data/movies";
import { useEffect, useState } from "react";

export default function App() {
  const [option, setOption] = useState("");
  useEffect(() => {
    const selectedGenre = movies.filter((currentMovie) => {
      return currentMovie.genre === option;
    });
    console.log(selectedGenre);
  }, [option]);
  return (
    <>
      <div className="container">
        <select
          value={option}
          onChange={function (event) {
            setOption(event.target.value);
          }}
          className="form-select"
          aria-label="Default select example"
        >
          <option value="">Filtra per genere</option>
          {/* per iterare i generi userei un filter, perche non deve includere quelli doppi */}
          {movies.map(function (currentMovie, index, array) {
            return (
              <option key={index} value={currentMovie.genre}>
                {currentMovie.genre}
              </option>
            );

            // FILTRO PER NON AVERE GENERI DUPLICATI
            // return (
            //  // !array.includes(currentMovie.genre) && (
            //     <option key={index} value={currentMovie.genre}>
            //       {currentMovie.genre}
            //     </option>
            //   )
            // );
          })}
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
