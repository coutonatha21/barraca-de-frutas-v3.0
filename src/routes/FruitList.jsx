import React, { useState, useContext } from 'react'
import { FruitsContext } from '../context/FruitsContext'

import SearchBar from '../components/SearchBar'
import FruitCards from '../components/FruitCards'
import SmallButton from '../components/SmallButton'
import ModalOptions from '../components/ModalOptions'
import { useNavigate } from 'react-router-dom'

const FruitList = () => {

  const { data } = useContext(FruitsContext)
  const [filteredData, setFilteredData] = useState(data)

  const handleSearchChange = (searchTerm) => {
    const filteredFruits = data.filter((fruit) =>
      fruit.nome.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredData(filteredFruits)
  }
  
  return (
    <>
      <SearchBar onChange={handleSearchChange} />
      <section className="menu">
        <FruitCards data={filteredData} />
        <SmallButton />
        <ModalOptions />
      </section>
    </>
  )
}

export default FruitList  
