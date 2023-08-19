import React from 'react';
import LeftDashboard  from '../../components/leftDashboard/LeftDashboard';
import "./style.scss"

export default function Home() {
    console.log("Home")
    return(
        <div className='home'>
            <LeftDashboard/>
        </div>
    )
}