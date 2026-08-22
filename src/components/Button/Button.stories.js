// React Storybook Tutorial - 4.4 - Using args in V6
// Rewritten using CSF3 (Component Story Format 3) -- the modern, object-based
// story syntax. No Template/.bind({}) needed here; see notes below on why.

import React from 'react'
import Button from './Button'
import Center from '../Center/Center'

const meta = {
    // title controls where this file's stories show up in the sidebar --
    // just a navigation path string (e.g. 'Components/Button' would nest it).
    // It's also used to build each story's unique id: `${title}--${storyName}`,
    // so two files sharing the same title + story name will collide (this is
    // what caused the "Duplicate stories with id: button--primary" error).
    title: 'Button',
    // component is a reference to the actual Button function (imported above),
    // not JSX. Storybook uses this to know what to render for stories below
    // that don't define their own `render` function, and to auto-generate
    // controls/docs from the component's props.
    component: Button, 
    // args set here are component-level defaults, merged into every story
    // below. A story can override any of these keys in its own `args`; a key
    // left out of a story's args (like `children`, below) falls back to this.
    args: {
        children: 'Button'
    },
    // argTypes describes HOW each arg should be controlled in the Controls
    // panel below the preview -- Storybook infers a plain text input by
    // default for a string like `variant`, since it has no way to know the
    // valid values on its own. Setting a 'select' control here (with the
    // matching CSS classes in Button.css as the options) turns that text
    // field into a dropdown, so you can't type a variant that doesn't exist.
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'danger']
        }
    },
    // decorators wrap every story in this file with extra markup, without
    // changing the story's own args/render. Each decorator is a function
    // that receives the Story (the already-resolved story render function)
    // and returns JSX wrapping it -- here, every Button story renders inside
    // <Center>, so <Center>{props.children}</Center> ends up wrapping
    // whatever <Button variant='...'>...</Button> the story produces.
    decorators: [Story => <Center><Story/></Center>]
}

// The default export IS the meta for this file. Storybook statically scans
// each *.stories.js file: whatever is the default export becomes that file's
// meta, and every OTHER named export in the same file is automatically
// treated as a story belonging to it. That's the entire mechanism that ties
// Primary/Secondary/Success/Danger below to 'Button' -- pure file colocation,
// nothing inside these objects references meta directly.
export default meta 

// Each of these is a CSF3 story object -- just plain data, not a component
// or function. Storybook reads `args`, merges it on top of meta.args
// (variant here, children inherited as 'Button' from meta), and since none
// of these define their own `render`, it renders meta.component (Button)
// with that merged args object -- effectively <Button variant='primary'>Button</Button>.
export const Primary = {
    args: {
        variant: 'primary'
    }
}

export const Secondary = {
    args: {
        variant: 'secondary'
    }
}

export const Success = {
    args: {
        variant: 'success'
    }
}

export const Danger = {
    args: {
        variant: 'danger'
    }
}