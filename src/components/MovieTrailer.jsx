import React from 'react'
import { useParams } from 'react-router-dom'

const MovieTrailer = () => {
  const movieID = useParams()
  return (
    
      ( movieID ?
        ( 
        <div className='movie-adder'>
          <div className='col-12'>
            <h1> Hello: {} </h1>
          </div>
        </div>) : <></>
      )
  )
}

export default MovieTrailer