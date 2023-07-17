import React from 'react'
import RegisterCard from '../components/RegisterCard'
import RegisterTittle from '../components/RegisterTittle'
import LargeButton from '../components/LargeButton'

const EditFruit = () => {
  return (
    <>
      <RegisterTittle tittle='Editar Fruta' />
      <RegisterCard
        PlaceHolderMsg='Nome da fruta'
        Icon='input-name'
      />
      <RegisterCard
        PlaceHolderMsg='Preço da fruta (Kg)'
        Icon='input-price'
      />
      <RegisterCard
        PlaceHolderMsg='Quantidade em estoque'
        Icon='input-stock'
      />
      <LargeButton ButtonTxt='Atualizar Fruta' />
    </>
  )
}

export default EditFruit