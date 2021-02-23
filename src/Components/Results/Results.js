import React,{useEffect , useState} from 'react'
import './Results.css'
import Videocard from '../Videocard/Videocard'
import requests from '../../requests/requests';
import axios from 'axios';
import FlipMove from 'react-flip-move'

function Results({selectedOption}) {
    const [movies,setMovies]=useState([]);

    useEffect(() => {
      async function fetchData(){
            const request = await axios.get(selectedOption);
           setMovies(request.data.results) ;
           return request;
      }
      fetchData();  
    }, [selectedOption])    

    return (

        <div className="results">
        <FlipMove>
        {movies.map((movie)=>(
            <Videocard key={movie.id} movie={movie}
                /> 
        ))}
        </FlipMove>
        </div>
    )
}

export default Results
