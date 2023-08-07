import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

const Filter = ({ setSearchByTitle, setSearchByRating }) => {

  const handleSearchByTitleChange = (element) => setSearchByTitle(element.target.value)
  const handleSearchByRatingChange = (element) => setSearchByRating(element.target.value)


  return (
    <div className='movie-adder'>
      <h3 style={{ marginBottom: 20 }}>Movie Filter:</h3>
      <InputGroup className="mb-3">
        <InputGroup.Text>
          Title:
        </InputGroup.Text>
        <Form.Control placeholder="Movie Title" onChange={handleSearchByTitleChange}/>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Rating:</InputGroup.Text>
        <Form.Control placeholder="x out of 10" onChange={handleSearchByRatingChange}/>
        <InputGroup.Text>/10</InputGroup.Text>
      </InputGroup>
    </div>
  )
}

export default Filter