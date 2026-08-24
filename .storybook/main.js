

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react-webpack5",
  "staticDirs": [
    "../public"
  ],
  // Storybook 8+ auto-detects certain dependencies (like @chakra-ui/react)
  // that publish their own official public Storybook, and composes it into
  // the sidebar automatically ("Chakra UI" / AbsoluteCenter / AspectRatio /
  // etc. -- that's Chakra's own component catalog at storybook.chakra-ui.com,
  // not anything in this project). An empty object here didn't work because
  // Storybook merges your `refs` onto its auto-detected defaults rather than
  // replacing them -- merging {} changes nothing. Each ref entry supports a
  // `disable` flag (Storybook deletes any ref whose merged value has
  // disable: true), so targeting this specific key turns it off.
  "refs": {
    "@chakra-ui/react": { "disable": true }
  }
};
export default config;