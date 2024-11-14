export const framework = {
  name: '@storybook/react-vite',
  options: {},
};
export const stories = [
  // Add the path to your stories
  '../src/**/*.stories.mdx',
  '../src/**/*.stories.@(js|jsx|ts|tsx)',
];
export const addons = [
  '@storybook/addon-essentials',
  '@storybook/addon-links',
  '@storybook/addon-interactions',
  '@chromatic-com/storybook',
];
export const docs = {
  autodocs: true,
};
export const typescript = {
  reactDocgen: 'react-docgen-typescript',
};

// module.exports = {
//   framework: {
//     name: '@storybook/react-vite',
//     options: {},
//   },
//   stories: [
//     // Add the path to your stories
//     '../src/**/*.stories.mdx',
//     '../src/**/*.stories.@(js|jsx|ts|tsx)',
//   ],
//   addons: [
//     '@storybook/addon-essentials',
//     '@storybook/addon-links',
//     '@storybook/addon-interactions',
//     '@chromatic-com/storybook',
//   ],

//   docs: {
//     autodocs: true,
//   },

//   typescript: {
//     reactDocgen: 'react-docgen-typescript',
//   },
// };
