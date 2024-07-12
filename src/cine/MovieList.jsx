import React, { useEffect, useState } from "react";
import { getAllMovies } from "../data/MovieData";
import MovieCard from "./MovieCard";
import Paginate from "./Paginate";

export default function MovieList() {
  let movies = getAllMovies();
  const [allMovies, setAllMovies] = useState(movies);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(9);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = allMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  function paginate(number) {
    setCurrentPage(number);
  }

  function handlePrevOrNextClick(prevOrNext, allPageNumbers) {
    if (prevOrNext === "next") {
      if (allPageNumbers[allPageNumbers.length - 1] === currentPage) {
        return;
      }
      setCurrentPage(currentPage + 1);
    } else {
      if (currentPage===1) {
        return;
      }
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {currentMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Paginate
        moviesPerPage={moviesPerPage}
        allMovies={allMovies.length}
        paginate={paginate}
        onPrevOrNextClick={handlePrevOrNextClick}
      />
    </div>
  );
}
