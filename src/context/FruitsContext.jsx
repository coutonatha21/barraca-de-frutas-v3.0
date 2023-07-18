import { createContext, useState } from 'react'

import React from 'react'

export const FruitsContext = createContext()
export const FruitsProvider = ({ children }) => {

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)
  const [id, setId] = useState(0)
  const [data, setData] = useState([])

  const [successName, setSuccesName] = useState('')

  return (
    <FruitsContext.Provider
      value={{
        id, setId,
        name, setName,
        price, setPrice,
        stock, setStock,
        data, setData,
        successName, setSuccesName,
      }}>
      {children}
    </FruitsContext.Provider>
  )
}