import React from 'react'
import { Large } from '../Input/Input.stories'
import Button from '../Button/Button'

const meta = { 
    title: 'form/Subscription'
}
export default meta

export const PrimarySubscription = () => (
    <>
        <Large />
        <Button variant='primary'>Primary</Button>
    </>
)