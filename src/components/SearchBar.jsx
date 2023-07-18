import React from 'react';

const SearchBar = (props) => {
  const handleChange = (event) => {
    const { value } = event.target;
    props.onChange(value);
  };

  return (
    <>
      <form className="search-bar">
        <input
          onChange={handleChange}
          id="inputEntrada"
          className="search"
          type="text"
          placeholder="Pesquisar Fruta"
        />
      </form>
    </>
  );
};

export default SearchBar;
