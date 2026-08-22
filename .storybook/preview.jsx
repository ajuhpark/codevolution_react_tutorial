/** @type { import('@storybook/react-webpack5').Preview } */
import React from 'react'
// Chakra UI v3 renamed the old `ThemeProvider` (from the now-removed
// @chakra-ui/core package) to `ChakraProvider`, and folds the old separate
// `CSSReset` component's job into ChakraProvider itself -- no extra import
// needed for that anymore. `defaultSystem` is Chakra's out-of-the-box theme;
// swap it for a custom system (via createSystem) later if you want to
// customize colors/fonts/etc.
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

const preview = {
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