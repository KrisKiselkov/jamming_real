import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';



const Playlist = (props) => {

  return (
    <div id={props.pl_id} onMouseOver={props.onMouseOver}>
        <h2 id={props.pl_h2_id}>Save To Playlist</h2>
        <input id={props.plSrId} 
        type={props.type} 
        
        placeholder={props.plchol} 
        value={props.valueName}
        onChange={props.onChange} 
        onClick={props.onClick}/>
        
        {console.log(props.savedTracks)}
        <div>
          {props.savedTracks.map((svTrack, id) => (
            
            <div key={svTrack.id}>
              <ul id={props.pltrId}
              key={props.valuePlaylist}>

                <li key={svTrack.name}
                className={props.className}>{svTrack.name}</li>

                <li key={svTrack.artist} 
                className={props.classArtist}>{svTrack.artist} | {svTrack.album}</li>

                <FontAwesomeIcon icon={faCircleXmark}
                className={props.XButtonId}
                onClick={() => props.removeButton(id)}/>

                <hr></hr>
              </ul>
            </div>
          ))}
        </div> 

        <button id={props.buttonId}>Save to Spotify</button>
    </div>  
  )
}

export default Playlist;