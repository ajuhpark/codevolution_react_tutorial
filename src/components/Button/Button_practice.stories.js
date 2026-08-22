// React Storybook Tutorial - 4.4 - Using args in V6

import React from 'react'
import Button from './Button'
import Center from '../Center/Center'

const meta = {
    title: 'Button Practice',
    component: Button,
    // Can specify args at the component (meta) level -- these act as defaults
    // for every story exported below. Storybook merges args in this order:
    //   1. meta.args      (component-level defaults, set here)
    //   2. story.args     (set on an individual story, e.g. PrimaryA.args)
    // A key set in a story's own .args overrides the meta-level value for that
    // story only; a key left out of story.args (like `children` below, once
    // commented out) falls back to this default instead.
    args: {
        children: 'Button'
    }
}

export default meta

// react component. the function returns the button with the text as primary and the variant is primary. 
export const Primary = () => <Center><Button variant='primary'>Primary</Button></Center>
export const Secondary = () => <Center><Button variant='secondary'>Secondary</Button></Center>
export const Success = () => <Center><Button variant='success'>Success</Button></Center>
export const Danger = () => <Center><Button variant='danger'>Danger</Button></Center>

// React Storybook Tutorial - 4.4 - Using args in V6
/* 
So we're creating a template.
The const Template is a function that receives args as its argument and it returns the button component spreading out the args object. That's the template for the button component. 
*/
// Template is a single, reusable render function shared by every "args" story below.
// Whatever `args` object Storybook hands it gets spread as props onto <Button>,
// so we don't have to write a separate arrow function per variant.
const Template = args => <Button {...args}/>

// Now creating a primary variant.
// We do Template.bind({}) instead of just reusing `Template` directly.
// Function.prototype.bind() normally locks in `this`, but that's not why it's used here
// (the {} argument is just a throwaway `this` value that's never read).
// The real purpose: .bind({}) returns a brand-new function object that behaves like
// Template but is a distinct reference. Storybook's CSF v2 pattern works by attaching
// a unique `.args` property directly onto each exported story function -- so each
// story needs its OWN function object to hang its own `.args` off of. If every story
// just pointed at the same `Template` function, assigning `.args` to it would
// overwrite the same property each time instead of giving each story its own config.
export const PrimaryA = Template.bind({})
// args is the object of props we want this particular story to render with --
// Storybook will call PrimaryA(args), which runs Template(args) under the hood,
// spreading `variant` and `children` onto <Button>.
PrimaryA.args = {
    variant: 'primary', 
    // children left unset here -> falls back to meta.args.children ('Button')
    // children: 'Primary args'
}

// We can also reuse/compose args instead of retyping them.
export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    // Spread PrimaryA's args first (copies variant: 'primary' -- note
    // PrimaryA.args has no children key right now, so there's nothing to copy),
    // then override just the `children` key with new text.
    ...PrimaryA.args,
    // children left unset here too -> also falls back to meta.args.children,
    // so LongPrimaryA currently renders identically to PrimaryA.
    // children: 'Long Primary Args'
}


// Same bind pattern again: a fresh function object with its own `.args`,
// this time for the "secondary" button variant.
export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'secondary', 
    // children left unset here -> falls back to meta.args.children ('Button')
    // children: 'Secondary args'
}