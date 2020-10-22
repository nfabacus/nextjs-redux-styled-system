import React, { useState } from 'react';
import { get, merge }  from 'lodash';
import { ThemeProvider } from 'emotion-theming';
import { Provider } from 'react-redux';
import { useStore } from '../store';
import theme from '../theme/theme.js';
import './app.css';

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

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const [ mode, setMode ] = useState('light');
  const selectedTheme = getTheme(mode);

  return (
    <Provider store={store}>
      <ThemeProvider theme={selectedTheme} >
        <Component mode={mode} setMode={setMode} {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
