// import { base } from '@theme-ui/presets';

export const base = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],  // applies to margin or padding (e.g. m={2} p={3})
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.5,
  },
  borderWidths: [0, 1, 2, 4, 10],
  radii: [0, 4, 5],
  colors: {
    text: '#000',
    background: '#ffffff',
    primary: '#07c',
    secondary: '#30c',
    danger: '#ff0000',
    muted: '#646464',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    }
  },
}

const theme = {
  ...base,
  styles: {
    ...base.styles,
  },
}

export default theme;