import { useState } from "react";
import SearchResult from "./components/SearchResult";
import Search from "./buttons/Search";
import SearchBar from "./components/SearchBar";
import Playlist from "./components/Playlist";
import './App.css';


function App() {

  const resultMouseOver = () => {
    const result = document.getElementById('result');
    const borderB = document.getElementById('rl_h2');
    
    const mouseOverResult = () => {
      borderB.style.borderBottom='3px solid white';
    };

    const mouseOutResult = () => {
      borderB.style.borderBottom='3px solid transparent';
    };


    result.addEventListener('mouseover', mouseOverResult);
    result.addEventListener('mouseout', mouseOutResult);
  };

  //BUTTON HOVER
  const buttonClick = () => {
    const button = document.getElementsByClassName('rl_button');
    const borderB = document.getElementById('rl_h2');

    //CLICK BUTTON
    const clickButton = () => {
      borderB.style.borderBottom='3px solid blueviolet';
    };

    //EVENT LISTENERS
    Array.from(button).forEach(function(button) {
      button.addEventListener('click', clickButton)
    })
    
  }


  const playlistMouseOver = () => {
    const playlist = document.getElementById('playlist');
    const pl_body = document.getElementById('pl_body');
    const borderB = document.getElementById('pl_h2');

    const mouseOverBorderB = () => {
      borderB.style.borderBottom='3px solid white';
    }

    const mouseOutBorderB = () => {
      borderB.style.borderBottom='3px solid transparent';
    }

    const clickPlBody = () => {
      borderB.style.borderBottom='3px solid blueviolet';
    }

    playlist.addEventListener('mouseover', mouseOverBorderB);
    playlist.addEventListener('mouseout', mouseOutBorderB);
    pl_body.addEventListener('click', clickPlBody)
  }

  return (
    <div id="body">
      <div id="search">
        <SearchBar 
        className='bar'
        type='text'
        plchol='Search...'/>
        <br></br>
        <Search 
        type='submit' 
        className='button'>Search</Search>
      </div>
      <div id="main">
        
        <Playlist 
        pl_id='playlist'
        id='pl_body'
        pl_h2_id='pl_h2'
        type='text'
        plchol='Playlist...'
        onMouseOver={playlistMouseOver}/>
        
         
        <SearchResult 
        rl_id='result'
        id='tr_body'
        rl_h2_id='rl_h2'
        className='song' classArtist='art_alb' classButton='rl_button'
        resultMouseOver={resultMouseOver}
        buttonClick={buttonClick}
        />
        
      </div>
    </div>
  );
};

export default App;