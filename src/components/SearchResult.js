import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCirclePlus } from '@fortawesome/free-solid-svg-icons';


const randId = Math.floor(Math.random() * 10000);
const tracks = [
    {
        name: "K y B",
        artist: "Morad, Beny Jr",
        album: '3O', 
        id: randId
    },
    {
        name: "LF Babys",
        artist: "Beny Jr",
        album: 'LF', 
        id: randId
    },
    {
        name: "Como És?",
        artist: "Morad, DELLAFUENTE",
        album: 'Capitolo 1', 
        id: randId
    },
    {
        name: "Superstars",
        artist: "Jazeek",
        album: 'Single', 
        id: randId
    },
    {
        name: "No Estuviste En Lo Malo",
        artist: "Morad, Beny Jr, DELLAFUENTE",
        album: 'Single', 
        id: randId
    },
    {
        name: "Send Nudes",
        artist: "Knucks",
        album: 'ALPHA PLACE', 
        id: randId
    },
    {
        name: "First Light",
        artist: "Xavier Wulf",
        album: 'Blood Shore Season 3', 
        id: randId
    },
    {
        name: "Spéciale",
        artist: "Fresh, SCH",
        album: `Á l'abri`, 
        id: randId
    },
    {
        name: "Ne e lyubov",
        artist: "Djena",
        album: 'Ne znaeh koya sam', 
        id: randId
    }
];

const SearchResult = (props) => {
  return (
    <div id={props.rl_id}  onMouseOver={props.resultMouseOver}>
        <h2 id={props.rl_h2_id}>Results</h2>
        <ul>
            {tracks.map(track => (
                <div id={props.id}>
                    <li key={track.name} className={props.className}>{track.name} </li>
                    <li key={track.artist} className={props.classArtist}>{track.artist} | {track.album}</li> 

                    <FontAwesomeIcon icon={faCirclePlus} className={props.classButton}
                    onClick={props.buttonClick} />
                    
                    <hr></hr>
                </div>
            ))}
        </ul>
    </div>
  )
}

export default SearchResult