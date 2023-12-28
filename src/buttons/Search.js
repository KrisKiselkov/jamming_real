import React from 'react'

const Search = (props) => {
  return (
    <button className={props.className} type={props.type}>{props.children}</button>
  )
}

export default Search