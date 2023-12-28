import React from 'react'

const Playlist = (props) => {

  return (
    <div id={props.pl_id} onMouseOver={props.onMouseOver}>
        <h2 id={props.pl_h2_id}>Save To Playlist</h2>
        <input id={props.id} type={props.type} placeholder={props.plchol} />
    </div>  
  )
}

export default Playlist