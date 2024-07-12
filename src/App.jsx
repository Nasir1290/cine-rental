import React, { useReducer, useState } from "react";
import { MovieContext, ThemeContext } from "./contexts";
import Page from "./Page";
import { movieReducer } from "./reducers/MovieReducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [state, dispatch] = useReducer(movieReducer, []);
  const [darkMode, setDarkMode] = useState(true);




  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
