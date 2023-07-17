import React from 'react'
import IoClose from '../assets/ioClose.svg'
import { useNavigate } from 'react-router-dom'

const RegisterTittle = (props) => {

    const nav = useNavigate();

    function AddFruit() {
        // if(list < 1){
        //   return nav("/")
        // }else{
        //   return nav("/fruit-list")
        // }
        return nav("/fruit-list")
    }

    return (
        <>
            <div className='tit-page' >
                <h1 className='tit-cad'>{props.tittle}</h1>
                <img className='close-btn' onClick={AddFruit} src={IoClose} />
            </div>
        </>
    )
}

export default RegisterTittle