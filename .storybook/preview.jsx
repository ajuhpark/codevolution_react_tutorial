/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
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