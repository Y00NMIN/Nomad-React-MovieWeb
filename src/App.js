import Button from "./Button";
import styles from "./App.module.css";

import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);
  console.log(movies);
  return (
    <div className="App">
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div className={styles.Movie_list}>
          {movies.map((movie) => (
            <div key={movie.id} className={styles.Movie_Poster}>
              <img src={movie.medium_cover_image} />
              <div className={styles.Movie_Poster_desc}>
                <h2>{movie.title}</h2>
                <p>{movie.summary}</p>
                <ul>
                  {movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default App;
