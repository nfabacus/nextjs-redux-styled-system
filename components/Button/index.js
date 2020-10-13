import React from 'react';
import { Box } from '../../theme/styledHtmlElements';
import styled from '@emotion/styled';
import { variant } from 'styled-system';

const BoxWithBtnVariants = styled(Box)(
  variant({
    variants: {
      primary: {
        color: 'background',
        bg: 'primary',
        '&:hover': {
          filter: 'brightness(150%)'
        }
      },
      secondary: {
        color: 'background',
        bg: 'secondary',
        '&:hover': {
          filter: 'brightness(150%)'
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
      style={{
        boxSizing: 'border-box',
        textDecoration: 'none'
      }}
      { ...props }
    />
  );
};


export default Button;