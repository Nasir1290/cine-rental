import { useState } from "react";
import { getImgUrl } from "../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Ratings from "./Ratings";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };
  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={selectedMovie} onClose={handleClose} />
      )}

      <figure className="p-4 border border-black shadow-lg dark:border-white/10 rounded-xl">
        <figcaption className="pt-4" href="#">
          {/* <a > */}
          <img
            className="w-full object-cover cursor-pointer"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
            onClick={() => handleMovieSelection(movie)}
          />
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Ratings value={movie.rating} />
          </div>
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
          >
            <img src="./assets/tag.svg" alt="" />
            <span>${movie.price} | Add to Cart</span>
          </a>
          {/* </a> */}
        </figcaption>
      </figure>
    </>
  );
}
