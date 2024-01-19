import { useState } from "react";
import SearchResult from "./components/SearchResult";
import Search from "./buttons/Search";
import SearchBar from "./components/SearchBar";
import Playlist from "./components/Playlist";
import './App.css';


function App() {
  const [ search, setSearch ] = useState('');
  const [ searchResult, setSearchResult ] = useState([{
    name: "K y B",
    artist: "Morad, Beny Jr",
    album: '3O', 
    id: 1
    
},
{
    name: "LF Babys",
    artist: "Beny Jr",
    album: 'LF', 
    id: 2
    
},
{
    name: "Como Es?",
    artist: "Morad, DELLAFUENTE",
    album: 'Capitolo 1', 
    id: 3
    
},
{
    name: "Superstars",
    artist: "Jazeek",
    album: 'Single', 
    id: 4
    
},
{
    name: "No Estuviste En Lo Malo",
    artist: "Morad, Beny Jr, DELLAFUENTE",
    album: 'Single', 
    id: 5
    
},
{
    name: "Send Nudes",
    artist: "Knucks",
    album: 'ALPHA PLACE', 
    id: 6
    
},
{
    name: "First Light",
    artist: "Xavier Wulf",
    album: 'Blood Shore Season 3', 
    id: 7
    
},
{
    name: "Speciale",
    artist: "Fresh, SCH",
    album: `Á l'abri`, 
    id: 8
    
},
{
    name: "Aesthetic",
    artist: `Daniel "Green" Kiselkov`,
    album: 'voklesiK', 
    id: 9
    
}]);
  const [ playlistName, setPlaylistName ] = useState('');
  const [savePlaylist, setSavePlaylist] = useState([]);

  


  //SETTING SEARCH TEXT
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  //SEARCH BUTTON
  const handleSearchClick = () => {
    const filteredTracks = searchResult.map((track) => {
      if (track.name.toLowerCase().includes(search.toLowerCase())) {
        return {
          ...track,
          hidden: false,
        };
      }
      return {
        ...track,
        hidden: true,
      };
    });
    setSearchResult(filteredTracks);
    
  };
    
  
  

  //SETTING PLAYLIST TEXT
  const handlePlaylistChange = (event) => {
    setPlaylistName(event.target.value);
  };

  //MOUSE OVER RESULT DIV
  const resultMouseOver = () => {
    const result = document.getElementById('result');
    const borderB = document.getElementById('rl_h2');
    
    //OVER RESULT
    const mouseOverResult = () => {
      borderB.style.borderBottom='3px solid white';
    };

    //OUT RESULT
    const mouseOutResult = () => {
      borderB.style.borderBottom='3px solid transparent';
    };

    //RESULT EVENT LISTENERS
    result.addEventListener('mouseover', mouseOverResult);
    result.addEventListener('mouseout', mouseOutResult);
  };


  

  //BUTTON CLICK
  const addTrack = (track) => {
    if (savePlaylist.some(savedTrack => savedTrack.id === track.id))
      return;
    setSavePlaylist((prev) => {
      return [...prev, track];
    });
  };






  //MOUSE OVER PLAYLIST
  const playlistMouseOver = () => {
    const playlist = document.getElementById('playlist');
    const borderB = document.getElementById('pl_h2');

    //OVER MOUSE
    const mouseOverPlaylist = () => {
      borderB.style.borderBottom='3px solid white';
    };

    //OUT MOUSE
    const mouseOutPlaylist = () => {
      borderB.style.borderBottom='3px solid transparent';
    };


    //PLAYLIST EVENT LISTENER
    playlist.addEventListener('mouseover', mouseOverPlaylist);
    playlist.addEventListener('mouseout', mouseOutPlaylist);
  };



  const handlePlSearch = () => {
    const pl_search = document.getElementById('pl_search');
    const borderB = document.getElementById('pl_h2');

    //CLICK SEARCH
    const clickPlSearch = () => {
      borderB.style.borderBottom='3px solid blueviolet';
    };

    pl_search.addEventListener('click', clickPlSearch)
  }


  const handleRemoveButton = (trackId) => {
    setSavePlaylist(prev => {
      return prev.filter((track, id) => (
        id !== trackId
      ))
    })
  }

  

  return (
    <div id="body">
      <div id="search">
        <SearchBar 
        className='bar'
        type='text'
        plchol='Search...' value={search} onChange={handleSearchChange}/>
        <br></br>

        <Search 
        type='submit' 
        searchButton='searchButton' 
        searchClick = {handleSearchClick}>Search</Search>
      </div>
      <div id="main">
        
        <Playlist 
        pl_id='playlist'
        plSrId='pl_search'
        pl_h2_id='pl_h2'
        valueName={playlistName}
        type='text'
        plchol='Playlist...'
        valuePlaylist = {savePlaylist}
        savedTracks= {savePlaylist}
        pltrId = 'pltr-id' 
        className='song' classArtist='art_alb'
        XButtonId='xButton'
        buttonId='pl_button'
        onMouseOver={playlistMouseOver}
        onClick={handlePlSearch}
        onChange={handlePlaylistChange}
        removeButton={handleRemoveButton}/>
        
         
       <SearchResult 
        rl_id='result'
        id='tr_body'
        rl_h2_id='rl_h2'
        tracks = {searchResult}
        className='song' classArtist='art_alb' classButton='rl_button'
        resultMouseOver={resultMouseOver}
        buttonClick={addTrack}
        />
      
      </div>
    </div>
  );
};

export default App;