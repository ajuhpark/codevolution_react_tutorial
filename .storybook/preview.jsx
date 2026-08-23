/** @type { import('@storybook/react-webpack5').Preview } */
import React from 'react'
// Chakra UI v3 renamed the old `ThemeProvider` (from the now-removed
// @chakra-ui/core package) to `ChakraProvider`, and folds the old separate
// `CSSReset` component's job into ChakraProvider itself -- no extra import
// needed for that anymore. `defaultSystem` is Chakra's out-of-the-box theme;
// swap it for a custom system (via createSystem) later if you want to
// customize colors/fonts/etc.
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
// @storybook/addon-console was deprecated in Storybook 9 -- its job (route
// console.log/warn calls into the Actions panel) now ships natively, via
// spyOn from storybook/test (already bundled with the `storybook` package,
// no extra install needed) used inside a `beforeEach` hook below.
import { spyOn } from 'storybook/test'

const preview = {
  // beforeEach runs before every story renders, and receives that story's
  // context -- title is the component's title (e.g. 'Chakra/Button'), name
  // is the individual story's name (e.g. 'Log'). Building the mock name
  // from these reproduces the old withConsole addon's "Chakra/Button/Log:"
  // prefix in the Actions panel, instead of a fixed generic label.
  beforeEach: ({ title, name }) => {
    spyOn(console, 'log').mockName(`${title}/${name}: console.log`)
    spyOn(console, 'warn').mockName(`${title}/${name}: console.warn`)
  },
  // The current (Storybook 8+) way to turn on autodocs project-wide: a
  // 'autodocs' tag here applies to every story that doesn't opt out, and
  // Storybook generates a Docs page for any component with at least one
  // tagged story. (The old `docs: { autodocs: true }` option in main.js
  // no longer does anything in this version -- that was the pre-8 API.)
  tags: ['autodocs'],
  // Global decorator: wraps EVERY story in the project with ChakraProvider,
  // since any story using a Chakra component needs that provider's context
  // available somewhere above it in the tree.
  decorators: [
    Story => (
      <ChakraProvider value={defaultSystem}>
        <Story/>
      </ChakraProvider>
    )
  ],
  parameters: {
    // this is taken from the docs to reorder it. 
    // React Storybook Tutorial - 4.2 - Renaming & Sorting Stories in V6
    actions: { argTypesRegex: "^on[A-Z].*"},
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;