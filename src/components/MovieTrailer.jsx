import React from 'react'
import Xsvg from "../assets/x-symbol.svg"
import { Link, useOutletContext, useParams } from 'react-router-dom'

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
        <div className='movie-trailer'>
          <Link to="/">
            <img src={Xsvg} alt="X" />
          </Link>
          <div className='trailer_container'>
            <h1>{movieDetails.title}</h1>
            <div className='col-6'>
              <h3>Trailer:</h3>
              <iframe width="560" height="315" 
              src={`https://www.youtube-nocookie.com/embed/${movieDetails.trailer}`}
              title="YouTube video player" frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen></iframe>
            </div>
            <p>{movieDetails.description}</p>

          </div>
        </div>) : <></>
      )
  )
}

export default MovieTrailer