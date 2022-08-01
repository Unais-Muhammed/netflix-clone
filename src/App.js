import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {comedyMovies , actionMovies , originals, horrorMovies} from './url'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title='Netflix Originals' url={originals} />
      <RowPost title='Action Movies' url={actionMovies} isSmall={true} />
      <RowPost title='Comedy Movies' url={comedyMovies} isSmall={true} />
      <RowPost title='Horror Movies' url={horrorMovies} isSmall={true} />
      
    </div>
  );
}

export default App;
