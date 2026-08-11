import React from 'react'
import './Button.css'

function Button(props) {
    // these are props. for the variant prop, the default value is going to be primary.
    const { variant = 'primary', children, ...rest } = props
  return (
    <button className={`button ${variant}`} {...rest}>
        {children}
    </button>
  )
}

export default Button
