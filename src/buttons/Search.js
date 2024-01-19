import React from 'react'

const Search = (props) => {
  return (
    <button id={props.searchButton} 
    type={props.type} 
    onClick={props.searchClick}>{props.children}</button>
  )
}

export default Search