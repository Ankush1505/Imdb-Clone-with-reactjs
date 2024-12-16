import React, { useState } from "react";

function WatchList({watchList}) {


  const [search , setSearch] = useState('')

  let handleSearch = (e)=>{
    setSearch(e.target.value)
  }

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl  text-white font-bold mx-4">
          Action
        </div>
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl  text-white font-bold">
         Genre
        </div>
      </div>

      <div className="flex justify-center my-4">
        <input onChange={handleSearch} value={search}
          type="text" 
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4 "
        />
      </div>

      <div className="overflow-hidden  rounded-lg border border-gray-200 m-8">
        <table className="w-full text-center text-gray-500">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div className="p-2"><i class="fa-solid fa-arrow-up"></i></div>
                <div className="p-2">Rating</div>
                <div className="p-2"><i class="fa-solid fa-arrow-down"></i></div>
                </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>

            {watchList.filter((movieObj)=>{
              return movieObj.title.toLowerCase().includes(search.toLowerCase())
            }).map((movieObj)=>{
              return <tr className="border-b-2">
              <td className="flex items-center px-6 py-4">
                <img
                  className="h-[6rem] w-[10rem]"
                  src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                />
                <div className="mx-10">{movieObj.title}</div>
              </td>
              <td>{movieObj.vote_average}</td>
              <td>{movieObj.popularity}</td>
              <td>Thriller</td>
              <td className="text-red-800">
                <button>Delete</button>
              </td>
            </tr>
            })}
            


            
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
