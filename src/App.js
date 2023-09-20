import { useEffect, useState } from "react";

import { useMovies } from "./components/elements/useMovies";
import { useLocalStorageState } from "./components/elements/useLocalStorageState";

import NavBar from "./components/navbar/NavBar";
import Search from "./components/navbar/Search";

import Main from "./components/main/Main";
import WatchedSummary from "./components/main/WatchedSummary";
import WatchedMoviesList from "./components/main/WatchedMoviesList";
import MovieDetails from "./components/main/MovieDetails";
import MovieList from "./components/main/MovieList";

import NumResults from "./components/elements/NumResults";
import ErrorMessage from "./components/elements/ErrorMessage";
import Loader from "./components/elements/Loader";
import Box from "./components/elements/Box";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const { movies, isLoading, error } = useMovies(query);

  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              watched={watched}
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
                onSelectMovie={handleSelectMovie}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
