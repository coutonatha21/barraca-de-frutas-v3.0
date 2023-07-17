import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { FruitsContext } from '../context/FruitsContext'

import IoClose from '../assets/IoClose.svg'
import PhoneHand from '../assets/undraw_confirmed_re_sef7.svg'
import LargeButton from '../components/LargeButton'

import CreateFruit from './CreateFruit'

const Success = () => {

  const { successName, setSuccesName } = useContext(FruitsContext)
  const nav = useNavigate();

  return (
    <>
      <div className='tit-page' >
        <h1 className='tit-cad'></h1>
        <img className='close-btn' onClick={() => { return nav("/fruit-list") }} src={IoClose} />
      </div>

      <div className='img-cad'>
        <img src={PhoneHand} />
      </div>

      <div className='div-success-txt'>
        <h1 className='h1-success-txt'>Fruta Cadastrada</h1>
        <p className='p-success-txt'>Você cadastrou a fruta 
          <span style={{ fontWeight: 'bold', color: '#DA0D1E' }}> {successName} </span> com sucesso!
        </p>
      </div>

      <LargeButton
        ButtonTxt='Voltar ao início'
        onClick={() => { return nav("/fruit-list") }} />
    </>
  )
}

export default Success