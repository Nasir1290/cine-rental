import { useContext, useState } from "react";
import { getImgUrl } from "../utils/cine-utility";
import TagImg from "../assets/tag.svg";
import MovieDetailsModal from "./MovieDetailsModal";
import Ratings from "./Ratings";
import { MovieContext } from "../contexts";
import { toast } from "react-toastify";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { state, dispatch } = useContext(MovieContext);

  const handleClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleAddtoCart = (e, movie) => {
    e.stopPropagation();
    const found = state.find((item) => item.id === movie.id);
    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: movie,
      });
      toast.success(`${movie.title} added successfully✔✔`, {
        position: "top-center",
        autoClose: 1000,
        style: {
          background: "green",
          color: "white",
          fontWeight: "bold",
        },
      });
    } else {
      toast.error(`${movie.title} already added`, {
        position: "bottom-center",
        autoClose: 1500,
        style: {
          background: "red",
          color: "white",
          fontWeight: "bold",
        },
      });
    }
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleClose}
          onAddToCart={handleAddtoCart}
        />
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
          <button
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            onClick={(e) => handleAddtoCart(e, movie)}
          >
            <img src={TagImg} alt="" />
            <span>${movie.price} | Add to Cart</span>
          </button>
          {/* </a> */}
        </figcaption>
      </figure>
    </>
  )
}
