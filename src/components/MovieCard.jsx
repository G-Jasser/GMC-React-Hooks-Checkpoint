import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const MovieCard = ({ movieDetails }) => {
  
  const moviePath = "/"+movieDetails.path

  return (
    <Link to={moviePath}>
      <div className="movie-card">
        <Card className="bg-dark text-white" style={{ width: 350, height: "100%" }}>
          <Card.Img variant="top" src={movieDetails.posterURL} alt="Movie Poster" style={{height: "60%" }}/>
          <Card.Body>
            <Card.Title style={{ color:"#B0BEC5"}}>{movieDetails.title}</Card.Title>
            <Card.Text style={{ fontSize: 12 }}>
              <b style={{color:"#78909C"}}>Description:</b> {movieDetails.description}
            </Card.Text>
            <Card.Text style={{ fontSize: 14 }}><b style={{ color:"#78909C" }}>Rating:</b> <i>{movieDetails.rating}/10</i></Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Link>
  )
}

export default MovieCard