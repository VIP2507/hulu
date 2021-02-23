import React, { forwardRef } from 'react';
import './Videocard.css';
import TextTruncate from 'react-text-truncate';
import { ThumbUpSharp } from '@material-ui/icons'


const base_url="http://image.tmdb.org/t/p/original/"

const Videocard=forwardRef(({movie},ref)=> {
    return (
        <div ref={ref} className="videocard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path} `} 
            alt="movie poster"></img>

            <TextTruncate
                line={1}
                 element="p"
                truncateText="..."
                text={movie.overview}/>
             
                <h3> {movie.title || movie.original_name}</h3>

               <p className="movie_info" style={{fontSize:'12px',fontWeight:'300'}}>

                {movie.release_date || movie.first_air_date} .
                <ThumbUpSharp/>{" "} {movie.vote_count}</p>
        </div> 
    )
});

export default Videocard
