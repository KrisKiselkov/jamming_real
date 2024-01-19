import React from 'react'

const SearchBar = (props) => {
  return (
    <input 
    className={props.className}
    value={props.value} 
    type={props.type}
    placeholder={props.plchol} 
    onChange={props.onChange}/>
  )
}

export default SearchBar