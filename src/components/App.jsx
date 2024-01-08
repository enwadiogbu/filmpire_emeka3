import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import { Actors, MovieInformation, Movies, Profiles, Navbar } from "./";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <main>
        <Routes>
          <Route path="/movie/:id" element={<MovieInformation />} />
        </Routes>
        <Routes>
          <Route path="/actors/:id" element={<Actors />} />
        </Routes>
        <Routes>
          <Route path="/movies/:id" element={<Movies />} />
        </Routes>
        <Routes>
          <Route path="/profiles/:id" element={<Profiles />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
