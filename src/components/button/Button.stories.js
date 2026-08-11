import React from 'react'
import Button from './Button'

const meta = {
    title: 'Button',
    component: Button
}

export default meta

// react component. the function returns the button with the text as primary and the variant is primary. 
export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>