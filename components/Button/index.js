// import React from 'react';
// import { Button as ThemedButton } from 'theme-ui'
import React from 'react';
import { Box } from '../../theme/styledHtmlElements';
import styled from '@emotion/styled';
import { variant } from 'styled-system';

const BoxWithBtnVariants = styled(Box)(
  variant({
    variants: {
      primary: {
        color: 'color.10',
        bg: 'primary.0',
        '&:hover': {
          bg: 'primary.1'
        },
        '&:focus': {
          outlineWidth: '0',
          boxShadow: '0'
        }
      },
      info: {
        color: 'color.10',
        bg: 'info.0',
        '&:hover': {
          bg: 'info.1'
        },
        '&:focus': {
          outlineWidth: '0',
          boxShadow: '0'
        }
      },
      warning: {
        color: 'color.10',
        bg: 'warning.0',
        '&:hover': {
          bg: 'warning.1'
        },
        '&:focus': {
          outlineWidth: '0',
          boxShadow: '0'
        }
      },
      danger: {
        color: 'color.10',
        bg: 'danger.0',
        '&:hover': {
          bg: 'danger.1'
        },
        '&:focus': {
          outlineWidth: '0',
          boxShadow: '0'
        }
      },
    }
  })
)

const Button = (props) => {
  return (
    <BoxWithBtnVariants
      as="button"
      margin={0}
      fontSize="inherit"
      fontWeight="bold"
      line-height="inherit"
      display="inline-block"
      textAlign="center"
      px={3}
      py={2}
      borderWidth={0}
      borderRadius={1}
      { ...props }
    />
  );
};


export default Button;