

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": "@storybook/react-webpack5",
  "staticDirs": [
    "../public"
  ],
  // Storybook 7+ made Docs pages opt-in instead of automatic (they used to
  // be generated for every component by default, back in v6). Setting this
  // to true restores that -- every *.stories.js file with a meta gets its
  // own auto-generated Docs tab (the args table + "Show code" view).
  "docs": {
    "autodocs": true
  }
};
export default config;