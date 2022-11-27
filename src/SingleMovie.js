import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  let { id } = useParams();
  let { isLoading, data } = useFetch("&i=" + id);
  let {
    Title,
    Poster,
    Plot,
    Year,
    Awards,
    Director,
    Genre,
    Actors,
    Runtime,
    imdbRating,
  } = data;
  console.log(Awards);
  console.log(data);
  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="single-movie">
      <img src={Poster} alt="" />
      <div className="single-movie-info">
        <div className="header">
          <h2>{Title}</h2>
          <div className="rating">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              className="ipc-icon ipc-icon--star sc-7ab21ed2-4 hLFdut"
              id="iconContext-star"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            >
              <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
            </svg>
            <span>{imdbRating}</span>/10
          </div>
        </div>
          <div className="runtime">{Runtime}  </div>
        <p>{Plot}</p>
        <div className="details">
          <div className="year">
            <span className="title">Year: </span>
            {Year}
          </div>
          <div className="genre">
            <span className="title">Genre: </span>
            {Genre}
          </div>
          <div className="actors">
            <span className="title">Actors: </span>
            {Actors}
          </div>
          <div className="director">
            <span className="title">Director: </span>
            {Director}
          </div>
          <div className="awards">
            <span className="title">Awards: </span>
            {Awards}
          </div>
        </div>
        <Link className="btn" to={"/"}>
          Back To Movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
