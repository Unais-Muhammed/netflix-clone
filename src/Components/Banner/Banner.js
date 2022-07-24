import React, { useEffect, useState } from 'react'
import {API_KEY} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
  const [moive,setMovie] = useState([])
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data)
      setMovie(response.data.results[0])
    })
  },[])
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttons'>
                <button className='button' >Play</button>
                <button className='button' >My list</button>

            </div>
            <h1 className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
        </div>
        <div className="fade_bottom">
          
        </div>

    </div>
  )
}

export default Banner