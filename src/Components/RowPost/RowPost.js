import React from 'react'
import { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {API_KEY , imageUrl} from '../../constants/constants'


function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setMovies(response.data.results)
    })
  
  }, [])

  const opts={
    height : '390',
    width  : '100%',
    playerVars :{
      autoplay :0,
    } ,
  };

 const handleMovie = (id)=>{
  console.log(id);
   axios.get(`/movie/${id}/videos?api_key${API_KEY}&language=en=us`).then(response=>{
    if(response.data.results.length!==0){
      setUrlId(response.data.results[0])
    }else{
      console.log('Array empty');
    }
    })
  }
   

 return (
   <div className='row'>
   <h2>{props.title}</h2>
   <div className='posters'>
   {movies.map((obj)=>
            
    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPosters' : 'poster'} alt='posters' src={`${imageUrl + obj.backdrop_path}`}></img>
   )}
             
    </div>
    
    { urlId &&      <YouTube opts={opts} videoId={urlId.key} />    }
        
    </div>
  
 )
   
}                

export default RowPost