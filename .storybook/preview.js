import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../theme/theme.js';

const getTheme = mode => {
  const { modes, ...defaultTheme } = theme;
  if (modes[mode]) {
    const mergedTheme = merge({}, defaultTheme, {
      colors: modes[mode].colors || defaultTheme.colors,  // get(obj, path, default value)
      shadows: modes[mode].shadows || defaultTheme.shadows
    });
    return mergedTheme;
  } else {
    return theme;
  }
}

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    {storyFn()}
  </ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
