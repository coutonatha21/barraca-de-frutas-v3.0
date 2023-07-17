import React from 'react'

const SearchBar = () => {
    return (
        <>
            <form className="search-bar" >
                <input id="inputEntrada" 
                    className="search" type="text" placeholder="Pesquisar Fruta" />
            </form>
        </>
    )
}

export default SearchBar