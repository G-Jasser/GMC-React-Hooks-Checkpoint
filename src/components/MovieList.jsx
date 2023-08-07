import React, { useState } from 'react'
import movies from '../assets/movies'
import MovieCard from './MovieCard'
import { Button, Form, InputGroup } from 'react-bootstrap'
import Filter from './Filter'


const MovieList = () => {
  const [moviesList, setMoviesList] = useState(movies)
  const [movieDetails, setMovieDetails] = useState({ title: "", rating: 0, description: "", posterURL: "" })

  const handleTitleChange = (e) => setMovieDetails({ title: e.target.value, ...movieDetails })
  const handleRatingChange = (e) => setMovieDetails({ rating: e.target.value, ...movieDetails })
  const handleDescriptionChange = (e) => setMovieDetails({ description: e.target.value, ...movieDetails })
  const handlePosterURLChange = (e) => setMovieDetails({ posterURL: e.target.value, ...movieDetails })

  const handleAddMovie = () => setMoviesList([movieDetails, ...moviesList])
  const handleClear = () => setMovieDetails({ title: "", rating: 0, description: "", posterURL: "" })

  const [searchByTitle, setSearchByTitle] = useState("")
  const [searchByRating, setSearchByRating] = useState(0)





  return (
    <>
      <div className='movie-adder'>
        <h3 style={{ marginBottom: 20 }}>Movie Adder:</h3>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            Title:
          </InputGroup.Text>
          <Form.Control placeholder="Movie Title" onChange={handleTitleChange} />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Rating:</InputGroup.Text>
          <Form.Control placeholder="x out of 10" onChange={handleRatingChange} />
          <InputGroup.Text>/10</InputGroup.Text>
        </InputGroup>

        <InputGroup className='mb-3'>
          <InputGroup.Text>Description:</InputGroup.Text>
          <Form.Control as="textarea" placeholder="Movie Description" onChange={handleDescriptionChange} />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">
            Poster URL:
          </InputGroup.Text>
          <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder='https://example.com/poster.png' onChange={handlePosterURLChange} />
        </InputGroup>

        <div className='movie-buttons'>
          <Button variant="outline-primary" onClick={handleAddMovie}>Add</Button>
          <Button variant="outline-secondary" onClick={handleClear}>Clear</Button>
        </div>
      </div>

      <Filter setSearchByTitle={setSearchByTitle} setSearchByRating={setSearchByRating} />

      <div className='movies-section'>
        <h3>Movies Section:</h3>
        <div className='movies-container'>
          {
            moviesList.filter(
              (movie) => (movie.title.toLowerCase().includes(searchByTitle.toLowerCase())
                || movie.description.toLowerCase().includes(searchByTitle.toLowerCase()))
                && movie.rating >= searchByRating
            ).map(
              (movie) => <MovieCard movieDetails={movie} key={movie.title} />
            )
          }
        </div>
      </div>
    </>
  )
}

export default MovieList