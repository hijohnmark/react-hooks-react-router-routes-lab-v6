import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from 'react-router-dom'

function Movie() {
  
  const [movie, setMovie] = useState({})
  const params = useParams()
  const movieId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(r => r.json())
    .then(data => setMovie(data))
    .catch(e => console.error(e))
  }, [movieId])

  if(!movie.title){
    return <h1>Loading...</h1>
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time} minutes</p>
        {movie.genres.map(genre => {
          return (
            <span>{genre}</span>
          )
        })}
      </main>
    </>
  );
};

export default Movie;
