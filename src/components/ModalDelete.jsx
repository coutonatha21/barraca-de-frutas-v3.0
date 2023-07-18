import React from 'react'

const ModalDelete = (props) => {
  if (props.isOpen) {
    return (
      <>
        <div className='modal-delete'>
          <h1 className='tit-delete'>Excluir Fruta</h1>
            <span className="text-delete">Tem certeza que quer excluir essa fruta? <br />
              Você perderá todas as informação cadastradas sobre ela.</span>
          <div className='delete-buttons'>
            <button onClick={() => props.onDenyDel()} className='s-del-button'>Não</button>
            <button onClick={() => props.onConfirmDel(props.fruit)} className='p-del-button' >Sim, excluir</button>
          </div>
        </div>
      </>
    )
  }
}

export default ModalDelete