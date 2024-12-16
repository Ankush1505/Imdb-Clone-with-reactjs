import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios';
import Pagination from './Pagination';


function Movies({handleAddtoWatchList , handleRemoveFromWatchlist, watchList}) {

  const [movies, setMovies] = useState([])
  const [pageNo, setpageNo] = useState( 1)


  const handlePrev = () =>{

      if (pageNo > 1) {
        setpageNo(pageNo - 1);
      }
    
      // else{
      //   setpageNo(pageNo-1 )
      // }
    
  };

  const handleNext = () =>{
    
    setpageNo(pageNo+1)

  }

   useEffect(() => {
     axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=334e9b18720f5c5a3665932fcef05cea&language=en-US&page=${pageNo}`).then(function(res){
     console.log(res.data.results); 
     setMovies(res.data.results)
    }) .catch((error) => {
      console.log("Error fetching movies:", error);});
   } , [pageNo])
 


  return (
    <div className='p-5'>
        <div className='text-2xl font-bold text-center m-4'>
          Trending Movies
        </div>
        
        <div className='flex flex-row flex-wrap justify-around'>
          {movies.map((movieObj)=>{
            return <MovieCard watchList={watchList} movieObj={movieObj} handleRemoveFromWatchlist={handleRemoveFromWatchlist} handleAddtoWatchList={handleAddtoWatchList} key={movieObj.id || index} poster_path={movieObj.poster_path} name={movieObj.original_title}/>
          })}
        </div>

        <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/> 

    </div>
  )
}

export default Movies

  // https://api.themoviedb.org/3/movie/popular?api_key=334e9b18720f5c5a3665932fcef05cea&language=en-US&page=1