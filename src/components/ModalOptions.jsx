import React from 'react'

const ModalOptions = (props) => {

    if (props.isOpen) {
        return (
            <>
                <div className="opt">
                    <div className="opt-spans">
                        <div className="div-edit">
                            <span className="span-edit" onClick={() => props.onEdit(props.fruit)}>Editar Fruta</span>
                        </div>
                        <div className="div-delete">
                            <span className="span-delete" onClick={() => props.onDelete(props.fruit)}>Excluir Fruta</span>
                        </div>
                    </div>
                </div>
            </>
        ) 
    }
    return null 
} 

export default ModalOptions 