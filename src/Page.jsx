import React, { useContext } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MovieList from "./cine/MovieList";
import { ThemeContext } from "./contexts";

export default function Page() {
    const {darkMode,setDarkMode} = useContext(ThemeContext);
  return (
    <div className={`h-full w-full ${darkMode?"dark":""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
    </div>
  );
}
