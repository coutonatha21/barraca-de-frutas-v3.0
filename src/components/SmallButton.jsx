import React from 'react'
import { useNavigate } from 'react-router-dom';
import IoAddOutline from '../assets/IoAddOutline.svg'

const SmallButton = () => {

    const nav = useNavigate();

    return (
        <>
            <div className="btn-add">
                <div className="container-add" onClick={() => { return nav("/create") }}>
                    <img className="img-add" src={IoAddOutline}  />
                </div>
            </div>
        </>
    )
}

export default SmallButton