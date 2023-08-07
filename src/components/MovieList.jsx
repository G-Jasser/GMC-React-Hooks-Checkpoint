import React, { useState } from 'react'
import movies from '../assets/movies'
import MovieCard from './MovieCard'
import { Button, Form, InputGroup } from 'react-bootstrap'


const MovieList = () => {
  const [moviesList, setMoviesList] = useState(movies)
  let [title, setTitle] = useState("")
  const handleTitleChange = (e) => setTitle(e.target.value)
  let [rating, setRating] = useState(0.0)
  const handleRatingChange = (e) => setRating(e.target.value)
  let [description, setDescription] = useState("")
  const handleDescriptionChange = (e) => setDescription(e.target.value)
  let [posterURL, setPosterURL] = useState("")
  const handlePosterURLChange = (e) => setPosterURL(e.target.value)
  
  const handleAddMovie = () => setMoviesList([{title,rating,description,posterURL}, ...moviesList])
  const handleClear = () => { setTitle(""); setRating(0,0); setDescription(""); setPosterURL("") }

  return (
    <>
      <div className='movie-adder'>
        <h3 style={{marginBottom:20}}>Movie Adder:</h3>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            Title:
          </InputGroup.Text>
          <Form.Control placeholder="Movie Title" onChange={handleTitleChange}/>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Rating:</InputGroup.Text>
          <Form.Control placeholder="x out of 10" onChange={handleRatingChange}/>
          <InputGroup.Text>/10</InputGroup.Text>
        </InputGroup>

        <InputGroup className='mb-3'>
          <InputGroup.Text>Description:</InputGroup.Text>
          <Form.Control as="textarea" placeholder="Movie Description" onChange={handleDescriptionChange}/>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">
            Poster URL:
          </InputGroup.Text>
          <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder='https://example.com/poster.png' onChange={handlePosterURLChange}/>
        </InputGroup>

        <div className='movie-buttons'>
          <Button variant="outline-primary" onClick={handleAddMovie}>Add</Button>
          <Button variant="outline-secondary" onClick={handleClear}>Clear</Button>
        </div>
      </div>
      <div className='movies-section'>
        <h3>Movies Section:</h3>
        <div className='movies-container'>

          {
            moviesList.map(
              (movie) => <MovieCard movieDetails={movie} key={movie.title} />
            )
          }
        </div>
      </div>
    </>
  )
}

export default MovieList