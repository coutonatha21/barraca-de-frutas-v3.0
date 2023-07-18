import React, { useContext, useState, useEffect } from 'react';
import { FruitsContext } from '../context/FruitsContext';
import { useNavigate } from 'react-router-dom';

import cashOutline from '../assets/cash-outline.svg';
import ConfigBtn from './ConfigBtn';
import ModalOptions from './ModalOptions';
import ModalDelete from './ModalDelete';

const FruitCards = () => {

    const nav = useNavigate();

    const { data, setData } = useContext(FruitsContext);
    const { newData, setNewData } = useContext(FruitsContext);
    const [optModal, setOptModal] = useState(false)
    const [delModal, setDelModal] = useState(false)
    const [selectedFruit, setSelectedFruit] = useState(null);

    const handleOptionsClick = (fruit) => {
        optModal == false ? setOptModal(true) : setOptModal(false)
        setSelectedFruit(fruit)
    }

    const handleEditFruit = (fruit) => {
        nav("/edit", { state: { fruit } });
    };


    const handleDeleteFruit = () => {
        setDelModal(true)
    }

    const handleconfirmDel = (fruit) => {
        const auxData = [...data]
        auxData.splice(fruit, 1)
        setData(auxData)
        setOptModal(false)
        setDelModal(false)
    }

    const handleDenyDel = () => {
        setOptModal(false)
        setDelModal(false)
    }

    return (
        <>
            {data.map((fruit) => (
                <div className="cards" key={fruit.id}>
                    <div className="fruit">
                        <span className="fruit-name">{fruit.nome}</span>
                        <img className="cash-icon" src={cashOutline} />
                        <span className="fruit-price">R${fruit.preco}</span> |
                        <span className="stock"> {fruit.estoque} em estoque</span>
                        <ConfigBtn
                            onClick={() => {
                            handleOptionsClick(fruit);
                            setSelectedFruit(fruit);
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
                onConfirmDel={handleconfirmDel}
                onDenyDel={handleDenyDel}
            />
        </>
    );
};

export default FruitCards;