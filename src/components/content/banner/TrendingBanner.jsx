import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from '../../../hooks/useFetch';
import "./style.scss"
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import dayjs from "dayjs";
import CircleRating from "../../circleRating/CircleRating";

export default function TrendingBanner() {
    const carouselContainer = useRef();
    const {data, loading} = useFetch(`/trending/movie/week`);
    const {url} = useSelector(state => state.home);
    const navigate = useNavigate();

    const skItem = () =>{
        return(
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
            
        )
    }
    return(
        <div className="carousel">
                <ContentWrapper>
                    <BsFillArrowLeftCircleFill
                        className="carouselLeftNav arrow"
                        onClick={() => navigation("left")}
                    />
                    <BsFillArrowRightCircleFill
                        className="carouselRighttNav arrow"
                        onClick={() => navigation("right")}
                    />
                {!loading ? 
                (<div className='carouselItems'>
                    {data?.results?.map((item)=>{
                        const posterUrl = item.poster_path? url.poster + item.poster_path: PosterFallback;
                        return (
                            <div className="carouselItem" key = {item.id}>
                                <div className="posterBlock">
                                    <img src = {posterUrl} className="posterImg"/>
                                    <CircleRating rating={item.vote_average}/>
                                </div>
                                <div className="textBlock">
                                    <span className="title">
                                        {
                                            item.title || item.name
                                        }
                                    </span>
                                    <span className="date">
                                        {
                                            dayjs(item.release_Date).format("MMM D, YYYY")
                                        }
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                    <div className="carouselItem space">
                        
                    </div>
                </div>):
                (
                    <div className="loadingSkeleton">

                    </div>
                )}
                </ContentWrapper>
        </div>
    )
}