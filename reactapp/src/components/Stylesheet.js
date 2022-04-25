import React from 'react'
import './myStyle.css'

function Stylesheet(props) {
    let class_Name = props.primary && 'primary'
  return (
    <h1 className={`${class_Name} font-xl`}>Stylesheet</h1>
  )
}

export default Stylesheet