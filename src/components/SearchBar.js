import React, { useState } from "react";

const SearchBar = (props) => {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const searchButton = () => {
    props.onChange(text);
  };


  return (
    <>
      <input 
      className={props.className}
      placeholder={props.plchol} 
      onChange={handleTextChange}/>

      <br></br>

      <button id={props.searchButton} 
      type={props.buttonType} 
      onClick={searchButton}>Search</button>
    </>
  )
}

export default SearchBar