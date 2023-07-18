import React from 'react'

const RegisterCard = (props) => {

    return (
        <>
            <div className='cad-cards'>
                <div className='div-name'>
                    <input value={props.newValue}
                        onChange={props.onChange}
                        type={props.type}
                        placeholder={props.PlaceHolderMsg}
                        className={props.Icon} style={{ fontWeight: '550' }} />
                </div>
            </div>
        </>
    )
}

export default RegisterCard