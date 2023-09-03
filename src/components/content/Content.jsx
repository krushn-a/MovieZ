import React,{useState} from 'react';
import './style.scss';
import TrendingBanner from "./banner/TrendingBanner"
import Routes from "../linkStore/Dashboard_links"
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

export default function Content(){
    const [query,setQuery] = useState("")
    const navigate = useNavigate()
    const handleSearch = (e) => {
        if(e.key === "Enter" && query !== ""){
            navigate(`/search/${query}`)
        }
    }
    const {data, loading} = useFetch("/movie/upcoming");
    return(
        <div className='content-container'>

            {/* Header part */}
            <div className="Header">
                <div className="selection-section">
                    <p>Movies</p>
                    <p>Series</p>
                    <p>TV Shows</p>
                </div>

                <input 
                    type="text" 
                    id = "search" 
                    placeholder="Search"
                    onChange={(e)=>setQuery(e.target.value)}
                    onKeyUp={handleSearch}
                />

                <div className="profile-section">
                    {
                        Routes[5].map((route)=>{
                             return(
                                <NavLink key={route.id}>
                                    <div className="profile-icon">{route.icon}</div>
                                </NavLink>
                             )  
                        })
                    }
                </div>
            </div>

            {/* Banner Section */}
            <div className="TopRated">
                <TrendingBanner />
            </div>

            {/* other content */}
            <div className="other-content-1"></div>
        </div>
    )
}