import React, { useState } from "react";

function Paginate({ moviesPerPage, allMovies, paginate, onPrevOrNextClick }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    // <div className=" flex justify-center items-center my-6 bg-indigo-400 rounded-lg">
    <nav aria-label="Page navigation example" className=" my-8 text-center">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-primary dark:border-gray-700 dark:text-black dark:hover:bg-green-700 dark:hover:text-white"
            onClick={() => {
              onPrevOrNextClick("prev", pageNumbers);
              if (currentPage > 1) {
                let page = currentPage - 1;
                setCurrentPage(page);
              }
            }}
          >
            Prev
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              href="#"
              className={`font-bold flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 ${
                currentPage === number
                  ? "text-white bg-blue-500 dark:bg-blue-700 dark:text-white"
                  : "text-gray-500 bg-white dark:bg-[#65ff5d] dark:text-black"
              }`}
              onClick={() => {
                paginate(number);
                setCurrentPage(number);
              }}
            >
              {number}
            </a>
          </li>
        ))}

        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-primary dark:border-gray-700 dark:text-black dark:hover:bg-green-700 dark:hover:text-white"
            onClick={() => {
              if (currentPage !== pageNumbers[pageNumbers.length - 1]) {
                let page = currentPage + 1;
                setCurrentPage(page);
              }
              onPrevOrNextClick("next", pageNumbers);
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
    // </div>
  );
}

export default Paginate;
