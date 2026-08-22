import React from 'react'
import { Button } from '@chakra-ui/react'

const meta = {
    title: 'Chakra/Button',
    component: Button
}
export default meta

export const Success = () => <Button colorPalette='green'>Success</Button>
export const Danger = () => <Button colorPalette='red'>Danger</Button>
