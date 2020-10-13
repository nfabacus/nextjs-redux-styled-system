import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../theme/theme.js';

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    {storyFn()}
  </ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
