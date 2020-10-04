/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box, Heading, Text, Label as ThemeLabel, Input as ThemeInput } from 'theme-ui'

const Div = Box

const H1 = (props) => <Heading as="h1" sx={{ fontSize: 6 }} { ...props } />
const H2 = (props) => <Heading as="h2" sx={{ fontSize: 5 }} { ...props } />
const H3 = (props) => <Heading as="h3" sx={{ fontSize: 4 }} { ...props } />
const H4 = (props) => <Heading as="h4" sx={{ fontSize: 3 }} { ...props } />
const H5 = (props) => <Heading as="h5" sx={{ fontSize: 2 }} { ...props } />
const P = (props) => <Text as="p" sx={{ fontSize: 3 }} { ...props } />
const Span = (props) => <Text as="span" sx={{ fontSize: 3 }} { ...props } />
const Label = (props) => <ThemeLabel { ...props } />
const Input = (props) => <ThemeInput { ...props } />
const HelpMessage = (props) => <Text as="p" sx={{ fontSize: 2 }} { ...props } />

export { Div, H1, H2, H3, H4, H5, P, Label, Span, Input, HelpMessage }
