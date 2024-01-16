import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/auth";

import { Typography, Button, Box } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
const Profiles = () => {
  const { user } = useSelector(userSelector);
  console.log(user);
  const favoriteMovies = [];
  const logout = () => {
    localStorage.clear();

    window.location.href = "/";
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          Odum Production's Filmpire Profile - {user.username}
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length ? (
        <Typography variant="h5">
          Add favorites or watchlist a few movies to them here!
        </Typography>
      ) : (
        <Box>FAVORITE MOVIES</Box>
      )}
    </Box>
  );
};

export default Profiles;
