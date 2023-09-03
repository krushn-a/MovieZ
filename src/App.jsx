import React,{ useState, useEffect } from 'react'
import "./App.scss"
import { fetchData } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres} from './store/HomeSlice'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Bookmarked  from "./pages/bookmarked/Bookmarked";
import ComingSoon from './pages/comingSoon/ComingSoon';
import Community from './pages/community/Community';
import Discovery from './pages/discovery/Discovery';
import Downloads from './pages/downloads/Downloads';
import Help from './pages/help/Help';
import Recent from './pages/recent/Recent';
import Settings from './pages/settings/Settings';
import TopRated from './pages/topRated/TopRated';
import SearchResult from './pages/SearchResult/SearchResult'


function App() {

  const dispatch = useDispatch();
  const {url} = useSelector((state)=>
    state.home
  );
  useEffect(() => {
    apiConfig();
    genrescall();
  }, []);
  const apiConfig =  () => {
    fetchData("/configuration")
      .then((res) => {
        const url = {
          backdrop: res.images.base_url + "original",
          poster: res.images.base_url + "original",
          profile: res.images.base_url + "original"
        }
        dispatch(getApiConfiguration(url));
      });
  };


  const genrescall = async() => {
    let promises = [];
    let endpoints = ["tv","movie"];
    let AllGenres = {};

    endpoints.forEach((url) => {
      promises.push(fetchData(`/genre/${url}/list`));
    });
    const data = await Promise.all(promises);
    
    data.map(({genres}) => {
      return genres.map((item) => (AllGenres[item.id] = item));
    }) // yahan jo genres hai woh array ke under jo object hai uske andar ka ek property hai

    dispatch(getGenres(AllGenres));
  }



  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="/bookmarked" element={<Bookmarked />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path="/community" element={<Community />} />
            <Route path="/discovery" element={<Discovery />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/help" element={<Help />} />
            <Route path="/recent" element={<Recent />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/toprated" element={<TopRated />} />
            <Route path="/search/:query" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
