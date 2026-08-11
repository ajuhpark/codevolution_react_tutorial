import React from 'react'
import Input from './Input'

const meta = {
    title: 'Form/Input',
    component: Input
}

export default meta 

export const Small = () => <Input size='small' placeholder='Small Size' />
export const Medium = () => <Input size='medium' placeholder='Medium Size' />
export const Large = () => <Input size='large' placeholder='Large Size' />