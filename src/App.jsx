import React,{ useState, useEffect } from 'react'
import "./App.scss"
import { fetchData } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration} from './store/HomeSlice'
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


function App() {

  const dispatch = useDispatch();
  const {url} = useSelector((state)=>
    state.home
  );
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting =  () => {
    fetchData("/movie/top_rated")
      .then((res) => {
        console.log(res);
        dispatch(getApiConfiguration(res));
      });
  };

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
