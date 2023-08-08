import React, { useEffect, useState } from 'react'
import movies from '../assets/movies'
import MovieCard from './MovieCard'
import { Button, Form, InputGroup } from 'react-bootstrap'
import Filter from './Filter'
import { Outlet } from 'react-router-dom'

const MovieList = () => {
  const [moviesList, setMoviesList] = useState(movies)

  const [_title, setTitle] = useState("")
  const [_path, setPath] = useState("")
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
    const convertTitleToPath = e.target.value.toLowerCase().split(" ").join("-")
    setPath(convertTitleToPath)
  }

  const [_rating, setRating] = useState("")
  const handleRatingChange = (e) => setRating(e.target.value)

  const [_description, setDescription] = useState("")
  const handleDescriptionChange = (e) => setDescription(e.target.value)

  const [_posterURL, setPosterURL] = useState("")
  const handlePosterURLChange = (e) => setPosterURL(e.target.value)

  const [_trailer, setTrailer] = useState("")
  const handleTrailerChange = (e) => setTrailer(e.target.value)

  const handleAddMovie = () => setMoviesList([{
    "title": _title,
    "description": _description,
    "rating": _rating,
    "posterURL": _posterURL,
    "trailer": _trailer,
    "path": _path,
  }, ...moviesList])
  const handleClear = () => console.log("Imagine that the form is cleared please.", moviesList[0]);

  const [searchByTitle, setSearchByTitle] = useState("")
  const [searchByRating, setSearchByRating] = useState(0)

  return (
    <>
      <div className='row'>
        <div className='movie-adder col-lg-6 col-12'>
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

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">
              Trailer URL:
            </InputGroup.Text>
            <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder='https://www.youtube-nocookie.com/embed/(videoID)' onChange={handleTrailerChange} />
          </InputGroup>

          <div className='movie-buttons'>
            <Button variant="outline-primary" onClick={handleAddMovie}>Add</Button>
            <Button variant="outline-secondary" onClick={handleClear}>Clear</Button>
          </div>
        </div>

        <Filter setSearchByTitle={setSearchByTitle} setSearchByRating={setSearchByRating} />
      </div>

      <>
        <Outlet context={[moviesList]} />
      </>

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