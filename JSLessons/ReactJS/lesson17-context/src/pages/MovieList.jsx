import React,{useContext} from 'react'
import { MovieContext } from '../context/MovieContext'
import Movie from './Movie'

const MovieList = () => {
    const [movies,setMovies] = useContext(MovieContext)
  return (
 <div className="container mt-3">
       <div className='row'>
        {/* {movies.map(fd => (
            <Movie title={fd.name} earn={fd.price} key={fd.id}/>
        ))} */}
         {movies.map(fd => {
           return <Movie title={fd.name} earn={fd.price} key={fd.id}/>
         })}
    </div>
 </div>
  )
}

export default MovieList