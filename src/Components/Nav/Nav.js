import React from 'react'
import './Nav.css'
import requests from '../../requests/requests'

function Nav({setSelectedOption}) {
    return (
        <div className="nav">
            <h3 onClick={()=>setSelectedOption(requests.fetchTrending)}>Trending</h3>

            <h3 onClick={()=>setSelectedOption(requests.fetchPerson)}>Recomanded</h3>
            
            <h3 onClick={()=>setSelectedOption(requests.fetchTopRated)} >Top Rated</h3>
           
            <h3 onClick={()=>setSelectedOption(requests.fetchActionMovies)}>Action</h3>
           
            <h3 onClick={()=>setSelectedOption(requests.fetchComedyMovies)}>Comedy</h3>
           
            <h3 onClick={()=>setSelectedOption(requests.fetchHorrorMovies)}>Horror</h3>
           
            <h3 onClick={()=>setSelectedOption(requests.fetchRomanceMovies)}>Romance</h3>
           
            <h3 onClick={()=>setSelectedOption(requests.fetchDocumentaries)}>Mystery</h3>
            
            <h3 onClick={()=>setSelectedOption(requests.fetchPopular)}>Popular</h3>
           
            <h3 onClick={()=>setSelectedOption(requests.fetchUpComingMovie)}>Upcoming Movie</h3>
        
            <h3 onClick={()=>setSelectedOption(requests.fetchTv)}>Tv</h3>

        </div>
    )
}

export default Nav
