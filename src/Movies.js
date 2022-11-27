import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url = "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  let {data,isLoading} = useGlobalContext()
  console.log(data)
  if(isLoading){
    return <div className='loading'></div>
  }
  return (
    <section className="movies">
      {data.map((movie)=>{
        return <Link className="movie" to={`movies/${movie.imdbID}`} key={movie.imdbID}>
        <article>
          <img src={movie.Poster === "N/A" ? url : movie.Poster} alt={movie.Title} />
          <div className="movie-info">
            <h4 className="title">{movie.Title}</h4>
            <p>{movie.Year}</p>
          </div>
        </article>
      </Link>
      })}
    </section>
  );
};

export default Movies;
