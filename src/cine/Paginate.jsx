import React from "react";

function Paginate({ moviesPerPage, allMovies }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil((allMovies) / moviesPerPage); i++) {
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
            >
              Previous
            </a>
          </li>
          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                href="#"
                className=" font-bold flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#65ff5d] dark:border-gray-700 dark:text-[black] dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {number}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-primary dark:border-gray-700 dark:text-black dark:hover:bg-green-700 dark:hover:text-white"
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
