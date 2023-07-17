import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { FruitsContext } from '../context/FruitsContext'
import uuid from 'react-uuid'

import RegisterCard from '../components/RegisterCard'
import RegisterTittle from '../components/RegisterTittle'
import LargeButton from '../components/LargeButton'

const CreateFruit = () => {

  const nav = useNavigate()
  const newId = uuid()

  const { name, setName } = useContext(FruitsContext)
  const { price, setPrice } = useContext(FruitsContext)
  const { stock, setStock } = useContext(FruitsContext)
  const { id, setId } = useContext(FruitsContext)
  const { data, setData } = useContext(FruitsContext)
  const { successName, setSuccesName } = useContext(FruitsContext)

  function handleAddFruit() {
    if (name == "" || price == 0 || stock == 0) {
      alert("Preencha todos os campos para continuar!")
    } else {

      setData([...data, { nome: name, preco: price, estoque: stock, id: newId }])
      setSuccesName(name)
      setName(''), setPrice(0), setStock(0), setId(0)
      return nav("/success")
    }
  }

  return (
    <>
      <RegisterTittle tittle='Cadastrar Fruta' />
      <form>
        <RegisterCard
          PlaceHolderMsg='Nome da fruta'
          Icon='input-name'
          type='text'
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <RegisterCard
          PlaceHolderMsg='Preço da fruta (Kg)'
          Icon='input-price'
          type='number'
          value={price}
          onChange={event => setPrice(Number(event.target.value))}
        />
        <RegisterCard
          PlaceHolderMsg='Quantidade em estoque'
          Icon='input-stock'
          type='number'
          value={stock}
          onChange={event => setStock(Number(event.target.value))}
        />
        <LargeButton
          ButtonTxt='Cadastrar Fruta'
          onClick={handleAddFruit}
        />
      </form>
    </>
  )
}

export default CreateFruit