
import  'bootstrap/dist/css/bootstrap.min.css' ;

const MovieCard = (props) => {
    
        const {id, title, description, posterURL, rating}= props.movie;
        return <div className='container '>
        <div className="row">
            
                <div className="card " >
        
                    <div className="card-Body">
                    
                      <h1 className="card-Text" >{title}</h1>
          
                    
                      <p className="card-Text" > {description }</p>
                      <p className="card-Text" >{posterURL }</p>
                      <p className="card-Text" > {rating} </p>
                  
        
                    </div>
                 
            </div>
           
        </div>
        
        </div> 
    }

export default MovieCard;