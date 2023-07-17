import React, { useState } from 'react'
import { useContext } from 'react'
import { FruitsContext } from '../context/FruitsContext'

import cashOutline from '../assets/cash-outline.svg'
import ConfigBtn from './ConfigBtn'

const FruitCards = (props) => {

    const {data, setData} = useContext(FruitsContext)

    return (
        data.map((fruit, index) => (
            <div className="cards" >
                <div className="fruit" key={index}>
                    <span className="fruit-name">{fruit.nome}</span>
                    <img className="cash-icon" src={cashOutline} />
                    <span className="fruit-price">R${fruit.preco}</span> |
                    <span className="stock"> {fruit.estoque} em estoque</span>
                    <ConfigBtn onClick={props.options} />
                </div>
            </div>
        ))
    )
    
}

export default FruitCards