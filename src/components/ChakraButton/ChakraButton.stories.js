import { Button } from '@chakra-ui/react'

const meta = {
    title: 'Chakra/Button',
    component: Button,
    // args = the actual VALUES passed as props when a story renders.
    // children: 'Button' here is a literal value -- it's what really gets
    // passed to <Button> as its children prop.
    args: {
        children: 'Button'
    },
    // argTypes = metadata DESCRIBING each prop, not a value itself. It tells
    // Storybook how to treat/display a prop, it doesn't set what that prop
    // equals for any given story.
    argTypes: {
        // onClick has no matching entry in `args` above -- no value is ever
        // supplied for it. argTypes alone is enough here: `action: 'clicked'`
        // tells Storybook to auto-generate a spy function and pass it as the
        // onClick prop, logging to the Actions panel whenever it fires.
        onClick: { action: 'clicked' },
        // colorPalette also isn't set in meta.args (each story below sets
        // its own value). This argTypes entry just describes HOW to control
        // it in the UI -- render a dropdown ('select'), restricted to these
        // specific options -- rather than the default free-text input.
        colorPalette: {
            control: { type: 'select' },
            options: ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink']
        }
    }
}
export default meta

export const Success = {
    // 'green' is the VALUE (args); it must be one of the options listed in
    // meta.argTypes.colorPalette above (the schema/description) to make
    // sense as a selectable dropdown choice, but nothing enforces that at
    // the JS level -- args and argTypes are just two separate objects that
    // Storybook cross-references when rendering the Controls panel.
    args: {
        colorPalette: 'green'
    }
}

export const Danger = {
    args: {
        colorPalette: 'red'
    },
    // argTypes also merges meta -> story, same way args does. This adds
    // onMouseOver tracking just for Danger, on top of the onClick tracking
    // every story already gets from meta.argTypes -- Success stays
    // onClick-only, since it doesn't declare this itself.
    argTypes: {
        onMouseOver: { action: 'hovered' }
    }
}

export const Log = {
    args: {
        colorPalette: 'blue',
        children: 'Log',
        // A function works fine as an args value -- it's just a plain JS
        // object property. This overrides meta.argTypes.onClick's
        // auto-generated action spy (that default only kicks in when a
        // story doesn't supply its own onClick value), so clicking this
        // button runs this console.log directly instead of logging to the
        // Actions panel -- same behavior as the tutorial's
        // onClick={() => console.log('Button clicked')}.
        onClick: () => console.log('Button clicked')
    }
}