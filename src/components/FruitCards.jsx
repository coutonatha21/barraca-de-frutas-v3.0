import React, { useState } from 'react'
import { useContext } from 'react'
import { FruitsContext } from '../context/FruitsContext'

import cashOutline from '../assets/cash-outline.svg'
import ConfigBtn from './ConfigBtn'

const FruitCards = (props) => {

    const {data, setData} = useContext(FruitsContext)
    console.log(data)

    return (
        data.map((fruit) => (
            <div key={fruit.id} className="cards" >
                <div className="fruit">
                    <span className="fruit-name">{fruit.nome}</span>
                    <img className="cash-icon" src={cashOutline} />
                    <span className="fruit-price">R${fruit.preco}</span> |
                    <span className="stock"> {fruit.estoque} em estoque</span>
                    <ConfigBtn onClick={props.options} onPress={() => {setData(fruit)}}/>
                    <p>{}</p>
                </div>
            </div>
        ))
    )
    
}

export default FruitCards