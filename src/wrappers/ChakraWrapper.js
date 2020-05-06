import React from 'react';
import {
  CSSReset,
  ThemeProvider,
} from "@chakra-ui/core";
import customTheme from '../theme/custom-themes';

function ChakraWrapper ({children}) {
  return (
    <ThemeProvider theme={customTheme}>
    <CSSReset />
      {children}
    </ThemeProvider>
  )
}

export default ChakraWrapper