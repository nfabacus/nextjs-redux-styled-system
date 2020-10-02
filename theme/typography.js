import { Box, Styled, Label as ThemeLabel, Input as ThemeInput } from 'theme-ui'

const Div = Box

const H1 = (props) => <Styled.h1 { ...props } />
const H2 = (props) => <Styled.h2 { ...props } />
const H3 = (props) => <Styled.h3 { ...props } />
const H4 = (props) => <Styled.h4 { ...props } />
const H5 = (props) => <Styled.h5 { ...props } />
const H6 = (props) => <Styled.h6 { ...props } />
const P = (props) => <Styled.p { ...props } />
const Span = (props) => <Styled.span { ...props } />
const Label = (props) => <ThemeLabel { ...props } />
const Input = (props) => <ThemeInput { ...props } />

export { Div, H1, H2, H3, H4, H5, H6, P, Label, Span, Input }


// export const Label = styled.label`
//   display: block;
//   ${selectState};
// `;
//
// export const Span = styled.span`
//   ${selectState};
// `;
//
// export const Input = styled.input``;