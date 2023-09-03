import React from 'react';
import LeftDashboard  from '../../components/leftDashboard/LeftDashboard';
import Content from '../../components/content/Content'; 
import "./style.scss"

export default function Home() {
    console.log("Home")
    return(
        <div className='home'>
            <LeftDashboard/>
            <Content/>
        </div>
    )
}