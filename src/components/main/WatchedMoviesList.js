import WatchedMovie from "./WatchedMovie";

export default function WatchedMoviesList({
  watched,
  onDeleteWatched,
  onSelectMovie,
}) {
  return (
    <ul className="list list-watched">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </ul>
  );
}
