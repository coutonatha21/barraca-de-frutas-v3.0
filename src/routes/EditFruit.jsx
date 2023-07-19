import React, { useContext, useState } from 'react' 
import { FruitsContext } from '../context/FruitsContext' 
import { useLocation, useNavigate } from 'react-router-dom' 

import RegisterCard from '../components/RegisterCard' 
import RegisterTittle from '../components/RegisterTittle' 
import LargeButton from '../components/LargeButton' 

const EditFruit = () => {

  const nav = useNavigate()
  
  const location = useLocation() 
  const { fruit } = location.state 

  const { data, setData } = useContext(FruitsContext) 

  const [newName, setNewName] = useState(fruit.nome) 
  const [newPrice, setNewPrice] = useState(fruit.preco) 
  const [newStock, setNewStock] = useState(fruit.estoque) 

  const handleUpdate = () => {
    const updatedFruit = {
      ...fruit,
      nome: newName,
      preco: newPrice,
      estoque: newStock,
    } 
    const updatedData = data.map((fruit) =>
      fruit.id === updatedFruit.id ? updatedFruit : fruit
    ) 
    setData(updatedData) 
    nav('/fruit-list') 
  } 

  return (
    <>
      <RegisterTittle tittle="Editar Fruta" />
      <RegisterCard
        PlaceHolderMsg="Nome da fruta"
        Icon="input-name"
        type='text'
        newValue={newName}
        onChange={(event) => setNewName(event.target.value)}
      />
      <RegisterCard
        PlaceHolderMsg="Preço da fruta (Kg)"
        Icon="input-price"
        type='number'
        newValue={newPrice}
        onChange={(event) => setNewPrice(event.target.value)}
      />
      <RegisterCard
        PlaceHolderMsg="Quantidade em estoque"
        Icon="input-stock"
        type='number'
        newValue={newStock}
        onChange={(event) => setNewStock(event.target.value)}
      />
      <LargeButton ButtonTxt="Atualizar Fruta" onClick={handleUpdate} />
    </>
  ) 
} 

export default EditFruit 
