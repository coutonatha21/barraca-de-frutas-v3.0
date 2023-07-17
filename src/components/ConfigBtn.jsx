import React from 'react'
import IoCogOutline from '../assets/IoCogOutline.svg'

const ConfigBtn = (props) => {
  return (
    <img className="btn-config" src={IoCogOutline} onClick={props.onClick} />
  )
}

export default ConfigBtn