const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  const avgImdbRatingRounded = avgImdbRating.toFixed(1);
  const avgUserRatingRounded = avgUserRating.toFixed(1);
  const avgRuntimeRounded = avgRuntime.toFixed(0);
  return (
    <div className="summary">
      <h2>Movies you've watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>
            {watched.length} {watched.length === 1 ? "movie" : "movies"}
          </span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRatingRounded}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRatingRounded}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntimeRounded} min</span>
        </p>
      </div>
    </div>
  );
}
