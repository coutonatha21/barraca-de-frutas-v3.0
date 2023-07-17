import React from 'react'
import { useNavigate } from 'react-router-dom'

import LargeButton from '../components/LargeButton'

const Home = () => {

  const nav = useNavigate();

  return (
    <>
      <div className="fruit-register">
        <span className="fruit-register-tit">Cadastre sua primeira fruta</span>
      </div>
      <LargeButton
        ButtonTxt='Cadastrar Fruta'
        onClick={() => { return nav("create") }}
      />
    </>
  )
}

export default Home