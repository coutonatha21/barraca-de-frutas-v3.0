import React from 'react'

const LargeButton = (props) => {
    return (
        <>
            <div className="fruit-register">
                <div className="fruit-register-btn"
                    style={props.ButtonPosition}
                    onClick={props.onClick}>
                    {props.ButtonTxt}
                </div>
            </div>
        </>
    )
}

export default LargeButton