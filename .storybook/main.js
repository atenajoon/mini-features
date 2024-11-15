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
  '@chromatic-com/storybook',
];
export const docs = {
  autodocs: true,
};

// Add this part to customize Vite config
export const viteFinal = (config) => {
  // Example: Add a custom alias
  config.resolve.alias = {
    ...config.resolve.alias,
    '@ui': '/src/ui',
    '@styles': '/src/styles',
  };

  // Example: Add a plugin
  // config.plugins.push(yourCustomPlugin());
  return config;
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
//     '@chromatic-com/storybook',
//   ],

//   docs: {
//     autodocs: true,
//   },
// };
