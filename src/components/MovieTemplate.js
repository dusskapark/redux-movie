import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import MovieCardList from "./MovieCardList";
import MovieSearchContainer from "../containers/MovieSearchContainer";

const MovieTemplate = ({ movies }) => {
  return (
    <div>
      <CssBaseline />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={9}>
          <MovieSearchContainer />
        </Grid>
      </Grid>
      <MovieCardList movies={movies} />
    </div>
  );
};

export default MovieTemplate;
