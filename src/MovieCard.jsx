import React from "react";


const MovieCard = ({movie}) =>{
    return(
        <div className='movie'>
              <div>
                <p>{movie.Year}</p>
              </div>
              <di>
                <img
                src={movie.Poster !== 'N/A' ? movie.Poster :'https://via.placeholder.com/400'} 
                  alt={movie.Title}
                />
              </di>
              <div>
               <spn>{movie.Type}</spn> 
               <h3>{movie.Title}S</h3>
              </div>
            </div>
    )
}
export default MovieCard