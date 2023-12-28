import React from 'react'

const SearchBar = (props) => {
  return (
    <input className={props.className} type={props.type} placeholder={props.plchol}/>
  )
}

export default SearchBar