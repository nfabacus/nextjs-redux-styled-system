import React from 'react';
import styled from '@emotion/styled';
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  variant
} from 'styled-system';

export const Box = styled.div`
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${flexbox}
  ${grid}
  ${background}
  ${border}
  ${position}
  ${shadow}
  ${variant}
`;

const Div = (props) => <Box as="div" fontFamily="body" my={3} { ...props } />;
const H1 = (props) => <Box as="h1" fontFamily="heading" my={3} { ...props } />;
const H2 = (props) => <Box as="h2" fontFamily="heading" my={3} { ...props } />;
const H3 = (props) => <Box as="h3" fontFamily="heading" my={3} { ...props } />;
const H4 = (props) => <Box as="h4" fontFamily="heading" my={3} { ...props } />;
const P = (props) => <Box as="p" fontFamily="body" fontSize={2} mt={0} mb={2} { ...props } />;
const Span = (props) => <Box as="span" fontFamily="body" fontSize={2} { ...props } />;

const Label = (props) => (
  <Box
    as="label"
    fontWeight="bold"
    margin={0}
    fontFamily="body"
    fontSize={1}
    display="flex"
    // width="100%"
    style={{
      boxSizing: 'border-box',
      //   // minWidth: '0px',
      //   // width: '100%'
    }}
    { ...props }
  />
);
const Input = (props) => (
  <Box
    as={props.type === "textarea" ? "textarea" : "input"}
    width="100%"
    fontFamily="body"
    fontSize={2}
    lineHeight="inherit"
    borderWidth={1}
    borderStyle="solid"
    borderRadius={1}
    padding={2}
    color="inherit"
    bg="transparent"
    style={{
      boxSizing: 'border-box'
    }}
    { ...props }
  />
);
const Small = (props) => (
  <Box
    as="small"
    display="flex"
    fontSize={2}
    pt={1}
    { ...props }
  />
);

export { Div, H1, H2, H3, H4, P, Label, Span, Input, Small }
