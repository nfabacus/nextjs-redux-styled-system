import { ThemeProvider } from 'emotion-theming';
import { Provider } from 'react-redux';
import { useStore } from '../store';

import theme from '../theme/theme.js';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
