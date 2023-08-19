import React from 'react';
import {Link}  from 'react-router-dom';
import "./style.scss"


export default function LeftDashboard() {
  return (
    <div className='leftdashboard'>
      <h1>Left Dashboard</h1>
      <Link to="/bookmarked" id = "bookmarked">Bookmark</Link>
      <Link to="/comingsoon" >ComingSoon</Link>
      <Link to="/community" >Community</Link>
      <Link to="/discovery" >Discover</Link>
      <Link to="/downloads" >Downloads</Link>
      <Link to="/help" >Help</Link>
      <Link to="/recent" >Recent</Link>
      <Link to="/settings" >Settings</Link>
      <Link to="/toprated" >TopRated</Link>
    </div>
  );
}