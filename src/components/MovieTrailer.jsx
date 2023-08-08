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
          <div className='col-12'>
            <h1> Hello: {movieDetails.title} </h1>
          </div>
        </div>) : <></>
      )
  )
}

export default MovieTrailer