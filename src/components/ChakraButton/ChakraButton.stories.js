import React from 'react'
import { Button } from '@chakra-ui/react'

const meta = {
    title: 'Chakra/Button',
    component: Button,
    args: {
        children: 'Button'
    },
    argTypes: {
        onClick: { action: 'clicked' },
        colorPalette: {
            control: { type: 'select' },
            options: ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink']
        }
    }
}
export default meta

export const Success = {
    args: {
        colorPalette: 'green'
    }
}

export const Danger = {
    args: {
        colorPalette: 'red'
    }
}

