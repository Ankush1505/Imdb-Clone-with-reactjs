import React from "react";


function MovieCard({
  handleAddtoWatchList,
  poster_path,
  name,
  movieObj,
  handleRemoveFromWatchlist,
  watchList,
}) {
  function doesContain(movieObj) {
    if (!watchList || watchList.length === 0) return false; // Handle empty watchList
    return watchList.some((movie) => movie.id === movieObj.id); // Use `some` for efficiency
  }
  
  return (
    <div
      className="h-[50vh] w-[276px] m-4 bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div onClick={() => handleRemoveFromWatchlist(movieObj)} className="m-4  flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60">&#10060;</div>
      ) : (
        <div onClick={() => handleAddtoWatchList(movieObj)} className="m-4  flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60">
          &#128525;
        </div>
      )}

      <div className="text-white text-l w-full bg-black bg-grey-900/60 bg-opacity-50 p-2 text-center">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
