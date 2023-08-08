import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MovieList from './components/MovieList'
import { Route, Routes } from 'react-router-dom'
import MovieTrailer from './components/MovieTrailer'

function App() {
	return (
		<>
		<Routes>
         	<Route path="/" element={<MovieList />}> 
				<Route path='/:movieID' element={<MovieTrailer />}/>
			</Route>
		</Routes>
		</>
	)
}

export default App
