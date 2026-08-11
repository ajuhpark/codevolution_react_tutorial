import React from 'react'
import './Input.css'

function Input(props) {
    // these are props. for the variant prop, the default value is going to be primary.
    const { size = 'medium', ...rest } = props
    return (
        <input className={`input ${size}`} {...rest}/>
  )
}

export default Input
