import React from 'react'

const RegisterCard = (props) => {
    return (
        <>
            <div className='cad-cards'>
                <div className='div-name'>
                    <input className={props.Icon} style={{fontWeight: '550'}} onChange={props.onChange} type={props.type} placeholder={props.PlaceHolderMsg} />
                </div>
            </div>
        </>
    )
}

export default RegisterCard