Storybook 5.2 should [add hooks support to stories](https://github.com/storybookjs/storybook/pull/7571) but I cannot get it to work.

This repository is a barebones CRA with `@storybook/react@next` (5.2.0-beta.30) and `node-sass` to limit any other potential causes from my client repos.

## Problem

`yarn storybook` shows an eslint warning for react-hooks/rules-of-hooks on initial load.

When a `.stories.js` file with a hook is edited and saved storybook will hot reload with the same eslint-loader warning in the background (terminal).

When any other `.stories.js` file or any normal React component that is imported in to any story is edited and saved, storybook will hot reload with an eslint-loader error (terminal & preview).

## Test

1. Clone this repo
2. `yarn install`
3. `yarn storybook`
  * Expected behaviour:
    * Storybook will load successfully with an eslint warning for react-hooks/rules-of-hooks in the terminal.
4. Modify `/src/components/Circle/Circle.stories.js` and save the file.
  * Expected behaviour:
    * Storybook will reload successfully with the same error as above.
5. Modify `/src/components/Circle/index.js`, `/src/components/Square/index.js`, or `/src/components/Square/Square.stories.js` and save the file.
  * Expected behaviour:
    * Storybook will reload unsuccessfully with an eslint error for react-hooks/rules-of-hooks in both the terminal and the preview window.
