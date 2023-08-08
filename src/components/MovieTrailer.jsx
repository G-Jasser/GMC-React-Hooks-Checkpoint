import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

const MovieTrailer = () => {
  const movieID = useParams()
  const [listOfMovies] = useOutletContext()

  const movie = listOfMovies.filter(function (film) {
    return film.path == movieID.movieID;
})
  const [movieDetails] = movie

  return (
    
      ( movieDetails ?
        ( 
        <div className='movie-adder'>
          <div className='col-6'>
            <h1>{movieDetails.title}</h1>
            <br />
            <h3>Trailer:</h3>
            <iframe width="560" height="315" 
            src={movieDetails.trailer}
            title="YouTube video player" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen></iframe>
            <br />
            <p>{movieDetails.description}</p>

          </div>
        </div>) : <></>
      )
  )
}

export default MovieTrailer