// React Storybook Tutorial - 5 - Decorators
// can type in rfce 

import React from 'react'
import './Center.css'


function Center(props){
    return (
        <div className='center'>
            {props.children}
        </div>
    )
}

export default Center