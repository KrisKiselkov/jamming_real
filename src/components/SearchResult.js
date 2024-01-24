import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';




const SearchResult = (props) => {
  return (
    <div id={props.rl_id}  onMouseOver={props.resultMouseOver}>
        <h2 id={props.rl_h2_id}>Results</h2>
        <div id={props.resultTracks}>
            {props.tracks.map(track => (
                <ul key={track.id} className={track.hidden ? 'hide' : ''}
                id={props.id}>
                    <li key={track.name} 
                    className={props.className}>{track.name} </li>
                    <li key={track.artist} 
                    className={props.classArtist}>{track.artist} | {track.album}</li> 

                    <FontAwesomeIcon icon={faCirclePlus} 
                    className={props.classButton}
                    onClick={() => props.buttonClick(track)} />
                    
                    <hr></hr>
                </ul>
            ))}
        </div>
    </div>
  )
}

export default SearchResult