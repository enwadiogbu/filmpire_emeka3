import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import useStyles from "./styles";
import { Actors, MovieInformation, Movies, Profiles, Navbar } from "./";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/movie/:id" element={<MovieInformation />} />
        </Routes>
        <Routes>
          <Route path="/actors/:id" element={<Actors />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Movies />} />
        </Routes>
        <Routes>
          <Route path="/profiles/:id" element={<Profiles />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
