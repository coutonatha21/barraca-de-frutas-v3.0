import React, { useState } from 'react' 

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState('') 

  const handleChange = (event) => {
    const { value } = event.target 
    setSearchValue(value) 
    props.onChange(value) 
  } 

  return (
    <>
      <form className="search-bar">
        <input
          onChange={handleChange}
          id="inputEntrada"
          className="search"
          type="text"
          placeholder="Pesquisar Fruta"
          value={searchValue}
        />
      </form>
    </>
  ) 
} 

export default SearchBar 
