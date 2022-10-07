import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import MovieList from './MovieList';


function Filter () {
  const [movies, setMovies] = useState([]);
  const [showMovies, setShowMovies] = useState(false);
  const [searchInput, setSearchInput] = useState('');

   
  const [addFormData, setAddFormData] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();
  
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
  
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
  
    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
  
    const newContact = {
     id:nanoid(),
      title: addFormData.title,
      description: addFormData.description,
      posterURL: addFormData.posterURL,
      rating: addFormData.rating,
    };
 
    const newContacts = [...movies, newContact];
    setMovies(newContacts);
  };
useEffect(() =>{
  fetch("http://localhost:8000/movies")
  .then((response) => response.json())
  .then((apiMovies) =>{
    setMovies(apiMovies);
    setShowMovies(true);
  });
}, []
);

          
 const searchMoviesHandler = (event)=>{
  const search = event.target.value.toLocaleLowerCase();
  setSearchInput(search);
 };


    const filteredMovies = movies.filter((movie)=>{
      return movie.title.toLocaleLowerCase().includes(searchInput);
    });

    let renderMovies ="Loading movies..";
    if(showMovies){
      renderMovies= <MovieList movies={filteredMovies}/>
    }
  return (
    
    <div className="App">
      <div className="container">
      <input type="search"
      placeholder="search movies"
      onChange={searchMoviesHandler}/>
      </div>
     {renderMovies}
     
     <h2 className='titre1'>Add a Movie</h2>
    <form  onSubmit={handleAddFormSubmit}>
      <input
        type="text"
        name="title"
        required="required"
        placeholder="Enter title..."
        onChange={handleAddFormChange}
      />
      <input
        type="text"
        name="description"
        required="required"
        placeholder="Enter description..."
        onChange={handleAddFormChange}
      />
      <input
        type="text"
        name="posterURL"
        required="required"
        placeholder="Enter URL..."
        onChange={handleAddFormChange}
      />
      <input
        type="text"
        name="rating"
        required="required"
        placeholder="Enter rating..."
        onChange={handleAddFormChange}
      />
      <button type="submit">Add new movie</button>
    </form>
    </div>
  );

  };
export default Filter;