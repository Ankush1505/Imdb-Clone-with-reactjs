import "./App.css";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import Movies from "./components/Movies";
import Banner from "./components/Banner";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  let [watchList, setWatchList] = useState([])

  let handleAddtoWatchlist = (movieObj)=>{
    let newWatchList = [...watchList , movieObj]
    localStorage.setItem('moviesApp' , JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)
  }

  let handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchList = watchList.filter((movie)=>{
      return movie.id != movieObj.id
    })

    setWatchList(filteredWatchList)
    console.log(filteredWatchList)
  }

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if (!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
              
                <Banner /> <Movies handleAddtoWatchList={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchList={watchList}/>
              </>
            }
          />

          <Route path="/watchlist" element={<WatchList watchList={watchList} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
