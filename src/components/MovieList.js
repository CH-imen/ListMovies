
import MovieCard from "./MovieCard";


const MovieList = (props) =>{
  

    return (
    <div > 
      {props.movies.map((movie) => {
     
    return( <MovieCard movie={movie}/>

   );}
   )}
  
   </div>
  );}

export default MovieList;