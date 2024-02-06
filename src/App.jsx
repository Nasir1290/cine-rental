import React, { useState } from "react";
import { MovieContext, ThemeContext } from "./contexts";
import Page from "./Page";

export default function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode,setDarkMode] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{darkMode,setDarkMode}}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
