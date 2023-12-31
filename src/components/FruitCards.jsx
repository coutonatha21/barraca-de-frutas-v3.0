import React, { useContext, useState, useEffect } from 'react'
import { FruitsContext } from '../context/FruitsContext'
import { useNavigate } from 'react-router-dom'

import cashOutline from '../assets/cash-outline.svg'
import ConfigBtn from './ConfigBtn'
import ModalOptions from './ModalOptions'
import ModalDelete from './ModalDelete'

const FruitCards = ({ data }) => {

    const nav = useNavigate()

    const { setData } = useContext(FruitsContext)
    const [optModal, setOptModal] = useState(false)
    const [delModal, setDelModal] = useState(false)
    const [selectedFruit, setSelectedFruit] = useState(null)
    const [filteredData, setFilteredData] = useState(data)

    useEffect(() => {
        setFilteredData(data)
    }, [data])

    const handleOptionsClick = (fruit) => {
        optModal === false ? setOptModal(true) : setOptModal(false)
        setSelectedFruit(fruit)
    }

    const handleEditFruit = (fruit) => {
        nav('/edit', { state: { fruit } })
    }

    const handleDeleteFruit = () => {
        setDelModal(true)
    }

    const handleConfirmDel = () => {
        const updatedData = data.filter((f) => f.id !== selectedFruit.id)
        setData(updatedData)
        setFilteredData(updatedData)
        setOptModal(false)
        setDelModal(false)
    }

    const handleDenyDel = () => {
        setOptModal(false)
        setDelModal(false)
    }
    return (
        <>
            {filteredData.map((fruit) => (
                <div className="cards" key={fruit.id}>
                    <div className="fruit">
                        <span className="fruit-name">{fruit.nome}</span>
                        <img className="cash-icon" src={cashOutline} alt="cash icon" />
                        <span className="fruit-price">R${fruit.preco}</span> |
                        <span className="stock"> {fruit.estoque} em estoque</span>
                        <ConfigBtn
                            onClick={() => {
                                handleOptionsClick(fruit)
                                setSelectedFruit(fruit)
                            }}
                        />
                    </div>
                </div>
            ))}
            <ModalOptions
                isOpen={optModal}
                fruit={selectedFruit}
                onEdit={handleEditFruit}
                onDelete={handleDeleteFruit}
            />
            <ModalDelete
                isOpen={delModal}
                fruit={selectedFruit}
                onConfirmDel={handleConfirmDel}
                onDenyDel={handleDenyDel}
            />
        </>
    )
}

export default FruitCards  