import React, { useReducer, useState } from "react";
import { MovieContext, ThemeContext } from "./contexts";
import Page from "./Page";
import { movieReducer } from "./reducers/MovieReducer";

export default function App() {
  const [state, dispatch] = useReducer(movieReducer,[]);
  const [darkMode,setDarkMode] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{darkMode,setDarkMode}}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
