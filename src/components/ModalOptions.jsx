import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { FruitsContext } from '../context/FruitsContext'

const ModalOptions = (props) => {

    const nav = useNavigate()

    (!props.isOpen)
    if (props.IsOpen) {
        return (
            <>
                <div className="opt">
                    <div className='opt-spans'>
                        <div className='div-edit'>
                        <span className='span-edit' onClick={() => {return nav("/edit")}}>Editar Fruta</span>
                        </div>
                        <div className='div-delete' onClick={() => {}}>
                        <span className='span-delete'>Excluir Fruta</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return null
}

export default ModalOptions